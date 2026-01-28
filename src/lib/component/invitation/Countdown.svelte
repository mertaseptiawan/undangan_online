<script lang="ts">
	import { onDestroy } from 'svelte';
	import { createCountdown } from '$lib/stores/useCountdown';
	import { reveal } from '$lib/actions/reveal';

	interface Props {
		targetDate: string;
		theme?: {
			bgColor?: string;
			numberColor?: string;
			labelColor?: string;
			borderColor?: string;
		};
	}

	let { targetDate, theme = {} }: Props = $props();

	const defaultTheme = {
		bgColor: 'bg-white',
		numberColor: 'text-gray-900',
		labelColor: 'text-gray-500',
		borderColor: 'border-gray-200'
	};

	const finalTheme = { ...defaultTheme, ...theme };

	const countdownStore = createCountdown(targetDate);
	const format = (n: number) => n.toString().padStart(2, '0');

	onDestroy(() => {
		countdownStore.stop();
	});
</script>

<div class="flex w-full justify-center gap-2 py-8 md:gap-6">
	{#each ['Days', 'Hours', 'Mins', 'Secs'] as label, i}
		{@const value =
			i === 0
				? $countdownStore.days
				: i === 1
					? $countdownStore.hours
					: i === 2
						? $countdownStore.minutes
						: $countdownStore.seconds}
		<div
			use:reveal={{ direction: 'bottom', delay: i * 100, distance: '20px' }}
			class="flex h-20 w-20 flex-col items-center justify-center rounded-2xl md:h-24 md:w-24 {finalTheme.bgColor} border shadow-lg {finalTheme.borderColor}"
		>
			<span class="text-2xl font-bold md:text-3xl {finalTheme.numberColor} tabular-nums">
				{format(value)}
			</span>
			<span class="text-[10px] tracking-widest uppercase md:text-xs {finalTheme.labelColor} mt-1">
				{label}
			</span>
		</div>
	{/each}
</div>
