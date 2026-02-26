<script lang="ts">
	import { onMount } from 'svelte';

	let isScrolled = false;
	let isMobileMenuOpen = false;

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav
	class="fixed top-0 left-0 z-50 w-full transition-all duration-300 {isScrolled || isMobileMenuOpen
		? 'bg-white/90 py-4 shadow-sm backdrop-blur-md'
		: 'bg-transparent py-6'}"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8">
		<!-- Logo -->
		<a
			href="/"
			class="font-serif-elegant text-2xl font-bold {isScrolled || isMobileMenuOpen
				? 'text-amber-900'
				: 'text-white'}"
		>
			InviteNow
		</a>

		<!-- Desktop Menu -->
		<div class="hidden items-center gap-8 md:flex">
			<a
				href="#features"
				class="text-sm font-medium transition-colors hover:text-amber-600 {isScrolled
					? 'text-gray-600'
					: 'text-white/90'}">Features</a
			>
			<a
				href="#how-it-works"
				class="text-sm font-medium transition-colors hover:text-amber-600 {isScrolled
					? 'text-gray-600'
					: 'text-white/90'}">How it Works</a
			>
			<a
				href="#templates"
				class="text-sm font-medium transition-colors hover:text-amber-600 {isScrolled
					? 'text-gray-600'
					: 'text-white/90'}">Templates</a
			>
			<a
				href="#pricing"
				class="rounded-full px-5 py-2.5 text-sm font-semibold transition-all {isScrolled
					? 'bg-amber-900 text-white hover:bg-amber-800'
					: 'bg-white text-amber-900 hover:bg-gray-100'}"
			>
				Create Invitation
			</a>
		</div>

		<!-- Mobile Toggle -->
		<button
			class="p-2 focus:outline-none md:hidden {isScrolled || isMobileMenuOpen
				? 'text-gray-800'
				: 'text-white'}"
			on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				{#if isMobileMenuOpen}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				{:else}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				{/if}
			</svg>
		</button>
	</div>

	<!-- Mobile Menu -->
	{#if isMobileMenuOpen}
		<div
			class="absolute top-full left-0 flex w-full flex-col gap-4 border-t border-gray-100 bg-white/95 px-4 py-4 shadow-xl backdrop-blur-xl md:hidden"
		>
			<a
				href="#features"
				class="font-medium text-gray-600 hover:text-amber-600"
				on:click={() => (isMobileMenuOpen = false)}>Features</a
			>
			<a
				href="#how-it-works"
				class="font-medium text-gray-600 hover:text-amber-600"
				on:click={() => (isMobileMenuOpen = false)}>How it Works</a
			>
			<a
				href="#templates"
				class="font-medium text-gray-600 hover:text-amber-600"
				on:click={() => (isMobileMenuOpen = false)}>Templates</a
			>
			<a
				href="#pricing"
				class="w-full rounded-lg bg-amber-900 py-3 text-center font-semibold text-white"
				on:click={() => (isMobileMenuOpen = false)}
			>
				Create Invitation
			</a>
		</div>
	{/if}
</nav>
