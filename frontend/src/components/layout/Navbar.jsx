import { cn } from "@/lib/utils"
import { Link } from 'react-router-dom'

export default function Navbar({ className, ...props }){
    // TODO: conectar la base de datos para verificar una sesión activa
    const isAuthenticated = false;

    return (
        <nav className={cn("fixed top-0 left-0 w-full z-50 px-6 py-4 bg-white/80 backdrop-blur-md", className)} {...props}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link to="/" className="text-xl font-semibold tracking-tighter text-[#2e3145]">GigaShow</Link>

                    <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <Link to="/catalog" className="text-[#2e3145] hover:text-[#4d44e3] transition-colors">Artistas</Link>
                        <a href="#" className="text-[#2e3145] hover:text-[#4d44e3] transition-colors">Categorias</a>
                        <a href="#" className="text-[#2e3145] hover:text-[#4d44e3] transition-colors">Sobre nosotros</a>
                    </div>
                </div>

                <div>
                    {isAuthenticated ? (
                        // TODO: Definir concepto de navbar cuando hay una sesión activa
                        <div className="flex items-center gap-4">
                            <a href="/" className="text-sm font-medium text-[#2e3145] hover:text-[#4d44e3]">Mi panel</a>
                            <button type="button" className="rounded-md border border-[#d5d8f6] px-4 py-2 text-sm font-medium text-[#2e3145] hover:bg-[#f3f2ff]">
                                Cerrar Sesión
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-6">
                            <Link to="/login" className="text-sm font-medium text-[#2e3145] hover:text-[#4d44e3] transition-colors">Iniciar Sesión</Link>
                            <button type="button" className="rounded-md bg-[#4d44e3] px-4 py-2 text-sm font-medium text-white hover:bg-[#4034d7]">
                                Registrarse
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}