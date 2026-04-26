import { Button } from "@/components/ui/button"
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "@/context/AuthContext";

export default function Navbar(){
    // TODO: conectar la base de datos para verificar una sesión activa
    const isAuthenticated = false;
    const { user, isLoading, signOut } = useAuth();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await signOut();
        navigate('/');
    }
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
                    {isLoading ? (
                        // TODO: Definir concepto de navbar cuando hay una sesión activa
                        <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse" />
                    ) : user ? (
                        <div className="flex items-center gap-4">
                            <div className="flex items-center grap-2">
                                {user.image ? (
                                    <img src={user.image}
                                        alt={user.name}
                                        className="w-8 h-8 rounded-full object-cover border border-slate-200"/>
                                    
                                ): (
                                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                                        {user.name?.charAt(0).toUpperCase()}
                                    </div>
                                )}
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 hidden md:block">
                                {user.name}
                            </span>
                            
                        </div>
                        <Link to="/dashboard"
                            className="text-sm font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-300">
                                Mi panel
                        </Link>
                        <button 
                            type="button"
                            onClick={handleSignOut}
                            className="rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
                                Cerrar sesión
                        </button>
                    </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <Button asChild variant="ghost">
                                <Link to="/Login">Iniciar sesión</Link>
                            </Button>
                            <Button asChild>
                                <Link to="/Register">Registrarse</Link>
                            </Button>
                        </div>
                    )}
            </div>
        </div>
    </nav>
    )
}