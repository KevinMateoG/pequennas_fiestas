import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar({ className, ...props }){
    // TODO: conectar la base de datos para verificar una sesión activa
    const isAuthenticated = false;

    return (
        <nav className={cn("fixed top-0 left-0 w-full z-50 px-6 py-4 bg-white/80 backdrop-blur-md", className)} {...props}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <a href="/" className="text-xl font-semibold tracking-tighter text-[#2e3145]">GigaShow</a>

                    <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <a href="#" className="text-[#2e3145] hover:text-[#4d44e3] transition-colors">Artistas</a>
                        <a href="#" className="text-[#2e3145] hover:text-[#4d44e3] transition-colors">Categorias</a>
                        <a href="#" className="text-[#2e3145] hover:text-[#4d44e3] transition-colors">Sobre nosotros</a>
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
                        <div className="flex items-center gap-6">
                            <a href="/LoginPage" className="text-sm font-medium text-[#2e3145] hover:text-[#4d44e3] transition-colors">Iniciar Sesión</a>
                            <Button>Registrarse</Button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}