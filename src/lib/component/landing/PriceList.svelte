<script lang="ts">
	interface Package {
		name: string;
		price: string;
		description: string;
		features: string[];
		highlight: boolean;
	}

	interface Design {
		id: string;
		name: string;
		image: string;
	}

	import { reveal } from '$lib/actions/reveal';
	import { fade, scale } from 'svelte/transition';

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

	const designs: Design[] = [
        { id: 'Elegant', name: 'Elegant', image: '/image/elegant/cover.jpeg' },
        { id: 'Artistic', name: 'Artistic', image: '/image/artistic/2.png' },
        { id: 'Modern', name: 'Modern', image: '/image/modern/2.png' },
    ];

	let { onclick } = $props<{ onclick: () => void }>();

    // States dengan Type Safety
    let selectedPackage = $state<Package | null>(null);
    let showDesignPicker = $state<boolean>(false);

    // Fungsi Handler
    function handleChoosePlan(pkg: Package): void {
        selectedPackage = pkg;
        showDesignPicker = true;
    }

    function closePicker(): void {
        showDesignPicker = false;
        // Berikan sedikit delay sebelum null agar transisi tidak pecah
        setTimeout(() => { selectedPackage = null; }, 300);
    }

    function generateWaLink(designName: string): string {
        if (!selectedPackage) return '#';
        
        const message = `Halo, saya ingin memesan paket *${selectedPackage.name}* dengan desain *${designName}*. Mohon info selanjutnya.`;
        return `https://wa.me/+6285735544434?text=${encodeURIComponent(message)}`;
    }
	
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
									class="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
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

					<!-- <a
						href="https://wa.me/yournumber?text=Hi, I'm interested in {pkg.name}"
						target="_blank"
						class="w-full rounded-xl py-3 text-center text-sm font-semibold transition-colors {pkg.highlight
							? 'bg-amber-900 text-white hover:bg-amber-800'
							: 'bg-gray-100 text-gray-900 hover:bg-gray-200'}"
					>
						Choose Plan
					</a> -->
					<button
						type="button"
						onclick={() => handleChoosePlan(pkg)}
						class="w-full rounded-xl py-3 text-center text-sm font-semibold transition-colors {pkg.highlight
							? 'bg-amber-900 text-white hover:bg-amber-800'
							: 'bg-gray-100 text-gray-900 hover:bg-gray-200'}"
					>
						Choose Plan
					</button>
				</div>
			{/each}
		</div>
	</div>
</section>

{#if showDesignPicker && selectedPackage}
    <div 
        transition:fade={{ duration: 200 }}
        class="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
        onclick={closePicker}
        onkeydown={(e) => e.key === 'Escape' && closePicker()}
        role="button"
        tabindex="0"
    >
        <div 
            transition:scale={{ start: 0.95, duration: 300 }}
            class="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-4xl bg-white p-6 md:p-10 shadow-2xl"
            onclick={(e) => e.stopPropagation()}
            role="none"
        >
            <div class="mb-8 flex items-center justify-between border-b border-gray-100 pb-6">
                <div>
                    <h3 class="text-3xl font-serif text-gray-900">Choose Design</h3>
                    <p class="text-amber-700">{selectedPackage.name} • {selectedPackage.price}</p>
                </div>
                <button 
					type="button"
					onclick={closePicker} class="group relative rounded-full bg-gray-50 p-3 text-gray-400 transition-all duration-200 hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
					aria-label="Clode Design Picker"
					title="Close"
				>
					<svg 
						class="h-6 w-6" 
						fill="none" 
						viewBox="0 0 24 24" 
						stroke="currentColor" 
						aria-hidden="true"
					>
						<path 
							stroke-linecap="round" 
							stroke-linejoin="round" 
							stroke-width="2" 
							d="M6 18L18 6M6 6l12 12" 
						/>
					</svg>

					<span class="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
						Close
					</span>
				</button>
            </div>

            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {#each designs as design (design.id)}
                    <a
                        href={generateWaLink(design.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all hover:border-amber-500 hover:shadow-xl"
                    >
                        <div class="relative aspect-3/4 overflow-hidden">
                            <img 
                                src={design.image} 
                                alt={design.name} 
                                class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 flex items-end justify-center pb-6">
                                <span class="rounded-full bg-white px-4 py-2 text-xs font-bold text-gray-900 shadow-lg">Gunakan Desain Ini</span>
                            </div>
                        </div>
                        <div class="p-4 text-center">
                            <p class="font-serif text-lg font-medium text-gray-800">{design.name}</p>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
    </div>
{/if}
