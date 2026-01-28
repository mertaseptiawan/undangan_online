<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	interface Event {
		name: string;
		time: string;
		locationName: string;
		address: string;
		mapUrl?: string; // Optional custom map URL
	}

	interface Props {
		events: Event[];
		theme?: {
			sectionTitleColor?: string;
			eventTitleColor?: string;
			textColor?: string;
			cardBg?: string;
			cardShadow?: string;
			cardShape?: string;
		};
	}

	let { events, theme = {} }: Props = $props();

	const defaultTheme = {
		sectionTitleColor: 'text-rose-900',
		eventTitleColor: 'text-rose-800',
		textColor: 'text-gray-600',
		cardBg: 'bg-white',
		cardShadow: 'shadow-lg',
		cardShape: 'rounded-tl-3xl rounded-br-3xl' // Default shape logic moved here
	};

	const finalTheme = { ...defaultTheme, ...theme };
</script>

<section class="mx-auto max-w-4xl px-4 py-24 text-center">
	<h2 use:reveal class="mb-12 font-serif text-4xl {finalTheme.sectionTitleColor}">The Details</h2>

	<div class="grid gap-12 md:grid-cols-2">
		{#each events as event, i}
			<div
				use:reveal={{ delay: (i + 1) * 100 }}
				class="{finalTheme.cardShape} {finalTheme.cardBg} p-10 {finalTheme.cardShadow}"
			>
				<h3 class="mb-4 font-serif text-2xl {finalTheme.eventTitleColor}">{event.name}</h3>
				<p class="mb-4 font-medium {finalTheme.textColor}">{event.time}</p>
				<p class="leading-relaxed {finalTheme.textColor} opacity-80">
					{event.locationName}<br />
					{@html event.address.replace(/\n/g, '<br />')}
				</p>
				{#if event.mapUrl}
					<a
						href={event.mapUrl}
						target="_blank"
						class="mt-4 inline-block text-sm underline opacity-60 hover:opacity-100 {finalTheme.textColor}"
						>View Map</a
					>
				{/if}
			</div>
		{/each}
	</div>
</section>
