<script lang="ts">
	import { fade } from 'svelte/transition';
	import MusicControl from '$lib/component/MusicControl.svelte';
	import Cover from '$lib/component/invitation/Cover.svelte';
	import Hero from '$lib/component/invitation/Hero.svelte';
	import Countdown from '$lib/component/invitation/Countdown.svelte';
	import Couple from '$lib/component/invitation/Couple.svelte';
	import EventDetails from '$lib/component/invitation/EventDetails.svelte';
	import Gallery from '$lib/component/invitation/Gallery.svelte';
	import RSVP from '$lib/component/invitation/RSVP.svelte';
	import Gift from '$lib/component/invitation/Gift.svelte';
	import Footer from '$lib/component/invitation/Footer.svelte';

	let showContent = false;

	function openCover() {
		showContent = true;
	}

	const targetDate = '2026-09-20T16:00:00';

	const groom = {
		name: 'James',
		fullName: 'James Alexander',
		photo:
			'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop',
		parents: ['Mr. Robert Alexander', 'Mrs. Mary Alexander']
	};

	const bride = {
		name: 'Kara',
		fullName: 'Kara Danvers',
		photo:
			'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit-crop',
		parents: ['Mr. Jeremiah Danvers', 'Mrs. Eliza Danvers']
	};

	const events = [
		{
			name: 'The Ceremony',
			time: '16:00',
			locationName: 'White Space Studio',
			address: '77 Modern Ave\nMetropolis, NY'
		},
		{
			name: 'The Party',
			time: '19:00',
			locationName: 'Rooftop Lounge',
			address: '88 Skyline Dr\nMetropolis, NY'
		}
	];

	const galleryImages = [
		'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
		'https://images.unsplash.com/photo-1511285560982-1356c11d4606?q=80&w=1000&auto=format&fit=crop',
		'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop'
	];

	const bankAccounts = [
		{
			bankName: 'Chase',
			accountNumber: '987654321',
			accountHolder: 'James Alexander'
		}
	];

	const theme = {
		cover: {
			bgColor: 'bg-zinc-900', // Dark cover for contrast
			textColor: 'text-zinc-50',
			buttonColor: 'bg-zinc-50 text-zinc-900 hover:bg-zinc-200',
			accentColor: 'border-zinc-800'
		},
		hero: {
			titleColor: 'text-zinc-900',
			dateColor: 'text-zinc-500'
		},
		countdown: {
			bgColor: 'bg-zinc-100',
			numberColor: 'text-zinc-900',
			labelColor: 'text-zinc-500',
			borderColor: 'border-zinc-200'
		},
		couple: {
			sectionTitleColor: 'text-zinc-900',
			nameColor: 'text-zinc-800',
			textColor: 'text-zinc-600',
			frameColor: 'border-zinc-200',
			dividerColor: 'text-zinc-300',
			imageShape: 'rounded-none',
			frameShape: 'rounded-none border-2'
		},
		details: {
			sectionTitleColor: 'text-zinc-900',
			eventTitleColor: 'text-zinc-800',
			textColor: 'text-zinc-600',
			cardBg: 'bg-white',
			cardShadow: 'shadow-sm border border-zinc-100',
			cardShape: 'rounded-none'
		},
		gallery: {
			sectionTitleColor: 'text-zinc-900',
			imageShape: 'rounded-none grayscale transition-all hover:grayscale-0'
		},
		rsvp: {
			sectionTitleColor: 'text-zinc-900',
			cardBg: 'bg-white border border-zinc-100',
			buttonColor: 'bg-zinc-900 hover:bg-black text-white',
			inputBorder: 'border-zinc-200 focus:ring-zinc-500',
			cardShape: 'rounded-none',
			inputShape: 'rounded-none',
			buttonShape: 'rounded-none'
		},
		gift: {
			sectionTitleColor: 'text-zinc-900',
			cardBg: 'bg-white border border-zinc-100',
			textColor: 'text-zinc-600',
			buttonColor: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200',
			cardShape: 'rounded-none',
			buttonShape: 'rounded-none'
		},
		footer: {
			bgColor: 'bg-zinc-900',
			textColor: 'text-zinc-400'
		}
	};
</script>

{#if !showContent}
	<Cover
		coupleNames="James & Kara"
		title="WEDDING"
		subTitle="Sept 20th . NYC"
		onOpen={openCover}
		theme={theme.cover}
	/>
{:else}
	<MusicControl />

	<main class="min-h-screen w-full overflow-hidden bg-zinc-50 font-sans tracking-tight">
		<div transition:fade>
			<Hero
				coupleNames="James & Kara"
				date="SEPTEMBER 20, 2026"
				imageUrl="https://images.unsplash.com/photo-1494859632785-32abaf5241f4?q=80&w=2000&auto=format&fit=crop"
				theme={theme.hero}
			/>

			<div class="relative">
				<!-- Geometric Accent -->
				<div class="absolute top-0 -left-4 h-full w-[1px] bg-zinc-200"></div>
				<Couple {groom} {bride} theme={theme.couple} />
			</div>

			<section class="border-y border-zinc-100 bg-white py-12">
				<div class="relative container mx-auto px-4">
					<!-- Geometric Dot -->
					<div class="absolute -top-6 left-1/2 h-2 w-2 -translate-x-1/2 bg-zinc-900"></div>
					<Countdown {targetDate} theme={theme.countdown} />
				</div>
			</section>

			<EventDetails {events} theme={theme.details} />

			<Gallery images={galleryImages} theme={theme.gallery} />

			<RSVP theme={theme.rsvp} />

			<Gift {bankAccounts} theme={theme.gift} />

			<Footer message="See you there." theme={theme.footer} />
		</div>
	</main>
{/if}
