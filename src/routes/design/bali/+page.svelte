<script lang="ts">
	import { fade } from 'svelte/transition';
	import MusicControl from '$lib/component/MusicControl.svelte';
	import Cover from '$lib/component/invitation/Cover.svelte';
	import Hero from '$lib/component/invitation/Hero.svelte';
	import OpeningQuote from '$lib/component/invitation/OpeningQuote.svelte';
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

	const targetDate = '2023-02-22T15:00:00'; // Matched reference date

	// Reliable Unsplash URLs for Bali theme
	const heroImage =
		'https://images.unsplash.com/photo-1555400038-1245d7a468d6?q=80&w=2000&auto=format&fit=crop'; // Pura Ulun Danu
	const groomPhoto =
		'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=1000&auto=format&fit=crop'; // Man in suit (placeholder) -> switching to generic man
	const bridePhoto =
		'https://images.unsplash.com/photo-1583939003579-73013917c7ce?q=80&w=1000&auto=format&fit=crop'; // Woman (placeholder)
	const eventBg =
		'https://images.unsplash.com/photo-1573763164717-8b1747971ac0?q=80&w=2000&auto=format&fit=crop'; // Leafy texture

	const groom = {
		name: 'Dewa Dhar',
		fullName: 'Dewa Gede Dharmendra',
		photo:
			'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop', // Reliable portrait
		parents: ['Dewa Ketut Alit', 'Desak Putu Aryanti']
	};

	const bride = {
		name: 'Gek Cantik',
		fullName: 'Gek Ayu Cantik',
		photo:
			'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop', // Reliable portrait
		parents: ['I Made Suardana', 'Ni Ketut Suarni']
	};

	const events = [
		{
			name: 'Pawi wahan',
			time: '15:00 Wita s/d selesai',
			locationName: 'Br. Menak',
			address: 'Ds. Tulikup - Gianyar\nBali'
		}
	];

	const galleryImages = [
		'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1000&auto=format&fit=crop', // Dancer
		'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop', // Temple
		'https://images.unsplash.com/photo-1555400038-1245d7a468d6?q=80&w=1000&auto=format&fit=crop' // Scenery
	];

	const bankAccounts = [
		{
			bankName: 'BPD Bali',
			accountNumber: '021 021 021',
			accountHolder: 'Dewa Dharmendra'
		}
	];

	const theme = {
		cover: {
			bgColor: 'bg-[#2C241B]', // Dark coffee/brown
			textColor: 'text-[#E5D3B3]', // Cream/Gold
			buttonColor: 'bg-[#8B7355] hover:bg-[#A68A64] text-white',
			accentColor: 'border-[#8B7355]'
		},
		hero: {
			titleColor: 'text-[#E5D3B3]',
			dateColor: 'text-[#E5D3B3]/90'
		},
		countdown: {
			bgColor: 'transparent',
			numberColor: 'text-white',
			labelColor: 'text-white/80',
			borderColor: 'border-white/20'
		},
		couple: {
			sectionTitleColor: 'text-[#5C4033]',
			nameColor: 'text-[#8B7355]',
			textColor: 'text-[#4A4A4A]',
			frameColor: 'border-[#8B7355]',
			dividerColor: 'text-[#8B7355]',
			imageShape: 'rounded-lg rotate-3', // Slight rotation for polaroid feel? Or just rounded-lg
			frameShape: 'rounded-lg -rotate-3'
		},
		details: {
			sectionTitleColor: 'text-[#E5D3B3]',
			eventTitleColor: 'text-[#E5D3B3]',
			textColor: 'text-[#E5D3B3]/90',
			cardBg: 'bg-[#2C241B]/90', // Dark card
			cardShadow: 'shadow-xl border border-[#8B7355]',
			cardShape: 'rounded-sm border-2 border-[#8B7355]' // Boxy with border
		},
		gallery: {
			sectionTitleColor: 'text-[#5C4033]',
			imageShape: 'rounded-sm border-4 border-white shadow-md' // Polaroid style
		},
		rsvp: {
			sectionTitleColor: 'text-[#5C4033]',
			cardBg: 'bg-white border border-[#E5D3B3]',
			buttonColor: 'bg-[#8B7355] hover:bg-[#A68A64] text-white',
			inputBorder: 'border-[#E5D3B3] focus:ring-[#8B7355]',
			cardShape: 'rounded-none',
			inputShape: 'rounded-none',
			buttonShape: 'rounded-none'
		},
		gift: {
			sectionTitleColor: 'text-[#5C4033]',
			cardBg: 'bg-[#FDFBF7] border border-[#E5D3B3]',
			textColor: 'text-[#4A4A4A]',
			buttonColor: 'bg-[#2C241B] text-[#E5D3B3] hover:bg-[#1A1510]',
			cardShape: 'rounded-sm',
			buttonShape: 'rounded-sm'
		},
		footer: {
			bgColor: 'bg-[#2C241B]',
			textColor: 'text-[#E5D3B3]'
		}
	};
</script>

{#if !showContent}
	<Cover
		coupleNames="Dewa Dhar & Gek Cantik"
		title="PAWIWAHAN"
		subTitle="Rabu, 22 Februari 2023"
		onOpen={openCover}
		theme={theme.cover}
	/>
{:else}
	<MusicControl />

	<main class="min-h-screen w-full overflow-hidden bg-[#FDFBF7] font-serif tracking-wide">
		<div transition:fade>
			<Hero coupleNames="Dewa & Gek" date="22 . 02 . 2023" imageUrl={heroImage} theme={theme.hero}>
				<!-- Countdown inside Hero for Bali Theme -->
				<Countdown {targetDate} theme={theme.countdown} />
			</Hero>

			<OpeningQuote />

			<section class="relative py-20">
				<!-- Background decoration -->
				<div
					class="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50"
				></div>

				<div class="relative z-10">
					<!-- Top Corner Ornament -->
					<div class="absolute -top-10 -left-10 h-40 w-40 opacity-40">
						<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0C50 0 50 50 100 50V0H0Z" fill="#8B7355" />
							<path d="M10 10C50 10 50 50 90 50V10H10Z" stroke="#E5D3B3" stroke-width="2" />
						</svg>
					</div>

					<!-- Bottom Corner Ornament -->
					<div class="absolute -right-10 -bottom-10 h-40 w-40 rotate-180 opacity-40">
						<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0C50 0 50 50 100 50V0H0Z" fill="#8B7355" />
							<path d="M10 10C50 10 50 50 90 50V10H10Z" stroke="#E5D3B3" stroke-width="2" />
						</svg>
					</div>
					<Couple {groom} {bride} theme={theme.couple} />

					<!-- Event Details with specific Bali styling -->
					<div
						class="relative bg-cover bg-fixed bg-center py-20"
						style="background-image: url('{eventBg}')"
					>
						<div class="absolute inset-0 bg-black/60"></div>
						<div class="relative z-10">
							<EventDetails {events} theme={theme.details} />
						</div>
					</div>

					<Gallery images={galleryImages} theme={theme.gallery} />

					<RSVP theme={theme.rsvp} />

					<Gift {bankAccounts} theme={theme.gift} />
				</div>
			</section>

			<Footer message="Om Shanti Shanti Shanti Om" theme={theme.footer} />
		</div>
	</main>
{/if}
