import { useEffect, useMemo, useState } from 'react'
import ArtistFilters from '@/features/artist/ArtistFilters'
import ArtistCatalogContent from '@/features/artist/ArtistCatalogContent'

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
			<ArtistFilters search={search} onSearchChange={setSearch} />
			<ArtistCatalogContent filteredArtists={filteredArtists} loading={loading} error={error} />
		</main>
	)
}

export default CatalogPage
