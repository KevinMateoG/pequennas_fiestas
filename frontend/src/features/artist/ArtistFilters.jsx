export default function ArtistFilters({
	availableCategories,
	maxPrice,
	onClearFilters,
	onMaxPriceChange,
	onMinPriceChange,
	onSearchChange,
	onToggleCategory,
	search,
	selectedCategories,
	minPrice,
}) {
	const hasActiveFilters =
		search.trim().length > 0 || selectedCategories.length > 0 || minPrice !== '' || maxPrice !== ''

	return (
		<aside className="w-full shrink-0 md:w-72">
			<div className="sticky top-24 space-y-8 rounded-xl bg-white p-5 shadow-sm">
				<div className="flex items-center justify-between">
					<h2 className="font-bold tracking-tight">Filters</h2>
					<button
						className="text-sm font-medium text-indigo-600 disabled:cursor-not-allowed disabled:opacity-40"
						disabled={!hasActiveFilters}
						onClick={onClearFilters}
						type="button"
					>
						Clear all
					</button>
				</div>

				<div className="space-y-2">
					<label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
						Search Name
					</label>
					<input
						className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500"
						placeholder="e.g. Elena Rodriguez"
						value={search}
						onChange={(event) => onSearchChange(event.target.value)}
						type="text"
					/>
				</div>

				<div className="space-y-3">
					<label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
						Category
					</label>
					{availableCategories.length > 0 ? (
						<div className="space-y-2 text-sm">
							{availableCategories.map((category) => {
								const isSelected = selectedCategories.includes(category)

								return (
									<label key={category} className="flex items-center gap-3">
										<input
											checked={isSelected}
											onChange={() => onToggleCategory(category)}
											className="h-4 w-4 rounded border-slate-300 accent-indigo-600"
											type="checkbox"
										/>
										<span>{category}</span>
									</label>
								)
							})}
						</div>
					) : (
						<p className="text-sm text-slate-500">
							Carga artistas para ver sus categorias disponibles.
						</p>
					)}
				</div>

				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
							Price Range
						</label>
						<span className="text-xs font-medium text-indigo-600">
							{minPrice === '' && maxPrice === '' ? 'All prices' : `${minPrice || '0'} - ${maxPrice || 'Any'}`}
						</span>
					</div>

					<div className="grid gap-3 text-sm">
						<label className="space-y-2">
							<span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Min</span>
							<input
								className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-500"
								onChange={(event) => onMinPriceChange(event.target.value)}
								placeholder="0"
								value={minPrice}
								type="number"
							/>
						</label>
						<label className="space-y-2">
							<span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Max</span>
							<input
								className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-500"
								onChange={(event) => onMaxPriceChange(event.target.value)}
								placeholder="Any"
								value={maxPrice}
								type="number"
							/>
						</label>
					</div>
				</div>
			</div>
		</aside>
	)
}
