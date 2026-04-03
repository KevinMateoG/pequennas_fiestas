const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const authClient = {
    async signUp(email,password, name) {
        const reponse = await fetch(`${API_URL}/api/auth/sign-up/email`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({email, password, name}),
        });

        if (!reponse.ok) {
            const error = await reponse.json()
            console.log(error)
            throw new Error(error.message || 'Error al registrarse')
        }
        return reponse.json()
    },

    async signIn(email, password) {
        const reponse = await fetch(`${API_URL}/api/auth/sign-in/email`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({email, password}),
        });
        if (!reponse.ok) {
            const error = await reponse.json()
            console.log(error)
            throw new Error(error.message || 'Error al registrarse')
        }
        return reponse.json()
    },

    async signOut() {
        const reponse = await fetch(`${API_URL}/api/auth/sign-out`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        });
        if (!reponse.ok) {
            const error = await reponse.json()
            console.log(error)
            throw new Error(error.message || 'Error al registrarse')
        }
        return reponse.json()
    },

    async getSession() {
        const reponse = await fetch(`${API_URL}/api/auth/get-session`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        });
        if (!reponse.ok) {
            const error = await reponse.json()
            throw new Error(error.message || 'Error al registrarse')
        }
        return reponse.json()
    },

    async setRole(role) {
        const reponse = await fetch(`${API_URL}/api/onboarding/role`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({role})
            }
        )

        if (!reponse.ok) {
            const error = await reponse.json()
            throw new Error(error.message || 'Error al registrarse')
        }
        return reponse.json()
    }
}
export const { signUp, signIn, signOut, setRole, getSession } = authClient;
export default authClient;