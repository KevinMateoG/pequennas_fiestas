function CatalogPage() {
	return (
		<div className="min-h-screen bg-[#fbf8ff] text-[#2e3145] antialiased">
			<nav className="fixed top-0 z-50 w-full bg-white/80 shadow-sm backdrop-blur-md">
				<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
					<div className="text-xl font-bold tracking-tighter text-slate-900">ArtistHire</div>
					<div className="hidden items-center gap-x-8 md:flex">
						<a className="font-semibold text-indigo-600" href="#catalog">
							Browse Artists
						</a>
						<a className="text-slate-600 transition-colors hover:text-indigo-600" href="#how-it-works">
							How it Works
						</a>
						<a className="text-slate-600 transition-colors hover:text-indigo-600" href="#pricing">
							Pricing
						</a>
					</div>
					<div className="flex items-center gap-x-4">
						<button className="px-4 py-2 text-slate-600 transition-colors hover:text-indigo-600">Log In</button>
						<button className="rounded-lg bg-indigo-600 px-5 py-2 font-semibold text-white transition-colors hover:bg-indigo-700">
							Register
						</button>
					</div>
				</div>
			</nav>

			<main id="catalog" className="mx-auto flex max-w-7xl flex-col gap-8 px-6 pb-16 pt-24 md:flex-row">
				<aside className="w-full flex-shrink-0 md:w-72">
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

					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<div className="overflow-hidden rounded-xl bg-white shadow-sm">
							<img alt="Artist 1" className="aspect-square w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxHYDoliqHftEMQckfvFrwn63j8FV5GWt1NBH3SG531J6y2M_Vx2b9YfasgDIR2moT8T5ndXFF_S3z5YZhxbUelkShfHHWxBPvT0Iua4JnHnGDCqdq9xC984e1ufew8q4xN3JhJ9sywEcE8T1jQcQsUXsw1kAjSi8UaQCnRWMQRY1AwWZym6p-l9vEZigD9u8cfYo0eqUjKLvT0x_jbbT_Q8hlHE9hy3oHj2lBOJdH2avOkBu05TiwwKaug7iPdwxh8fDB61UGJHk" />
							<div className="p-5">
								<h3 className="text-lg font-bold tracking-tight">Elena Rodriguez</h3>
								<p className="text-sm text-slate-600">Digital Art · 4.9 · from $45 per hour</p>
							</div>
						</div>

						<div className="overflow-hidden rounded-xl bg-white shadow-sm">
							<img alt="Artist 2" className="aspect-square w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArmZaxlndliiveR4nlae5HTL9JUawQGcP8NHjjJENmccQ6Sv0d8BI2-8YvGzXnn62ZKVjQ2eynhifs9ZPAZo5t71l9CqbE4ZDViaiKqJ3ypipXjR1v45l7MOmHruRrjaNfjYBe3vFSrDjxTD0JQiXnz41ZHHmXBdc73sTHgaFRjCBgg04yvMaLsAMuymTjjsl6Nke-4xgtNJjeSZ_uunv7BVWGmSbdEXTawJgMJbLhrBhfBrp_Xyej1JGc4Wgyo2yABxE0kyDRJDQ" />
							<div className="p-5">
								<h3 className="text-lg font-bold tracking-tight">Marcus Thorne</h3>
								<p className="text-sm text-slate-600">Illustration · 5.0 · from $60 per hour</p>
							</div>
						</div>

						<div className="overflow-hidden rounded-xl bg-white shadow-sm">
							<img alt="Artist 3" className="aspect-square w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBElGDdvpeREyRcDNOlu_ZJ1hhe-U1o4Y059-htMtvEcKQyJm3anYq3pM-GzHExXZNxuFavZxNKJnZvEyfQf6b4I8cUQ-0sj5fv6LkbyKq2zzC_ZnnajpdhRgOKenK_iz1gzR4vBTXU8knYjawwJEn6XHYyTuNHEJ-uUDUT5sA83QwBqoKgRmOxSDvlKMs9xqqANZBBV5nbVtA1xnXvOFLcgwqNCIRKz-t3fiqxobKwozfIkOvbiCdDNsGy-Ycpc1pHdlThAU9001M" />
							<div className="p-5">
								<h3 className="text-lg font-bold tracking-tight">Sophia Chen</h3>
								<p className="text-sm text-slate-600">Photography · 4.8 · from $85 per hour</p>
							</div>
						</div>
					</div>

					<div className="mt-12 flex justify-center gap-2">
						<button className="h-10 w-10 rounded-lg bg-slate-100">1</button>
						<button className="h-10 w-10 rounded-lg bg-slate-100">2</button>
						<button className="h-10 w-10 rounded-lg bg-slate-100">3</button>
					</div>
				</section>
			</main>

			<footer className="border-t border-slate-100 bg-white py-8">
				<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 md:flex-row">
					<div className="font-bold text-slate-900">ArtistHire</div>
					<p className="text-sm text-slate-500">© 2024 ArtistHire Marketplace. All rights reserved.</p>
				</div>
			</footer>
		</div>
	)
}

export default CatalogPage
