<script lang="ts">
	import { onMount } from 'svelte';
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

	const targetDate = '2026-02-14T14:00:00';

	const groom = {
		name: 'Alex',
		fullName: 'Alexander Hamilton',
		photo:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
		parents: ['Mr. James Hamilton', 'Mrs. Rachel Fawcett']
	};

	const bride = {
		name: 'Sarah',
		fullName: 'Sarah Elizabeth Schuyler',
		photo:
			'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop',
		parents: ['Mr. Philip Schuyler', 'Mrs. Catherine Van Rensselaer']
	};

	const events = [
		{
			name: 'The Ceremony',
			time: '04:00 PM',
			locationName: 'Rose Garden Pavilion',
			address: '123 Garden Way\nSpringfield, IL'
		},
		{
			name: 'The Reception',
			time: '06:00 PM',
			locationName: 'The Grand Ballroom',
			address: '456 Celebration Blvd\nSpringfield, IL'
		}
	];

	const galleryImages = [
		'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
		'https://images.unsplash.com/photo-1511285560982-1356c11d4606?q=80&w=1000&auto=format&fit=crop',
		'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop',
		'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1000&auto=format&fit=crop',
		'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1000&auto=format&fit=crop',
		'https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1000&auto=format&fit=crop'
	];

	const bankAccounts = [
		{
			bankName: 'BCA',
			accountNumber: '1234567890',
			accountHolder: 'Alexander Hamilton'
		}
	];

	// Specific Floral Theme Config
	const theme = {
		cover: {
			bgColor: 'bg-rose-100', // Solid color for split
			textColor: 'text-rose-900',
			buttonColor: 'bg-rose-800 text-white hover:bg-rose-900',
			accentColor: 'border-rose-300'
		},
		countdown: {
			bgColor: 'bg-white/80',
			numberColor: 'text-rose-600',
			labelColor: 'text-rose-400',
			borderColor: 'border-rose-100'
		}
	};
</script>

{#if !showContent}
	<Cover
		coupleNames="Alex & Sarah"
		subTitle="Request the honor of your presence"
		onOpen={openCover}
		theme={theme.cover}
	/>
{:else}
	<MusicControl />

	<main class="min-h-screen w-full overflow-hidden bg-rose-50/50 font-serif text-rose-950">
		<div transition:fade>
			<Hero
				coupleNames="Alex & Sarah"
				date="February 14th, 2026"
				imageUrl="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2000&auto=format&fit=crop"
			/>

			<!-- Reordered Section: Couple First -->
			<Couple {groom} {bride} />

			<!-- Countdown Removed from Hero, placed here -->
			<section class="bg-rose-100/50 py-12">
				<div class="container mx-auto px-4">
					<h3 class="mb-6 text-center font-serif text-2xl text-rose-800 italic">
						Counting down to the big day
					</h3>
					<Countdown {targetDate} theme={theme.countdown} />
				</div>
			</section>

			<EventDetails {events} />

			<Gallery images={galleryImages} />

			<RSVP />

			<Gift {bankAccounts} />

			<Footer />
		</div>
	</main>
{/if}
