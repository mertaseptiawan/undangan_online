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

	const targetDate = '2026-12-12T10:00:00';

	const groom = {
		name: 'William',
		fullName: 'Prince William Arthur',
		photo:
			'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop',
		parents: ['King Charles III', 'Princess Diana']
	};

	const bride = {
		name: 'Catherine',
		fullName: 'Catherine Elizabeth Middleton',
		photo:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop',
		parents: ['Mr. Michael Middleton', 'Mrs. Carole Middleton']
	};

	const events = [
		{
			name: 'Holy Matrimony',
			time: '10:00 AM',
			locationName: 'Cathedral of Saint Mary',
			address: '123 Royal Street\nLondon, UK'
		},
		{
			name: 'Royal Reception',
			time: '7:00 PM',
			locationName: 'The Imperial Palace',
			address: '456 Crown Avenue\nLondon, UK'
		}
	];

	const galleryImages = [
		'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
		'https://images.unsplash.com/photo-1511285560982-1356c11d4606?q=80&w=1000&auto=format&fit=crop'
	];

	const bankAccounts = [
		{
			bankName: 'Royal Bank',
			accountNumber: '111-222-333',
			accountHolder: 'HRH William'
		}
	];

	const theme = {
		cover: {
			bgColor: 'bg-slate-900', // Dark
			textColor: 'text-amber-100',
			buttonColor: 'bg-amber-600 hover:bg-amber-500 text-white',
			accentColor: 'border-amber-700'
		},
		hero: {
			titleColor: 'text-amber-100',
			dateColor: 'text-amber-200/80'
		},
		countdown: {
			bgColor: 'bg-slate-800',
			numberColor: 'text-amber-400',
			labelColor: 'text-slate-400',
			borderColor: 'border-slate-700'
		},
		couple: {
			sectionTitleColor: 'text-amber-900',
			nameColor: 'text-slate-900',
			textColor: 'text-slate-600',
			frameColor: 'border-amber-200',
			dividerColor: 'text-amber-700'
		},
		details: {
			sectionTitleColor: 'text-amber-900',
			eventTitleColor: 'text-amber-800',
			textColor: 'text-slate-700',
			cardBg: 'bg-amber-50',
			cardShadow: 'shadow-xl border border-amber-200'
		},
		gallery: {
			sectionTitleColor: 'text-slate-900'
		},
		rsvp: {
			sectionTitleColor: 'text-slate-900',
			cardBg: 'bg-white border border-amber-100',
			buttonColor: 'bg-amber-800 hover:bg-amber-900 text-white',
			inputBorder: 'border-amber-200 focus:ring-amber-500'
		},
		gift: {
			sectionTitleColor: 'text-slate-900',
			cardBg: 'bg-slate-50 border border-slate-100',
			textColor: 'text-slate-700',
			buttonColor: 'bg-amber-100 text-amber-900 hover:bg-amber-200'
		},
		footer: {
			bgColor: 'bg-slate-900',
			textColor: 'text-amber-300'
		}
	};
</script>

{#if !showContent}
	<Cover
		coupleNames="William & Catherine"
		subTitle="Royal Invitation"
		onOpen={openCover}
		theme={theme.cover}
	/>
{:else}
	<MusicControl />

	<main class="font-serif-elegant min-h-screen w-full overflow-hidden bg-slate-50">
		<div transition:fade>
			<Hero
				coupleNames="William & Catherine"
				date="December 12th, 2026"
				imageUrl="https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=2000&auto=format&fit=crop"
				theme={theme.hero}
			/>

			<section class="bg-white py-20">
				<Couple {groom} {bride} theme={theme.couple} />

				<div class="px-4 pb-20">
					<Countdown {targetDate} theme={theme.countdown} />
				</div>

				<EventDetails {events} theme={theme.details} />

				<Gallery images={galleryImages} theme={theme.gallery} />

				<RSVP theme={theme.rsvp} />

				<Gift {bankAccounts} theme={theme.gift} />
			</section>

			<Footer message="We look forward to celebrating with you" theme={theme.footer} />
		</div>
	</main>
{/if}
