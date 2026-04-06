function HomePage() {
	return (
		<main className="min-h-screen bg-[#fbf8ff] px-6 pt-28 text-[#2e3145]">
			<div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
				<p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4d44e3]">Inicio</p>
				<h1 className="text-5xl font-extrabold tracking-tighter">Bienvenido a GigaShow</h1>
				<p className="max-w-2xl text-lg text-slate-600">
					Usa el botón "Artistas" en el navbar para abrir el catálogo.
				</p>
			</div>
		</main>
	)
}

export default HomePage
