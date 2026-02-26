<script lang="ts">
	const currentYear = new Date().getFullYear();
</script>

<footer class="border-t border-gray-200 bg-gray-50">
	<div class="mx-auto max-w-7xl px-4 py-12 md:py-16">
		<div class="mb-12 grid gap-12 md:grid-cols-4">
			<div class="col-span-1 md:col-span-1">
				<a href="/" class="font-serif-elegant mb-6 block text-2xl font-bold text-amber-900">
					InviteNow
				</a>
				<p class="mb-6 text-sm leading-relaxed text-gray-500">
					Creating beautiful digital experiences for your most special moments. Simple, elegant, and
					forever.
				</p>
				<div class="flex gap-4">
					<!-- Social placeholders -->
					<a
						href="#"
						class="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm transition-all hover:text-amber-600 hover:shadow-md"
					>
						IG
					</a>
					<a
						href="#"
						class="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm transition-all hover:text-amber-600 hover:shadow-md"
					>
						FB
					</a>
				</div>
			</div>

			<div class="col-span-1">
				<h4 class="mb-6 font-semibold text-gray-900">Product</h4>
				<ul class="space-y-4 text-sm text-gray-500">
					<li><a href="#templates" class="transition-colors hover:text-amber-700">Templates</a></li>
					<li><a href="#features" class="transition-colors hover:text-amber-700">Features</a></li>
					<li><a href="#pricing" class="transition-colors hover:text-amber-700">Pricing</a></li>
				</ul>
			</div>

			<div class="col-span-1">
				<h4 class="mb-6 font-semibold text-gray-900">Company</h4>
				<ul class="space-y-4 text-sm text-gray-500">
					<li><a href="#" class="transition-colors hover:text-amber-700">About Us</a></li>
					<li><a href="#" class="transition-colors hover:text-amber-700">Contact</a></li>
					<li><a href="#" class="transition-colors hover:text-amber-700">Privacy Policy</a></li>
					<li><a href="#" class="transition-colors hover:text-amber-700">Terms of Service</a></li>
				</ul>
			</div>

			<div class="col-span-1">
				<h4 class="mb-6 font-semibold text-gray-900">Example</h4>
				<ul class="space-y-4 text-sm text-gray-500">
					<li>
						<a href="/kancilnoning" class="transition-colors hover:text-amber-700">Balinese Style</a
						>
					</li>
					<li>
						<a href="/design/floral" class="transition-colors hover:text-amber-700">Floral Style</a>
					</li>
				</ul>
			</div>
		</div>

		<div
			class="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-sm text-gray-400 md:flex-row"
		>
			<p>&copy; {currentYear} InviteNow. All rights reserved.</p>
			<p>Made with ❤️ in Bali</p>
		</div>
	</div>
</footer>
