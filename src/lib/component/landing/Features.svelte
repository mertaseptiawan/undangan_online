<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="features" class="bg-white py-24">
	<div class="mx-auto max-w-7xl px-4">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<span class="mb-2 block text-sm font-semibold tracking-wider text-amber-600 uppercase"
				>Why Choose Us</span
			>
			<h2
				use:reveal={{ direction: 'bottom', distance: '30px', duration: 1000 }}
				class="font-serif-elegant mb-6 text-4xl text-gray-900 md:text-5xl"
			>
				Everything You Need for Your Special Day
			</h2>
			<p class="text-gray-500">
				We provide premium features to ensure your digital invitation experience is seamless,
				beautiful, and functional.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
			<!-- Feature 1 -->
			<div
				use:reveal={{ delay: 0, distance: '30px' }}
				class="rounded-2xl border border-transparent bg-gray-50 p-8 transition-colors duration-300 hover:border-amber-100 hover:bg-amber-50/50"
			>
				<div
					class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700"
				>
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
							d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
				</div>
				<h3 class="mb-3 font-serif text-xl text-gray-900">Google Maps Integration</h3>
				<p class="text-sm leading-relaxed text-gray-500">
					Direct your guests to your venue effortlessly with integrated Google Maps and location
					details.
				</p>
			</div>

			<!-- Feature 2 -->
			<div
				use:reveal={{ delay: 100, distance: '30px' }}
				class="rounded-2xl border border-transparent bg-gray-50 p-8 transition-colors duration-300 hover:border-amber-100 hover:bg-amber-50/50"
			>
				<div
					class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700"
				>
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
							d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2M9 6V3l12-3v3m-6 8a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
				</div>
				<h3 class="mb-3 font-serif text-xl text-gray-900">Atmospheric Music</h3>
				<p class="text-sm leading-relaxed text-gray-500">
					Set the mood with autoplay background music that can be controlled by your guests.
				</p>
			</div>

			<!-- Feature 3 -->
			<div
				use:reveal={{ delay: 200, distance: '30px' }}
				class="rounded-2xl border border-transparent bg-gray-50 p-8 transition-colors duration-300 hover:border-amber-100 hover:bg-amber-50/50"
			>
				<div
					class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700"
				>
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
							d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</div>
				<h3 class="mb-3 font-serif text-xl text-gray-900">Direct RSVP</h3>
				<p class="text-sm leading-relaxed text-gray-500">
					Get instant confirmations from your guests via WhatsApp or our integrated guestbook
					system.
				</p>
			</div>

			<!-- Feature 4 -->
			<div
				use:reveal={{ delay: 300, distance: '30px' }}
				class="rounded-2xl border border-transparent bg-gray-50 p-8 transition-colors duration-300 hover:border-amber-100 hover:bg-amber-50/50"
			>
				<div
					class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700"
				>
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
							d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
						/>
					</svg>
				</div>
				<h3 class="mb-3 font-serif text-xl text-gray-900">Digital Gift</h3>
				<p class="text-sm leading-relaxed text-gray-500">
					Accept cashless gifts easily with integrated QRIS and bank account information.
				</p>
			</div>
		</div>
	</div>
</section>
