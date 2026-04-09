const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export const authClient = {
  async signUp(data) {
    const response = await fetch(`${API_BASE_URL}/api/auth/sign-up/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include',
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Error al registrarse')
    }

    return await response.json()
  },

  async signIn(data) {
    const response = await fetch(`${API_BASE_URL}/api/auth/sign-in/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include',
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Error al iniciar sesión')
    }

    return await response.json()
  },

  async getSession() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/session`, {
        credentials: 'include',
      })

      if (!response.ok) {
        return null
      }

      return await response.json()
    } catch {
      return null
    }
  },

  async signOut() {
    try {
      await fetch(`${API_BASE_URL}/api/auth/sign-out`, {
        method: 'POST',
        credentials: 'include',
      })
    } catch (error) {
      console.error('Error al cerrar sesión:', error)
    }
  },
}