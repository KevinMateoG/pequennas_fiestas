import { useState } from "react"
import authClient from "../../lib/authClient";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import * as z from "zod";

const formSchema = z.object({
    email: z.string().email({ message: "Email no es valido" }),
    password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
})

export default function LoginForm() {
    const form = useForm<z.infer<typeof formSchema>>({ resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })
    
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
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <Input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}
            <button 
                type="submit" 
                className="bg-blue-500 text-white py-2 px-4 rounded disabled:bg-gray-400"
                disabled={isLoading}
            >
                {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
            </button>
        </form>
    )
}