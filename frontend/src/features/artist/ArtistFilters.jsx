export default function ArtistFilters({ search, onSearchChange }) {
	return (
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
						onChange={(event) => onSearchChange(event.target.value)}
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
	)
}