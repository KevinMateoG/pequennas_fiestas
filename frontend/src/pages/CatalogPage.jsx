import { Link } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'

const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000'

function CatalogPage() {
	const [artists, setArtists] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')
	const [search, setSearch] = useState('')

	useEffect(() => {
		const controller = new AbortController()

		async function fetchArtists() {
			try {
				setLoading(true)
				setError('')

				const response = await fetch(`${API_BASE_URL}/api/artists`, {
					signal: controller.signal,
				})

				if (!response.ok) {
					throw new Error('No se pudo cargar el catalogo de artistas.')
				}

				const payload = await response.json()
				setArtists(Array.isArray(payload.data) ? payload.data : [])
			} catch (fetchError) {
				if (fetchError.name !== 'AbortError') {
					setError(fetchError.message)
				}
			} finally {
				setLoading(false)
			}
		}

		fetchArtists()

		return () => controller.abort()
	}, [])

	const filteredArtists = useMemo(() => {
		const normalizedSearch = search.trim().toLowerCase()

		if (!normalizedSearch) {
			return artists
		}

		return artists.filter((artist) => artist.name?.toLowerCase().includes(normalizedSearch))
	}, [artists, search])

	return (
		<main id="catalog" className="mx-auto flex min-h-screen max-w-7xl flex-col gap-8 bg-[#fbf8ff] px-6 pb-16 pt-24 text-[#2e3145] antialiased md:flex-row">
				<aside className="w-full shrink-0 md:w-72">
					<div className="sticky top-24 space-y-8 rounded-xl bg-white p-5 shadow-sm">
						<div className="flex items-center justify-between">
							<h2 className="font-bold tracking-tight">Filters</h2>
							<button className="text-sm font-medium text-indigo-600">Clear all</button>
						</div>
						<div className="space-y-2">
							<label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Search Name</label>
							<input
								className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500"
								placeholder="e.g. Elena Rodriguez"
								value={search}
								onChange={(event) => setSearch(event.target.value)}
								type="text"
							/>
						</div>
						<div className="space-y-3">
							<label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Category</label>
							<div className="space-y-2 text-sm">
								<label className="flex items-center gap-3">
									<input checked readOnly className="h-4 w-4 rounded border-slate-300 accent-indigo-600" type="checkbox" />
									<span>Visual Arts</span>
								</label>
								<label className="flex items-center gap-3">
									<input className="h-4 w-4 rounded border-slate-300 accent-indigo-600" type="checkbox" />
									<span>Digital Design</span>
								</label>
								<label className="flex items-center gap-3">
									<input className="h-4 w-4 rounded border-slate-300 accent-indigo-600" type="checkbox" />
									<span>Photography</span>
								</label>
								<label className="flex items-center gap-3">
									<input className="h-4 w-4 rounded border-slate-300 accent-indigo-600" type="checkbox" />
									<span>Performance</span>
								</label>
							</div>
						</div>
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Price Range</label>
								<span className="text-xs font-medium text-indigo-600">$20 - $500</span>
							</div>
							<div className="h-2 rounded-full bg-slate-200">
								<div className="h-2 w-2/3 rounded-full bg-indigo-600" />
							</div>
						</div>
					</div>
				</aside>

				<section className="flex-1" id="pricing">
					<div className="mb-8">
						<span className="mb-2 inline-block rounded bg-indigo-100 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-700">
							Discovery
						</span>
						<h1 className="text-4xl font-extrabold tracking-tighter text-[#2e3145]">Top Rated Artists</h1>
						<p className="mt-2 max-w-lg text-slate-600">Connect with vetted professionals from around the globe for your next creative project.</p>
					</div>

					{loading && <p className="mb-6 rounded-lg bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">Cargando artistas...</p>}
					{error && <p className="mb-6 rounded-lg bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p>}

					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{filteredArtists.map((artist) => (
							<Link key={artist.id} to={`/detail/${artist.id}`} className="overflow-hidden rounded-xl bg-white shadow-sm transition-transform hover:-translate-y-1">
								<img alt={artist.name} className="aspect-square w-full object-cover" src={artist.imageUrl} />
								<div className="p-5">
									<h3 className="text-lg font-bold tracking-tight">{artist.name}</h3>
									<p className="text-sm text-slate-600">
										{artist.category} · {artist.rating.toFixed(1)} · from ${artist.hourlyRate} per hour
									</p>
								</div>
							</Link>
						))}
					</div>
					{!loading && !error && filteredArtists.length === 0 && (
						<p className="mt-6 rounded-lg bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
							No hay artistas para mostrar. Verifica que exista la tabla artists en Neon y que tenga datos.
						</p>
					)}

					<div className="mt-12 flex justify-center gap-2">
						<button className="h-10 w-10 rounded-lg bg-slate-100">1</button>
						<button className="h-10 w-10 rounded-lg bg-slate-100">2</button>
						<button className="h-10 w-10 rounded-lg bg-slate-100">3</button>
					</div>
				</section>
			</main>
	)
}

export default CatalogPage
