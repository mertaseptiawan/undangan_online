<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	interface Person {
		name: string;
		fullName: string;
		photo: string;
		parents: string[];
		address?: string; // Optional, from reference
	}

	interface Props {
		groom: Person;
		bride: Person;
		theme?: {
			sectionTitleColor?: string;
			nameColor?: string;
			textColor?: string;
			frameColor?: string;
			dividerColor?: string;
			imageShape?: string;
			frameShape?: string;
		};
		title?: string;
	}

	let { groom, bride, theme = {}, title = 'The Couple' }: Props = $props();

	const defaultTheme = {
		sectionTitleColor: 'text-rose-900',
		nameColor: 'text-rose-800',
		textColor: 'text-gray-600',
		frameColor: 'border-rose-200',
		dividerColor: 'text-rose-300',
		imageShape: 'rounded-full',
		frameShape: 'rounded-full'
	};

	const finalTheme = { ...defaultTheme, ...theme };
</script>

<section class="mx-auto max-w-6xl px-4 py-20 text-center">
	<h2 use:reveal class="mb-16 font-serif text-5xl {finalTheme.sectionTitleColor}">{title}</h2>

	<div class="grid items-center gap-12 md:grid-cols-3">
		<!-- Groom -->
		<div class="flex flex-col items-center">
			<div
				use:reveal={{ direction: 'left', distance: '50px', duration: 1000 }}
				class="h-80 w-64 border-4 p-2 {finalTheme.frameColor} {finalTheme.frameShape} mb-6 overflow-hidden shadow-xl"
			>
				<img
					src={groom.photo}
					class="h-full w-full {finalTheme.imageShape} object-cover"
					alt="Groom"
				/>
			</div>
			<div
				use:reveal={{ direction: 'left', distance: '50px', delay: 200, duration: 1000 }}
				class="text-center"
			>
				<h3 class="font-serif text-3xl font-semibold {finalTheme.nameColor}">{groom.name}</h3>
				<p class="mt-2 italic {finalTheme.textColor}">{groom.fullName}</p>

				<p class="mt-4 text-sm italic opacity-80 {finalTheme.textColor}">Putra dari</p>
				
				<div class="flex flex-col items-center">
					{#each groom.parents as parent, i}
						<p class="text-sm italic {finalTheme.textColor}">
							{parent}
						</p>
						
						{#if i < groom.parents.length - 1}
							<span class="text-xs my-0.5 font-serif italic {finalTheme.dividerColor || 'text-[#d4af37]'}">
								&
							</span>
						{/if}
					{/each}
				</div>

				{#if groom.address}
					<p class="mt-2 text-sm italic {finalTheme.textColor}">{groom.address}</p>
				{/if}
			</div>
		</div>

		<!-- Divider -->
		<h2 use:reveal class="font-serif text-6xl {finalTheme.dividerColor}">&</h2>

		<!-- Bride -->
		<div class="flex flex-col items-center">
			<div
				use:reveal={{ direction: 'right', distance: '50px', duration: 1000 }}
				class="h-80 w-64 border-4 p-2 {finalTheme.frameColor} {finalTheme.frameShape} mb-6 overflow-hidden shadow-xl"
			>
				<img
					src={bride.photo}
					class="h-full w-full {finalTheme.imageShape} object-cover"
					alt="Bride"
				/>
			</div>
			<div
				use:reveal={{ direction: 'right', distance: '50px', delay: 200, duration: 1000 }}
				class="text-center"
			>
				<h3 class="font-serif text-3xl font-semibold {finalTheme.nameColor}">{bride.name}</h3>
				<p class="mt-2 italic {finalTheme.textColor}">{bride.fullName}</p>

				<p class="mt-4 text-sm italic opacity-80 {finalTheme.textColor}">Putri dari</p>
				
				<div class="flex flex-col items-center">
					{#each bride.parents as parent, i}
						<p class="text-sm italic {finalTheme.textColor}">
							{parent}
						</p>
						
						{#if i < bride.parents.length - 1}
							<span class="text-xs my-0.5 font-serif italic {finalTheme.dividerColor || 'text-[#d4af37]'}">
								&
							</span>
						{/if}
					{/each}
				</div>

				{#if bride.address}
					<p class="mt-2 text-sm italic {finalTheme.textColor}">{bride.address}</p>
				{/if}
			</div>
		</div>
	</div>
</section>
