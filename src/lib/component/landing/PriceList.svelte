<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	const packages = [
		{
			name: 'Paket 1',
			price: '125K',
			description: 'Perfect for intimate celebrations',
			features: [
				'Nama Tamu Undangan',
				'Google Map',
				'Lagu',
				'Hitung Mundur Acara',
				'Google Kalender',
				'Buku Tamu / Reservasi',
				'Kado Digital',
				'Foto Cover',
				'Foto Profil'
			],
			highlight: false
		},
		{
			name: 'Paket 2',
			price: '150K',
			description: 'Our most popular choice',
			features: [
				'Nama Tamu Undangan',
				'Google Map',
				'Lagu',
				'Hitung Mundur Acara',
				'Google Kalender',
				'Buku Tamu / Reservasi',
				'Kado Digital',
				'Foto Cover',
				'Foto Profil',
				'Foto Galeri (9)'
			],
			highlight: true
		},
		{
			name: 'Paket 3',
			price: '200K',
			description: 'The complete experience',
			features: [
				'Nama Tamu Undangan',
				'Google Map',
				'Lagu',
				'Hitung Mundur Acara',
				'Google Kalender',
				'Buku Tamu / Reservasi',
				'Foto Cover',
				'Foto Profil',
				'Foto Galeri (15)',
				'Video',
				'Kado Digital'
			],
			highlight: false
		}
	];
</script>

<section id="pricing" class="bg-white px-4 py-24">
	<div class="mx-auto max-w-7xl">
		<div class="mb-16 text-center">
			<h2
				use:reveal={{ direction: 'bottom', distance: '30px', duration: 1000 }}
				class="font-serif-elegant mb-4 text-4xl text-amber-900 md:text-5xl"
			>
				Price List
			</h2>
			<p
				use:reveal={{ direction: 'bottom', distance: '30px', delay: 200, duration: 1000 }}
				class="mx-auto max-w-2xl text-gray-500"
			>
				Choose the package that fits your needs. Transparent pricing with no hidden fees.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-3 md:items-center">
			{#each packages as pkg, i}
				<div
					use:reveal={{ delay: i * 150, distance: '30px', duration: 1000 }}
					class="relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:shadow-xl {pkg.highlight
						? 'scale-105 border-amber-200 bg-amber-50 shadow-lg'
						: 'border-gray-100 bg-white shadow-sm'}"
				>
					{#if pkg.highlight}
						<div
							class="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-600 px-4 py-1 text-xs font-bold tracking-widest text-white uppercase shadow-md"
						>
							Best Value
						</div>
					{/if}

					<div class="mb-8 text-center">
						<h3 class="font-serif text-2xl font-bold text-gray-900">{pkg.name}</h3>
						<p class="mt-2 text-sm text-gray-500">{pkg.description}</p>
						<div class="mt-6 flex items-baseline justify-center gap-1">
							<span class="text-4xl font-bold text-amber-900">{pkg.price}</span>
						</div>
					</div>

					<ul class="mb-8 flex-1 space-y-4">
						{#each pkg.features as feature}
							<li class="flex items-start gap-3 text-sm text-gray-600">
								<svg
									class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
								{feature}
							</li>
						{/each}
					</ul>

					<a
						href="https://wa.me/yournumber?text=Hi, I'm interested in {pkg.name}"
						target="_blank"
						class="w-full rounded-xl py-3 text-center text-sm font-semibold transition-colors {pkg.highlight
							? 'bg-amber-900 text-white hover:bg-amber-800'
							: 'bg-gray-100 text-gray-900 hover:bg-gray-200'}"
					>
						Choose Plan
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
