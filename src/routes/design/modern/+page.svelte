<script lang="ts">
	import { fade } from 'svelte/transition';
	import Cover from '$lib/component/invitation/Cover.svelte';
	import Hero from '$lib/component/invitation/Hero.svelte';
	import Countdown from '$lib/component/invitation/Countdown.svelte';
	import Couple from '$lib/component/invitation/Couple.svelte';
	import EventDetails from '$lib/component/invitation/EventDetails.svelte';
	import Gallery from '$lib/component/invitation/Gallery.svelte';
	import RSVP from '$lib/component/invitation/RSVP.svelte';
	import Gift from '$lib/component/invitation/Gift.svelte';
	import Footer from '$lib/component/invitation/Footer.svelte';
	import { onMount } from 'svelte';
    import { isPlaying, audioStore } from '$lib/musicStore';
	import MusicControl from '$lib/component/MusicControl.svelte';

    let showContent = $state(false);
    let audioElem: HTMLAudioElement | undefined = $state();

    const myMusic = "/music/i_choose_you.mp3";

    onMount(() => {
        if (audioElem) {
            // Daftarkan audioElem ke store agar MusicControl bisa akses
            audioStore.set(audioElem);
            audioElem.volume = 0.5;
        }
    });

    // DI DALAM +PAGE.SVELTE
	async function openCover() {
        const audio = document.getElementById('weddingAudio') as HTMLAudioElement;
        
        if (audio) {
            try {
                // 1. Set Volume dan pastikan audio siap
                audio.volume = 0.5;
                
                // 2. Perintah PLAY harus yang pertama kali dijalankan
                await audio.play();
                
                // 3. Jika berhasil play, baru update state global
                $isPlaying = true;
                audioStore.set(audio);
                
                // 4. Terakhir, buka konten (transisi cover)
                showContent = true;
            } catch (err) {
                console.error("Autoplay gagal, membuka cover tanpa musik:", err);
                // Jika gagal (misal kebijakan browser), tetap buka cover agar tamu tidak stuck
                showContent = true; 
            }
        } else {
            showContent = true;
        }
    }

	const targetDate = '2026-12-12T16:00:00';

	const groom = {
		name: 'Steven',
		fullName: 'Steven Johnson',
		photo:'/image/modern/18.png',
		parents: ['Mr. Robert Johnson', 'Mrs. Mary Johnson'],
		address: 'Casterton, Victoria 3311, Australia'
	};

	const bride = {
		name: 'Susan',
		fullName: 'Susan Estelle',
		photo:'/image/modern/19.png',
		parents: ['Mr. Jeremiah Estelle', 'Mrs. Eliza Estelle'],
		address: 'Queensland 4310, Australia'
	};

	const events = [
		{
			name: 'Resepsi Pernikahan',
			date: 'Sabtu, 12 Desember 2026',
			time: '14.00 - Selesai',
			locationName: 'Karma Kandara, Unggasan',
			address: 'Jl. Pantai Karma Kandara, Unggasan, Kec. Kuta Sel., Kabupaten Badung, Bali 80361',
			mapUrl: 'https://maps.app.goo.gl/dU9wzM8gJFU7wW8o9',
			calendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Resepsi+Pernikahan+Aria+&+Julian&dates=20260110T140000Z/20260110T180000Z'
		},
	];

	const modules = import.meta.glob('/static/image/modern/gallery/*.{jpg,jpeg,png,webp}', { eager: true });

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

<audio 
    id="weddingAudio" 
    bind:this={audioElem}
    src={myMusic} 
    loop 
    preload="auto"
></audio>

{#if !showContent}
    <Cover 
        onOpen={openCover} 
        coupleNames="Steven & Susan" 
        imageUrl="/image/modern/5.png" 
		theme={theme.cover}
    />
{:else}
    <MusicControl />

	<main class="min-h-screen w-full overflow-hidden bg-[#fdfbf8] font-serif">
		<div transition:fade>
			<div class="fixed inset-0 opacity-20 pointer-events-none" 
				style="background-image: url('pattern-floral.png');"></div>

			<Hero
				coupleNames="Steven & Susan"
				date="12 . 12 . 2026"
				imageUrl="/image/modern/2.png"
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

			<RSVP 
				designId="modern" 
				theme={theme.rsvp} 
			/>

			<Gift {bankAccounts} theme={theme.gift} />

			<Footer theme={theme.footer} />
		</div>
	</main>
{/if}
