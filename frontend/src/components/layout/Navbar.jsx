import { Button } from "@/components/ui/button"

export default function Navbar(){
    // TODO: conectar la base de datos para verificar una sesión activa
    //! Urgente: Definir los colores del estilo del prototipo.
    const isAuthenticated = false;

    return (
        <nav className="w-full border-b bg-white px-6 py-4">
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-8">
                    <a href="/" className="text-xl font-bold text-slate-900">GigaShow</a>

                    <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <a href="#" className="text-blue-900">Link Example</a>
                        <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Link Example 2</a>
                        <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Link Example 3</a>
                    </div>
                </div>

                <div>
                    {isAuthenticated ? (
                        // TODO: Definir concepto de navbar cuando hay una sesión activa
                        <div className="flex items-center gap-4">
                            <a href="/" className="text-sm font-medium text-slate-700 hover:text-slate-900">Mi panel</a>
                            <Button variant="outline">Cerrar Sesión</Button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-6">
                            <a href="/LoginPage" className="text-sm font-medium text-slate-600 hover:text-slate-900">Iniciar Sesión</a>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Registrarse</Button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}