<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { Snippet } from 'svelte';

	interface Props {
		coupleNames: string;
		date: string;
		imageUrl: string;
		theme?: {
			titleColor?: string;
			dateColor?: string;
		};
		children?: Snippet; // Svelte 5 snippet support
	}

	let { coupleNames, date, imageUrl, theme = {}, children }: Props = $props();

	const defaultTheme = {
		titleColor: 'text-rose-900',
		dateColor: 'text-gray-700'
	};

	const finalTheme = { ...defaultTheme, ...theme };
</script>

<section class="relative flex h-screen items-center justify-center overflow-hidden text-center">
	<div class="absolute inset-0 z-0">
		<div
			class="h-full w-full bg-cover bg-center transition-transform duration-[20s] hover:scale-110"
			style="background-image: url('{imageUrl}')"
		></div>
		<div class="absolute inset-0 bg-black/40"></div>
	</div>

	<div
		use:reveal={{ direction: 'bottom', duration: 1000 }}
		class="relative z-10 m-4 flex flex-col items-center justify-center p-8"
	>
		<p class="mb-6 text-sm tracking-[0.5em] text-white/90 uppercase drop-shadow-md md:text-base">
			Save The Date
		</p>
		<h1 class="mb-6 font-serif text-5xl leading-tight text-white drop-shadow-lg md:text-8xl">
			{coupleNames}
		</h1>

		<div class="mb-10 flex items-center gap-4 text-white/90">
			<div class="h-[1px] w-12 bg-white/60"></div>
			<p class="text-lg font-light tracking-wide italic md:text-2xl">{date}</p>
			<div class="h-[1px] w-12 bg-white/60"></div>
		</div>

		<!-- Render children (Countdown) if provided -->
		{#if children}
			<div class="mt-8">
				{@render children()}
			</div>
		{/if}
	</div>

	{#if !children}
		<div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 14l-7 7m0 0l-7-7m7 7V3"
				/>
			</svg>
		</div>
	{/if}
</section>
