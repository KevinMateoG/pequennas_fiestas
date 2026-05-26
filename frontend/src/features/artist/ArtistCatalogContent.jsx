import ArtistCard from '@/features/artist/ArtistCard'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

export default function ArtistCatalogContent({ filteredArtists, loading, error }) {
	return (
		<section className="flex-1" id="pricing">
			<div className="mb-8">
				<span className="mb-2 inline-block rounded bg-indigo-100 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-700">
					Discovery
				</span>
				<h1 className="text-4xl font-extrabold tracking-tighter text-[#2e3145]">Top Rated Artists</h1>
				<p className="mt-2 max-w-lg text-slate-600">Connect with vetted professionals from around the globe for your next creative project.</p>
			</div>

			{loading && <LoadingSpinner message="Cargando artistas…" fullPage={false} />}
			{error && <p className="mb-6 rounded-lg bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p>}

			{!loading && !error && (
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{filteredArtists.map((artist) => (
						<ArtistCard key={artist.id} artist={artist} />
					))}
				</div>
			)}
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
	)
}
