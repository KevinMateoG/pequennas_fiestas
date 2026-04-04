//! Urgente: Organizar los colores de acuerdo al prototipo.
export default function Footer() {
    return (
        <footer className="w-full py-8 mt-auto boder-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
            <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-6">
                <div className="flex flex-col gap-2">
                    <span className="text-md font-bold text-slate-900 dark:text-slate-50">GigaShow</span>
                    <p className="body-sm text-slate-500 dark:text-slate-400">© 2026 GigaShow. All rights reserved.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
                    <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors body-sm hover:underline">Términos y Condiciones</a>
                    <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors body-sm hover:underline">Pólitica de Privacidad</a>
                    <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors body-sm hover:underline">Configuración de las Cookies</a>
                    <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors body-sm hover:underline">Contactanos</a>
                </div>
            </div>
        </footer>
    )
}