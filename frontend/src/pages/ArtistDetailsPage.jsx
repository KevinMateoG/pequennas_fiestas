function ArtistDetailsPage() {
	return (
		<div className="bg-surface text-on-background antialiased">
			<nav className="fixed top-0 z-50 w-full bg-white/80 shadow-sm backdrop-blur-md">
				<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
					<div className="flex items-center gap-8">
						<a className="text-xl font-bold tracking-tighter text-slate-900" href="#">
							GigaShow
						</a>
						<div className="hidden items-center gap-x-6 md:flex">
							<a className="font-semibold tracking-tight text-indigo-600 transition-colors duration-200" href="#">Explorar Artistas</a>
							<a className="tracking-tight text-slate-600 transition-colors duration-200 hover:text-indigo-600" href="#">Cómo Funciona</a>
							<a className="tracking-tight text-slate-600 transition-colors duration-200 hover:text-indigo-600" href="#">Precios</a>
						</div>
					</div>
					<div className="flex items-center gap-4">
						<button className="px-4 py-2 font-medium text-slate-600 transition-all duration-200 hover:text-indigo-600">Acceder</button>
						<button className="rounded-lg bg-indigo-600 px-5 py-2.5 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-indigo-700">Registro</button>
					</div>
				</div>
			</nav>

			<main className="mx-auto max-w-7xl px-6 pb-16 pt-24">
				<div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
					<div className="space-y-8 lg:col-span-7">
						<div className="relative group">
						  <div className="aspect-4/3 overflow-hidden rounded-xl bg-zinc-100">
								<img
									alt="Julian R. - Animador Profesional"
									className="h-full w-full object-cover"
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3uUfoBo5rB2jWK8DICG1PLGWDTb4PNKqm3XGnfLlQm1DxbUkcAvJnZGoinj-UsOYhJXt5u5H5ofa34H92Zzr9NdVU37UAsrjc_lQrEskmaaMlnFoZyE2pYJZIaIeswaSl1igr3HIu3kVKg2m7yjh1i85FIquHhLxKu1tBk6aqvHOCI6SlmiGEGOXTzNkySPaE7vGHeXOEo0mttc5uX6sJJALxhHYtBK_ljUmq1-Wul_OBlxvDHGUFU8nUPPmf_aIp-heAtb0LHIY"
								/>
							</div>
							<div className="absolute left-4 top-4">
								<span className="rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-900 shadow-sm backdrop-blur-sm">
									Artista Verificado
								</span>
							</div>
						</div>

						<div className="space-y-4">
							<div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
								<div>
									<p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">Animador &amp; Maestro de Ceremonias</p>
									<h1 className="text-4xl font-extrabold tracking-tighter text-zinc-900">Julian R.</h1>
								</div>
								<div className="flex items-center gap-1 rounded-lg border border-zinc-200 bg-zinc-100 px-3 py-1.5">
									<span className="material-symbols-outlined text-lg text-indigo-600">verified</span>
									<span className="font-bold text-zinc-900">5.0</span>
									<span className="text-sm text-zinc-500">(86 contrataciones)</span>
								</div>
							</div>

							<p className="text-lg leading-relaxed text-zinc-600">
								Con más de 8 años de trayectoria en el sector del entretenimiento premium, Julian se especializa en la dinamización de eventos
								corporativos y lanzamientos de marca. Su enfoque profesional combina carisma, elegancia y un manejo impecable del protocolo para
								elevar cualquier producción.
							</p>

							<div className="my-8 h-px w-full bg-zinc-200" />

							<div className="grid grid-cols-2 gap-6 md:grid-cols-3">
								<div className="flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
										<span className="material-symbols-outlined">location_on</span>
									</div>
									<div>
										<p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Ubicación</p>
										<p className="font-semibold text-zinc-900">CDMX, México</p>
									</div>
								</div>

								<div className="flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
										<span className="material-symbols-outlined">payments</span>
									</div>
									<div>
										<p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Desde</p>
										<p className="font-semibold text-zinc-900">$3,500 MXN / hr</p>
									</div>
								</div>

								<div className="flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
										<span className="material-symbols-outlined">verified_user</span>
									</div>
									<div>
										<p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Seguro</p>
										<p className="font-semibold text-zinc-900">Responsabilidad Incl.</p>
									</div>
								</div>
							</div>

							<div className="my-8 h-px w-full bg-zinc-200" />

							<div className="space-y-6">
								<h3 className="text-xl font-bold tracking-tight text-zinc-900">Especialidades de Alto Impacto</h3>
								<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
									<div className="rounded-xl border border-zinc-100 bg-zinc-50 p-6 transition-colors hover:border-indigo-200">
										<p className="mb-2 font-bold text-zinc-900">Protocolo Corporativo</p>
										<p className="text-sm leading-relaxed text-zinc-600">
											Conducción de galas y presentaciones empresariales con un tono sofisticado y ejecutivo.
										</p>
									</div>
									<div className="rounded-xl border border-zinc-100 bg-zinc-50 p-6 transition-colors hover:border-indigo-200">
										<p className="mb-2 font-bold text-zinc-900">Activaciones de Marca</p>
										<p className="text-sm leading-relaxed text-zinc-600">
											Dinamización creativa para lanzamientos de productos, asegurando el engagement del público.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="lg:sticky lg:top-28 lg:col-span-5">
						<div className="rounded-xl border border-zinc-100 bg-white p-8 shadow-xl">
							<div className="mb-8">
								<h2 className="mb-2 text-2xl font-bold tracking-tight text-zinc-900">Reserva una Sesión</h2>
								<p className="text-sm text-zinc-500">Inicia tu solicitud de contratación para asegurar la fecha de tu evento.</p>
							</div>
							<form className="space-y-6">
								<div className="space-y-2">
									<label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Fecha del Evento</label>
									<div className="relative">
										<span className="material-symbols-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">calendar_today</span>
										<input className="w-full rounded-lg border-zinc-200 bg-zinc-50 py-3 pl-12 pr-4 text-zinc-900 transition-all focus:ring-2 focus:ring-indigo-600" type="date" />
									</div>
								</div>

								<div className="space-y-2">
									<label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Turno Preferido</label>
									<div className="grid grid-cols-2 gap-3">
										<label className="cursor-pointer">
											<input className="peer sr-only" name="time" type="radio" />
											<div className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-center text-sm font-semibold text-zinc-600 transition-all peer-checked:border-indigo-600 peer-checked:bg-indigo-600 peer-checked:text-white">
												Mañana
											</div>
										</label>
										<label className="cursor-pointer">
											<input defaultChecked className="peer sr-only" name="time" type="radio" />
											<div className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-center text-sm font-semibold text-zinc-600 transition-all peer-checked:border-indigo-600 peer-checked:bg-indigo-600 peer-checked:text-white">
												Tarde/Noche
											</div>
										</label>
									</div>
								</div>

								<div className="space-y-2">
									<label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Detalles de la Producción</label>
									<textarea
										className="w-full rounded-lg border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-900 placeholder:text-zinc-400 transition-all focus:ring-2 focus:ring-indigo-600"
										placeholder="Describa el tipo de evento, número de asistentes y requerimientos técnicos..."
										rows="4"
									/>
								</div>

								<button className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 py-4 font-bold text-white shadow-lg shadow-indigo-200 transition-all active:scale-[0.98] hover:bg-indigo-700" type="submit">
									Enviar Solicitud Profesional
									<span className="material-symbols-outlined text-lg">send</span>
								</button>
								<p className="px-4 text-center text-[10px] leading-relaxed text-zinc-400">
									Tus datos y pagos están protegidos por el protocolo GigaShow. El artista responderá en menos de 24 horas.
								</p>
							</form>
						</div>

						<div className="mt-6 flex items-center gap-4 rounded-xl border border-indigo-100 bg-indigo-50/50 p-6">
							<div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-50 bg-white text-indigo-600 shadow-sm">
								<span className="material-symbols-outlined">verified</span>
							</div>
							<div>
								<p className="text-sm font-bold text-zinc-900">Garantía Ética GigaShow</p>
								<p className="text-xs leading-tight text-zinc-500">Remuneración justa y condiciones de trabajo dignificadas para todos nuestros talentos.</p>
							</div>
						</div>
					</div>
				</div>
			</main>

			<footer className="w-full border-t border-zinc-100 bg-white py-12">
				<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-8 md:flex-row">
					<div className="flex flex-col gap-2">
						<span className="text-xl font-bold tracking-tighter text-zinc-900">GigaShow</span>
						<p className="text-xs text-zinc-500">© 2024 GigaShow Entertainment Marketplace. Elevando el talento profesional.</p>
					</div>
					<div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
						<a className="text-xs font-medium text-zinc-500 transition-colors hover:text-indigo-600 hover:underline" href="#">Términos de Servicio</a>
						<a className="text-xs font-medium text-zinc-500 transition-colors hover:text-indigo-600 hover:underline" href="#">Privacidad</a>
						<a className="text-xs font-medium text-zinc-500 transition-colors hover:text-indigo-600 hover:underline" href="#">Contacto</a>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default ArtistDetailsPage
