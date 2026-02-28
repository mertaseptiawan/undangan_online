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
		name: 'Rangga',
		fullName: 'Rangga Pratama',
		photo: '/image/artistic/7.png',
		parents: ['Dewa Ketut Alit', 'Desak Putu Aryanti'],
		address: 'Br. Menak Tulikup - Gianyar'
	};

	const bride = {
		name: 'Sinta',
		fullName: 'Sinta Dewi',
		photo: '/image/artistic/6.png', // Foto Gek Cantik dari gambar 4
		parents: ['I Gusti Nyoman Ngurah', 'Ni Gusti Putu Luwes'],
		address: 'Br. Prajamukti, Bona, Blahbatuh - Gianyar'
	};

	const events = [
		{
			name: 'Pawiwahan',
			date: 'Rabu, 22 Februari 2023',
			time: '15.00 Wita s/d Selesai',
			locationName: 'Br. Menak',
			address: 'Ds. Tulikup - Gianyar',
			mapUrl: 'https://maps.google.com/?q=Tulikup+Gianyar',
			calendarUrl: '#'
		},
	];

	const modules = import.meta.glob('/static/image/artistic/gallery/*.{jpg,jpeg,png,webp}', { eager: true });

	const galleryImages = Object.keys(modules).map((path) => path.replace('/static', ''));

	const bankAccounts = [
		{
			bankName: 'BCA',
			accountNumber: '987654321',
			accountHolder: 'James Alexander'
		}
	];

	const theme = {
		cover: {
			bgColor: 'bg-black/40', // Overlay gelap tipis agar foto tetap terlihat (Gambar 1)
			textColor: 'text-white',
			buttonColor: 'bg-transparent border border-white text-white hover:bg-white/20 backdrop-blur-sm',
			accentColor: 'border-white'
		},
		hero: {
			titleFont: 'font-serif', 
			titleColor: 'text-white', // Judul di atas foto gelap (Gambar 1)
			dateColor: 'text-white/90'
		},
		countdown: {
			bgColor: 'bg-transparent', // Transparan seperti di Gambar 1
			numberColor: 'text-white',
			labelColor: 'text-white/80',
			borderColor: 'border-white/30'
		},
		couple: {
			sectionTitleColor: 'text-[#8B7355]', // Warna cokelat/gold gelap (Gambar 3 & 4)
			nameColor: 'text-[#8B7355]',
			textColor: 'text-gray-700',
			dividerColor: 'text-[#B8962E]',
			// Sesuai Gambar 3 & 4: Foto berbentuk Oval (Arch)
			imageShape: 'rounded-t-full rounded-b-full aspect-[2/3] object-cover shadow-2xl',
			frameShape: 'rounded-3xl bg-[#FCF8F2] border-none shadow-sm p-8' 
		},
		details: {
			sectionTitleColor: 'text-white',
			eventTitleColor: 'text-[#D4AF37]',
			textColor: 'text-white/90',
			cardBg: 'bg-black/30 backdrop-blur-md border border-white/20',
			cardShadow: 'shadow-2xl',
			cardShape: 'rounded-2xl' // Sesuai tombol "View Map" di Gambar 5
		},
		gallery: {
			sectionTitleColor: 'text-[#8B7355]',
			imageShape: 'rounded-xl shadow-lg',
			gridGap: 'gap-3',
			overlayColor: 'bg-[#B8962E]/20'
		},
		rsvp: {
			sectionTitleColor: 'text-[#8B7355]',
			cardBg: 'bg-[#FCF8F2]', // Warna cream seperti background Buku Tamu (Gambar 7)
			buttonColor: 'bg-[#8B7355] text-white hover:bg-[#6F5C44]',
			inputBorder: 'border-gray-300 focus:ring-[#8B7355]',
			cardShape: 'rounded-xl',
			inputShape: 'rounded-md',
			buttonShape: 'rounded-md'
		},
		gift: {
			sectionTitleColor: 'text-[#8B7355]',
			cardBg: 'bg-white shadow-sm border border-[#F3EEE7]',
			textColor: 'text-gray-600',
			buttonColor: 'bg-[#FCF8F2] text-[#8B7355]',
			cardShape: 'rounded-xl',
			buttonShape: 'rounded-md'
		},
		footer: {
			bgColor: 'bg-[#1A1A1A]',
			textColor: 'text-gray-500'
		}
	};
</script>

{#if !showContent}
	<Cover
        coupleNames="Rangga & Sinta"
        imageUrl="/image/artistic/2.png"
        onOpen={openCover}
        theme={theme.cover}
    />
{:else}
	<MusicControl />

	<main class="min-h-screen w-full overflow-hidden bg-[#FDFBF8] font-serif">
		<div transition:fade>
			<div class="fixed inset-0 opacity-[0.05] pointer-events-none" 
				style="background-image: url('/pattern-floral-bali.png'); background-size: 400px;"></div>

			<Hero
				coupleNames="Rangga & Sinta"
				date="22 . 02 . 2023"
				imageUrl="/image/artistic/2.png" 
				theme={theme.hero}
			/>

			<section class="py-20 px-6 text-center max-w-2xl bg-slate-300 mx-auto">
				<img src="/assets/ornamen/10.png" alt="decor" class="w-30 mx-auto mb-8 opacity-60" />
				<p class="italic text-[#8B7355] mb-4 leading-relaxed">
					"Ihaiva stam ma vi yaustam, visvam ayur vyasnutam, kridantau putrair naptrbhih, modamanau sve grhe."
				</p>
				<h4 class="font-bold mb-6">(RG VEDA X.85.42)</h4>
				<p class="text-sm text-gray-600 leading-loose">
					Wahai pasangan suami-istri, semoga kalian tetap bersatu dan tidak pernah terpisahkan. 
					Semoga kalian mencapai hidup penuh kebahagiaan...
				</p>
			</section>

				<div class="py-10 px-4 bg-white/50">
					<Couple {groom} {bride} theme={theme.couple} />
				</div>

				<section class="py-16 relative overflow-hidden">
				<div class="absolute inset-0 z-0">
					<img src="/image/artistic/3.png" alt="bg" class="w-full h-full object-cover" />
					<div class="absolute inset-0 bg-black/60"></div>
				</div>
				
				<div class="container mx-auto px-4 relative z-10 text-white">
					<h2 class="text-center mb-10 text-xl tracking-[0.3em] uppercase font-light">
						Save The Date
					</h2>
					<Countdown {targetDate} theme={theme.countdown} />
				</div>
			</section>

			<div class="py-24 relative bg-slate-300">
				<EventDetails {events} theme={theme.details} />
			</div>

			<section class="py-20 bg-[#FDFBF8]">
				<div class="text-center mb-12">
					<img src="/assets/ornamen/7.png" alt="decor" class="w-30 mx-auto" />
				</div>
				<div class="px-4">
					<Gallery images={galleryImages} theme={theme.gallery} />
				</div>
			</section>

			<section class="py-20 bg-[#FCF8F2]">
				<div class="text-center mb-10">
					<img src="/assets/ornamen/2.png" alt="decor" class="w-30 mx-auto mb-4" />
					<h2 class="font-serif text-4xl text-[#8B7355]">Buku Tamu</h2>
				</div>
				<div class="max-w-xl mx-auto px-4">
					<RSVP theme={theme.rsvp} />
				</div>
			</section>

			<div class="bg-white py-20">
				<Gift {bankAccounts} theme={theme.gift} />
			</div>

			<Footer theme={theme.footer} />
		</div>
	</main>
{/if}
