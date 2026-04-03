import { useState } from "react"
import authClient from "../../lib/authClient";


export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState('')
    const [error, setError] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        setError(null)

        if (!email || !password){
            setError("Rellene los campos por favor")
            return
        }

        setIsLoading(true)

        try {
            const signInResponse = await authClient.signIn(email, password)
            console.log(signInResponse)
            setEmail('')
            setPassword('')
        } catch (err){
            setError(err.menssage || 'error al iniciar sesion')
        } finally{
            setIsLoading(false)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" value={email}
                       onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com"/>
            </div>

            <div>
                <label htmlFor="password">Contraseña</label>
                <input id="password" type="password" value={password}
                       onChange={(e) => setPassword(e.target.value)} placeholder="your password"/>
            </div>
            {error && (<div>{error}</div>)}
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Iniciando sesion': 'Iniciar sesion'}
            </button>
        </form>
    )
}