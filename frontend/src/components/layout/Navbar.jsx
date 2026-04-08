import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

export default function Navbar(){
    // TODO: conectar la base de datos para verificar una sesión activa
    const isAuthenticated = false;

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm dark:shadow-none">
            <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
                <div className="flex items-center gap-8">
                    <Link to="/" className="text-xl font-bold tracking-tighter text-slate-900 dark:text-slate-50">GigaShow</Link>

                    <div className="hidden md:flex items-center gap-x-6">
                        <Link to="/catalog" className="text-indigo-600 dark:text-indigo-400 font-semibold font-sans antialiased tracking-tight transition-colors duration-200">Artistas</Link>
                        <Link to="/catalog" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 font-sans antialiased tracking-tight transition-colors duration-200">Categorias</Link>
                        <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 font-sans antialiased tracking-tight transition-colors duration-200">Sobre nosotros</Link>
                    </div>
                </div>

                <div>
                    {isAuthenticated ? (
                        // TODO: Definir concepto de navbar cuando hay una sesión activa
                        <div className="flex items-center gap-4">
                            <Link to="/" className="text-sm font-medium text-[#2e3145] hover:text-[#4d44e3]">Mi panel</Link>
                            <button type="button" className="rounded-md border border-[#d5d8f6] px-4 py-2 text-sm font-medium text-[#2e3145] hover:bg-[#f3f2ff]">
                                Cerrar Sesión
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <Button asChild variant="ghost">
                                <Link to="/login">Acceder</Link>
                            </Button>
                            <Button asChild>
                                <Link to="/register">Registrarse</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}