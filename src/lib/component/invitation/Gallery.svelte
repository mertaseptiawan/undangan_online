<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import GalleryModal from '$lib/component/GalleryModal.svelte';

	interface Props {
		images: string[];
		title?: string;
		theme?: {
			sectionTitleColor?: string;
			imageShape?: string;
		};
	}

	let { images, title = 'Our Moments', theme = {} }: Props = $props();

	const defaultTheme = {
		sectionTitleColor: 'text-rose-900',
		imageShape: 'rounded-lg' // Default shape
	};

	const finalTheme = $derived({ ...defaultTheme, ...theme });

	let isModalOpen = $state(false);
	let activeIndex = $state(0);

	function openModal(index: number) {
		activeIndex = index;
		isModalOpen = true;
	}
</script>

<section class="px-4 py-20">
	<h2 use:reveal class="mb-12 text-center font-serif text-5xl {finalTheme.sectionTitleColor}">
		{title}
	</h2>

	<div class="mx-auto max-w-6xl columns-2 gap-4 space-y-4 md:columns-3">
		{#each images as img, i}
			<div
				class="break-inside-avoid"
				use:reveal={{ delay: (i % 3) * 100, scale: 0.9, distance: '20px' }}
			>
				<button
					aria-label="View photo {i + 1}"
					onclick={() => openModal(i)}
					class="group block w-full overflow-hidden rounded-lg shadow-md focus:outline-none"
				>
					<img
						class="w-full {finalTheme.imageShape} transition-transform duration-500 group-hover:scale-105"
						src={img}
						alt="Gallery {i + 1}"
						loading="lazy"
					/>
				</button>
			</div>
		{/each}
	</div>

	<GalleryModal
		{images}
		bind:isOpen={isModalOpen}
		bind:currentIndex={activeIndex}
		on:close={() => (isModalOpen = false)}
	/>
</section>
