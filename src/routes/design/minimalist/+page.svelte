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

	const targetDate = '2026-12-12T16:00:00';

	const groom = {
		name: 'James',
		fullName: 'James Alexander',
		photo:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop',
		parents: ['Mr. Robert Alexander', 'Mrs. Mary Alexander'],
		address: 'Jalan Bypass Ngurah Rai No. 90, Kesiman Kertalangu, Kecamatan Denpasar Timur, Kota Denpasar, Bali'
	};

	const bride = {
		name: 'Kara',
		fullName: 'Kara Danvers',
		photo:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit-crop',
		parents: ['Mr. Jeremiah Danvers', 'Mrs. Eliza Danvers'],
		address: 'Jalan Bypass Ngurah Rai No. 90, Kesiman Kertalangu, Kecamatan Denpasar Timur, Kota Denpasar, Bali'
	};

	const events = [
		{
			name: 'Resepsi Pernikahan',
			date: 'Sabtu, 12 Desember 2026',
			time: '14.00 - Selesai',
			locationName: 'Banjar Adat Sengguan',
			address: 'Singapadu, Kec. Sukawati, Kabupaten Gianyar, Bali',
			mapUrl: 'https://maps.google.com/?q=Banjar+Adat+Sengguan',
			calendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Resepsi+Pernikahan+Aria+&+Julian&dates=20260110T140000Z/20260110T180000Z'
		},
	];

	const galleryImages = [
		'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
		'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop',
		'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1000&auto=format&fit=crop',
		'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1000&auto=format&fit=crop',
		'https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1000&auto=format&fit=crop',
		'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1000&auto=format&fit=crop'
	];

	const bankAccounts = [
		{
			bankName: 'BCA',
			accountNumber: '987654321',
			accountHolder: 'James Alexander'
		}
	];

	const theme = {
		cover: {
			bgColor: 'bg-[#1a1a1a]', // Dark overlay seperti di gambar
			textColor: 'text-[#d4af37]', // Gold accent
			buttonColor: 'bg-[#d4af37] text-white hover:bg-[#b8962e]',
			accentColor: 'border-[#d4af37]'
		},
		hero: {
			titleFont: 'font-serif', // Gunakan font serif yang elegan
			titleColor: 'text-[#333333]',
			dateColor: 'text-[#b8962e]'
		},
		countdown: {
			bgColor: 'bg-white/50',
			numberColor: 'text-[#b8962e]',
			labelColor: 'text-gray-500',
			borderColor: 'border-[#f3eee7]'
		},
		couple: {
			sectionTitleColor: 'text-[#333333]',
			nameColor: 'text-[#333333]',
			textColor: 'text-gray-600',
			dividerColor: 'text-[#d4af37]', // Ubah ini jadi Gold, bukan Zinc
			imageShape: 'rounded-2xl shadow-xl',
			frameShape: 'rounded-2xl border-4 border-white'
		},
		details: {
			sectionTitleColor: 'text-[#333333]',
			eventTitleColor: 'text-[#b8962e]',
			textColor: 'text-gray-600',
			cardBg: 'bg-white/80 backdrop-blur-sm',
			cardShadow: 'shadow-lg shadow-[#ece3d4]/50',
			cardShape: 'rounded-[2rem]' // Sangat rounded seperti di gambar
		},
		gallery: {
			sectionTitleColor: 'text-[#333333]',
			imageShape: 'rounded-xl shadow-md transition-transform duration-500 hover:scale-105',
			gridGap: 'gap-4',
			overlayColor: 'bg-[#d4af37]/10' // Overlay tipis warna emas saat hover
		},
		rsvp: {
			sectionTitleColor: 'text-[#333333]',
			cardBg: 'bg-white shadow-2xl shadow-[#ece3d4]/40',
			buttonColor: 'bg-[#d4af37] hover:bg-[#b8962e] text-white',
			inputBorder: 'border-[#f3eee7] focus:ring-[#d4af37]',
			cardShape: 'rounded-3xl',
			inputShape: 'rounded-xl',
			buttonShape: 'rounded-full' // Tombol lonjong (pill-shaped)
		},
		gift: {
			sectionTitleColor: 'text-[#333333]',
			cardBg: 'bg-white border-none shadow-md',
			textColor: 'text-gray-600',
			buttonColor: 'bg-[#fcf8f2] text-[#b8962e] hover:bg-[#f3eee7]',
			cardShape: 'rounded-2xl',
			buttonShape: 'rounded-lg'
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
        imageUrl="https://images.unsplash.com/photo-1494859632785-32abaf5241f4?q=80&w=2000&auto=format&fit=crop"
        onOpen={openCover}
        theme={theme.cover}
    />
{:else}
	<MusicControl />

	<main class="min-h-screen w-full overflow-hidden bg-[#fdfbf8] font-serif">
		<div transition:fade>
			<div class="fixed inset-0 opacity-20 pointer-events-none" 
				style="background-image: url('pattern-floral.png');"></div>

			<Hero
				coupleNames="Aria & Julian"
				date="12 . 12 . 2026"
				imageUrl="https://images.unsplash.com/photo-1494859632785-32abaf5241f4?q=80&w=2000&auto=format&fit=crop"
				theme={theme.hero}
			/>

			<div class="py-20 px-4">
				<h2 class="text-center text-3xl mb-12 text-gray-800 italic">Groom & Bride</h2>
				<Couple {groom} {bride} theme={theme.couple} />
			</div>

			<section class="py-16 bg-[#fcf8f2]">
				<div class="container mx-auto px-4">
					<h2 class="text-center mb-10 text-xl tracking-[0.2em] uppercase">Save The Date</h2>
					<Countdown {targetDate} theme={theme.countdown} />
				</div>
			</section>

			<div class="bg-white py-20">
				<EventDetails {events} theme={theme.details} />
			</div>

			<Gallery images={galleryImages} />

			<RSVP theme={theme.rsvp} />

			<Gift {bankAccounts} theme={theme.gift} />

			<Footer theme={theme.footer} />
		</div>
	</main>
{/if}
