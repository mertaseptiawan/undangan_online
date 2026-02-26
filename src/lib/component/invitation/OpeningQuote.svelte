<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
</script>

<div class="relative border-t-4 border-amber-700/50 bg-stone-900 py-20">
	<!-- Background Pattern for Texture -->
	<div
		class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10"
	></div>

	<div class="relative z-10 container mx-auto px-4">
		<!-- Quote Card -->
		<div
			use:reveal={{ direction: 'bottom', duration: 1000 }}
			class="mx-auto max-w-lg rounded-t-[100px] rounded-b-[20px] bg-white p-10 text-center shadow-2xl"
		>
			<!-- Decorative Top Ornament -->
			<div class="mb-6 flex justify-center opacity-50">
				<svg
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					class="text-amber-800"
				>
					<path d="M12 2L14 12L22 14L14 16L12 22L10 16L2 14L10 12L12 2Z" fill="currentColor" />
				</svg>
			</div>

			<p class="font-serif text-xl leading-relaxed text-stone-800 italic">
				"Iha-imā v-indra saṁ nuda.<br />
				Cakravākeva dampatī"
			</p>

			<p class="mt-4 text-sm font-semibold tracking-wider text-amber-900 uppercase">
				(Atharvaveda : XIV.2.64)
			</p>

			<hr class="mx-auto my-6 w-16 border-stone-300" />

			<p class="text-sm leading-loose text-stone-600">
				Ya Tuhan, karuniailah kepada pasangan ini untuk memiliki cinta kasih yang tulus dalam
				membina kehidupan berumah tangga.
			</p>
		</div>
	</div>
</div>

<!-- Intro Section with Om Symbol -->
<div class="bg-white py-16 text-center">
	<div class="container mx-auto max-w-2xl px-6">
		<div use:reveal={{ delay: 200 }} class="mb-8 flex justify-center">
			<!-- Balinese Om Symbol Representation (SVG approximation or Image) -->
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Balinese_Om_Kara.svg/1200px-Balinese_Om_Kara.svg.png"
				alt="Om Swastyastu"
				class="h-24 opacity-80"
			/>
		</div>

		<p use:reveal={{ delay: 400 }} class="font-serif leading-loose text-stone-700">
			Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang Maha Esa, kami bermaksud
			mengundang Bapak/Ibu/Saudara/i pada Resepsi Upacara Manusa Yadnya (Pawiwahan/Pernikahan) Putra
			dan Putri kami
		</p>
	</div>
</div>
