<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	interface Props {
		coupleNames: string;
		title?: string;
		subTitle?: string;
		onOpen: () => void;
		theme?: {
			bgColor?: string; // Should be a solid color class for split screens
			textColor?: string;
			buttonColor?: string;
			accentColor?: string;
		};
	}

	let {
		coupleNames,
		title = 'The Wedding Of',
		subTitle = 'Please join us in our celebration of love',
		onOpen,
		theme = {}
	}: Props = $props();

	const defaultTheme = {
		bgColor: 'bg-rose-50',
		textColor: 'text-rose-900',
		buttonColor: 'bg-rose-900 text-white hover:bg-rose-800',
		accentColor: 'border-rose-300'
	};

	const finalTheme = { ...defaultTheme, ...theme };

	let isOpening = $state(false);

	function handleOpen() {
		isOpening = true;
		setTimeout(() => {
			onOpen();
		}, 800); // Wait for animation
	}
</script>

<!-- Top Half -->
<div
	class="fixed top-0 left-0 z-[60] h-1/2 w-full {finalTheme.bgColor} flex items-end justify-center border-b pb-0 {finalTheme.accentColor} transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]"
	class:!-translate-y-full={isOpening}
>
	<div
		class="px-4 pb-8 text-center"
		class:opacity-0={isOpening}
		class:transition-opacity={isOpening}
	>
		<p class="text-sm tracking-[0.4em] uppercase opacity-60 {finalTheme.textColor} mb-4">{title}</p>
		<h1 class="font-serif text-5xl md:text-7xl {finalTheme.textColor}">
			{coupleNames.split('&')[0]}
		</h1>
	</div>
</div>

<!-- Bottom Half -->
<div
	class="fixed bottom-0 left-0 z-[60] h-1/2 w-full {finalTheme.bgColor} flex items-start justify-center border-t pt-0 {finalTheme.accentColor} transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]"
	class:!translate-y-full={isOpening}
>
	<div
		class="flex flex-col items-center px-4 pt-8 text-center"
		class:opacity-0={isOpening}
		class:transition-opacity={isOpening}
	>
		{#if coupleNames.includes('&')}
			<span class="font-serif text-4xl {finalTheme.textColor} mb-4">&</span>
			<h1 class="font-serif text-5xl md:text-7xl {finalTheme.textColor} mb-8">
				{coupleNames.split('&')[1]}
			</h1>
		{/if}

		<p class="mb-10 max-w-sm text-sm opacity-60 {finalTheme.textColor} italic">{subTitle}</p>

		<button
			onclick={handleOpen}
			class="group relative overflow-hidden rounded-full px-8 py-3 shadow-lg transition-transform hover:scale-105 active:scale-95"
		>
			<div
				class="absolute inset-0 h-full w-full {finalTheme.buttonColor} transition-all duration-300"
			></div>
			<span class="relative flex items-center gap-2 font-medium tracking-wide">
				Open Invitation
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</span>
		</button>
	</div>
</div>

<!-- Background overlay during transition -->
{#if !isOpening}
	<div class="fixed inset-0 z-50 bg-black/5" transition:fade></div>
{/if}
