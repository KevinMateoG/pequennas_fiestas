import { Button } from "@/components/ui/button"

export default function Navbar(){
    // TODO: conectar la base de datos para verificar una sesión activa
    const isAuthenticated = false;

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
                <div className="flex items-center gap-8">
                    <a href="/" className="text-xl font-bold tracking-tighter text-slate-900 dark:text-slate-50">GigaShow</a>

                    <div className="hidden md:flex items-center gap-x-6">
                        <a href="#" className="text-indigo-600 dark:text-indigo-400 font-semibold font-sans antialiased tracking-tight transition-colors duration-200">Artistas</a>
                        <a href="#" className="text-indigo-600 dark:text-indigo-400 font-semibold font-sans antialiased tracking-tight transition-colors duration-200">Categorias</a>
                        <a href="#" className="text-indigo-600 dark:text-indigo-400 font-semibold font-sans antialiased tracking-tight transition-colors duration-200">Sobre nosotros</a>
                    </div>
                </div>

                <div>
                    {isAuthenticated ? (
                        // TODO: Definir concepto de navbar cuando hay una sesión activa
                        <div className="flex items-center gap-4">
                            <a href="/" className="text-sm font-medium text-[#2e3145] hover:text-[#4d44e3]">Mi panel</a>
                            <Button variant="outline">Cerrar Sesión</Button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <Button variant="secondary">Acceder</Button>
                            <Button>Registrarse</Button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}