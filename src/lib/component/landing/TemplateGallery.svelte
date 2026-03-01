<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { templates } from '$lib/data/templates';
</script>

<section id="templates" class="bg-gray-50 px-4 py-20">
	<div class="mx-auto max-w-7xl">
		<div class="mb-16 text-center">
			<h2
				use:reveal={{ direction: 'bottom', distance: '30px', duration: 1000 }}
				class="font-serif-elegant mb-4 text-4xl text-amber-900 md:text-5xl"
			>
				Our Collections
			</h2>
			<p
				use:reveal={{ direction: 'bottom', distance: '30px', delay: 200, duration: 1000 }}
				class="mx-auto max-w-2xl text-gray-500"
			>
				Choose from our carefully crafted templates designed to make your special day even more
				memorable.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
			{#each templates as template, i}
				<a
					href={template.route}
					use:reveal={{ direction: 'bottom', distance: '50px', delay: i * 150, duration: 1000 }}
					class="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl"
				>
					<div class="relative h-96 overflow-hidden">
						<img
							src={template.thumbnail}
							alt={template.title}
							class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
						/>
						<div
							class="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10"
						></div>

						<div
							class="absolute right-4 bottom-4 translate-y-12 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
						>
							<span
								class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-amber-600 shadow-lg"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M14 5l7 7m0 0l-7 7m7-7H3"
									/>
								</svg>
							</span>
						</div>
					</div>

					<div class="flex flex-1 flex-col border-t border-gray-100 p-8">
						<h3
							class="mb-3 font-serif text-2xl text-gray-900 transition-colors group-hover:text-amber-700"
						>
							{template.title}
						</h3>
						<!-- <p class="mb-6 flex-1 text-sm leading-relaxed text-gray-500">
							{template.description}
						</p> -->

						<span
							class="w-fit rounded border border-amber-200 px-3 py-1 text-xs font-bold tracking-widest text-amber-600 uppercase"
						>
							Premium Template
						</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
