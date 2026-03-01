<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="how-it-works" class="relative overflow-hidden bg-zinc-900 py-24 text-white">
	<!-- Decorative background -->
	<div
		class="absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-amber-600/10 blur-3xl"
	></div>
	<div
		class="absolute bottom-0 left-0 -mb-20 -ml-20 h-96 w-96 rounded-full bg-rose-600/10 blur-3xl"
	></div>

	<div class="relative z-10 mx-auto max-w-7xl px-4">
		<div class="mb-20 text-center">
			<span class="mb-2 block text-sm font-semibold tracking-wider text-amber-500 uppercase"
				>Simple Process</span
			>
			<h2
				use:reveal={{ direction: 'bottom', distance: '30px', duration: 1000 }}
				class="font-serif-elegant mb-6 text-4xl text-white md:text-5xl"
			>
				How It Works
			</h2>
		</div>

		<div class="relative grid gap-12 md:grid-cols-3">
			<!-- Connector Line -->
			<div
				class="absolute top-12 right-[16%] left-[16%] hidden h-px bg-linear-to-r from-transparent via-white/20 to-transparent md:block"
			></div>

			<!-- Step 1 -->
			<div
				use:reveal={{ delay: 0, distance: '30px' }}
				class="relative flex flex-col items-center text-center"
			>
				<div
					class="group relative z-10 mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-zinc-800 font-serif text-3xl text-amber-500 shadow-2xl transition-colors hover:border-amber-500/50"
				>
					1
				</div>
				<h3 class="mb-4 font-serif text-2xl">Choose Design</h3>
				<p class="max-w-xs leading-relaxed text-white/50">
					Browse our collection of premium templates and select the one that matches your style.
				</p>
			</div>

			<!-- Step 2 -->
			<div
				use:reveal={{ delay: 200, distance: '30px' }}
				class="relative flex flex-col items-center text-center"
			>
				<div
					class="group relative z-10 mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-zinc-800 font-serif text-3xl text-amber-500 shadow-2xl transition-colors hover:border-amber-500/50"
				>
					2
				</div>
				<h3 class="mb-4 font-serif text-2xl">Customize</h3>
				<p class="max-w-xs leading-relaxed text-white/50">
					Fill in your details, upload photos, and select your music to make it truly yours.
				</p>
			</div>

			<!-- Step 3 -->
			<div
				use:reveal={{ delay: 400, distance: '30px' }}
				class="relative flex flex-col items-center text-center"
			>
				<div
					class="group relative z-10 mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-zinc-800 font-serif text-3xl text-amber-500 shadow-2xl transition-colors hover:border-amber-500/50"
				>
					3
				</div>
				<h3 class="mb-4 font-serif text-2xl">Share</h3>
				<p class="max-w-xs leading-relaxed text-white/50">
					Get your unique link and share it with your friends and family via WhatsApp or Social
					Media.
				</p>
			</div>
		</div>
	</div>
</section>
