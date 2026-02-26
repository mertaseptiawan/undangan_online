<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
</script>

<section
	class="relative flex h-screen items-center justify-center overflow-hidden bg-zinc-900 text-center text-white"
>
	<div class="absolute inset-0 z-10 bg-black/50"></div>
	<div
		class="absolute inset-0 bg-cover bg-center"
		style="background-image: url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
	></div>

	<div class="relative z-20 mx-auto flex max-w-4xl flex-col items-center px-4">
		<h1
			use:reveal={{ direction: 'bottom', distance: '30px', duration: 1000 }}
			class="font-serif-elegant mb-6 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-4xl text-transparent md:text-7xl"
		>
			Create Your Perfect Digital Invitation
		</h1>

		<p
			use:reveal={{ direction: 'bottom', distance: '30px', delay: 200, duration: 1000 }}
			class="mb-10 max-w-2xl text-lg font-light text-gray-200 md:text-xl"
		>
			Share your special moment with elegance. Choose from our stunning designs and customize it to
			tell your unique story.
		</p>

		<a
			href="#templates"
			use:reveal={{ direction: 'bottom', distance: '30px', delay: 400, duration: 1000 }}
			class="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-amber-600/90 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:bg-amber-600 hover:shadow-amber-600/25"
		>
			<span class="relative font-medium tracking-wide">Browse Templates</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1"
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
		</a>
	</div>
</section>
