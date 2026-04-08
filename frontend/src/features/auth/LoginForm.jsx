import { useState } from "react"
import authClient from "../../lib/authClient";
import { useForm } from "react-hook-form";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const onSubmit = async (e) => {
        e.preventDefault()

        setError(null)

        if (!email || !password){
            setError("Rellene los campos por favor")
            return
        }

        setIsLoading(true)

        try {
            const response = await authClient.signIn(email, password)
            console.log(response)
            setEmail('')
            setPassword('')
        } catch (err){
            setError(err.menssage || 'error al iniciar sesion')
        } finally{
            setIsLoading(false)
        }
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" {...register("email", { required: "Email es requerido" })} placeholder="email@example.com"/>
                {/*<input id="email" type="email" value={email}
                       onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com"/>*/}
            </div>

            <div>
                <label htmlFor="password">Contraseña</label>
                <input id="password" type="password" {...register("password", { required: "Contraseña es requerida" })} placeholder="your password"/>
                {/*<input id="password" type="password" value={password}
                       onChange={(e) => setPassword(e.target.value)} placeholder="your password"/>*/}
            </div>
            {errors.email && <div>{errors.email.message}</div>}
            {errors.password && <div>{errors.password.message}</div>}
            {error && (<div>{error}</div>)}
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Iniciando sesion': 'Iniciar sesion'}
            </button>
        </form>
    )
}