import { Link } from 'react-router-dom'

export default function ArtistCard({ artist }) {
	return (
		<Link to={`/detail/${artist.id}`} className="overflow-hidden rounded-xl bg-white shadow-sm transition-transform hover:-translate-y-1">
			<img alt={artist.name} className="aspect-square w-full object-cover" src={artist.imageUrl} />
			<div className="p-5">
				<h3 className="text-lg font-bold tracking-tight">{artist.name}</h3>
				<p className="text-sm text-slate-600">
					{artist.category} · {artist.rating.toFixed(1)} · from ${artist.hourlyRate} per hour
				</p>
			</div>
		</Link>
	)
}
