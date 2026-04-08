import { useState } from "react";
import authClient from "../../lib/authClient";
import { useForm } from "react-hook-form";

export default function RegisterForm(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [role, setRol] = useState('cliente')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault();

        setError('')

        if (!name || !email || !password || !confirmPassword){
            setError("Por favor completar todos los campos");
            return
        }

        if (password.length < 6){
            setError("La contraseña debe ser de mas de 6 caracteres")
            return
        }

        setIsLoading(true);

        try{
            const signUpResponse = await authClient.signUp(email, password, name)
            console.log(signUpResponse);

            const roleResponse = await authClient.setRole(role)
            console.log(roleResponse);

            setName('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            setRol('cliente')

            console.log("Registro exitoso");
        } catch (err){
            setError(err.message || "Error al registrarse")
        } finally {
            setIsLoading(false)
        }
    }

    const updateName = (e) => {setName(e.target.value)}
    const updateEmail = (e) => {setEmail(e.target.value)} 
    const updatePassword = (e) => {setPassword(e.target.value)}
    const updateConfirmPassword = (e) => {setConfirmPassword(e.target.value)}
    const updateRole = (e) => {setRol(e.target.value)}
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" {...register("name", { required: "Name is required" })} value={name}
                placeholder="your name"/>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" {...register("email", { required: "Email is required" })} value={email}
                placeholder="email@example.com"/>
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="text" {...register("password", { required: "Password is required" })} value={password}
                placeholder="your password"/>
            </div>

            <div>
                <label htmlFor="password">Confirm password</label>
                <input id="password" type="text" {...register("confirmPassword", { required: "Confirm Password is required" })} value={confirmPassword}
                placeholder="your password"/>
            </div>

            <div>
                <label htmlFor="role">type of counte</label>
                <select id="role" value={role} onChange={updateRole}>
                    <option value="cliente">Cliente</option>
                    <option value="artista">Artista</option>
                </select>
            </div>
            {error && (<div>
                <p>{error}</p>
            </div>)}

            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Registrando...' : 'Registrarse'}
            </button>
        </form>
    )
}