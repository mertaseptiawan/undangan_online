<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';
	import { reveal } from '$lib/actions/reveal';
	import { isPlaying, audioStore } from '$lib/musicStore';
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

	let showContent = $state(false);
	let audioElem: HTMLAudioElement | undefined = $state();
	const myMusic = '/music/Humming-turnover.mp3';

	// 3 Foto Slideshow Portrait (Tanpa tombol, teks, titik)
	const slideshowImages = [
		'/image/adhi-irma/Background.jpg',
		'/image/adhi-irma/Background 2.jpg',
		'/image/adhi-irma/Background 3.jpg'
	];
	let activeSlide = $state(0);
	let slideInterval: any;

	function nextSlide() {
		activeSlide = (activeSlide + 1) % slideshowImages.length;
	}

	onMount(() => {
		if (audioElem) {
			audioStore.set(audioElem);
			audioElem.volume = 0.5;
		}

		// Otomatis berganti foto setiap 3.5 detik
		slideInterval = setInterval(() => {
			nextSlide();
		}, 3500);
	});

	onDestroy(() => {
		if (slideInterval) clearInterval(slideInterval);
	});

	async function openCover() {
		const audio = document.getElementById('weddingAudio') as HTMLAudioElement;
		if (audio) {
			try {
				audio.volume = 0.5;
				await audio.play();
				$isPlaying = true;
				audioStore.set(audio);
			} catch (err) {
				console.warn('Autoplay audio fallback:', err);
			}
		}
		showContent = true;
	}

	function handleAudioError() {
		if (audioElem && !audioElem.src.includes('Humming-turnover.mp3')) {
			console.log('Switching to atmospheric fallback audio...');
			audioElem.src = '/music/Humming-turnover.mp3';
			audioElem.load();
		}
	}

	const targetDate = '2026-10-17T10:00:00';

	// Data Mempelai Pria (Groom)
	const groom = {
		name: 'Adhi',
		fullName: 'I Nyoman Adhi Dharma Susila',
		photo: '/image/adhi-irma/Mempelai Pria.jpg',
		childOrder: 'Putra Katiga dari',
		parents: ['I Wayan Suardila', 'Ni Wayan Suparini'],
		address: 'Br. Pujung kaja, Sebatu, Tegallalang, Gianyar'
	};

	// Data Mempelai Wanita (Bride)
	const bride = {
		name: 'Irma',
		fullName: 'Komang Irma Trisnadewi',
		photo: '/image/adhi-irma/Mempelai Wanita.jpg',
		childOrder: 'Putri Ketiga dari',
		parents: ['Alm. I Wayan Sanggra', 'Alm. Ni Ketut Sari, S.pd'],
		address: 'Br. Bayad, Kedisan, Tegallalang, Gianyar'
	};

	// Rangkaian Acara (Waktu & Tempat)
	const events = [
		{
			name: 'Pawiwahan & Resepsi Pernikahan',
			date: 'Sabtu, 17 Oktober 2026',
			time: '10:00 - 00.00 Wita',
			locationName: 'Kediaman Mempelai Pria',
			address: 'Br. Pujung kaja, Sebatu, Tegallalang, Gianyar',
			mapUrl: 'https://maps.app.goo.gl/hTaiKBKbgxrykYbL9?g_st=ac',
			calendarUrl:
				'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pawiwahan+Adhi+%26+Irma&dates=20261017T020000Z/20261017T160000Z&details=Resepsi+Pernikahan+I+Nyoman+Adhi+Dharma+Susila+%26+Komang+Irma+Trisnadewi&location=Br.+Pujung+kaja,+Sebatu,+Tegallalang,+Gianyar'
		}
	];

	// Galeri Foto Prewedding Casual
	const galleryImages = [
		'/image/adhi-irma/KRW05910.jpg',
		'/image/adhi-irma/KRW06055 (1).jpg',
		'/image/adhi-irma/KRW06076 (1).jpg',
		'/image/adhi-irma/KRW06241.jpg',
		'/image/adhi-irma/KRW06280 (1).jpg',
		'/image/adhi-irma/KRW06462 (1).jpg',
		'/image/adhi-irma/KRW06557 (1).jpg',
		'/image/adhi-irma/KRW06618 (1).jpg',
		'/image/adhi-irma/KRW06739 (1).jpg'
	];

	// Kado Digital / Love Gift
	const bankAccounts = [
		{
			bankName: 'Bank BRI',
			accountNumber: '728301018096539',
			accountHolder: 'Komang Irma Trisnadewi'
		}
	];

	// Desain Tema Cool Slate Charcoal & Gold — terinspirasi dari foto cover Adhi & Irma
	const theme = {
		cover: {
			textColor: 'text-white',
			buttonColor:
				'bg-[#12141A]/80 hover:bg-[#C9A84C]/25 backdrop-blur-md text-[#E2D9C8] border border-[#C9A84C]/70 shadow-[0_0_20px_rgba(201,168,76,0.3)]',
			nameFont:
				'font-jellyka text-6xl md:text-9xl text-[#C9A84C] tracking-wider drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]',
			titleFont: 'text-[#E2D9C8] tracking-[0.4em] font-sans font-light'
		},
		hero: {
			titleFont:
				'font-jellyka text-6xl md:text-9xl text-[#C9A84C] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]',
			titleColor: 'text-[#C9A84C]',
			dateColor: 'text-white font-times'
		},
		countdown: {
			bgColor: 'bg-[#2A2D35]/90 backdrop-blur-md border border-[#C9A84C]/40 shadow-xl',
			numberColor: 'text-[#C9A84C]',
			labelColor: 'text-white/80 font-times',
			borderColor: 'border-[#C9A84C]/30'
		},
		couple: {
			sectionTitleColor: 'text-[#C9A84C]',
			nameColor: 'text-[#C9A84C]',
			textColor: 'text-slate-200 font-times',
			dividerColor: 'text-[#C9A84C]',
			frameColor: 'border-[#C9A84C]/50 shadow-[0_0_20px_rgba(201,168,76,0.15)]',
			imageShape: 'rounded-2xl aspect-[3/4] object-cover shadow-2xl',
			frameShape: 'rounded-3xl bg-[#2A2D35] border-2 border-[#C9A84C]/35 p-4 shadow-xl'
		},
		details: {
			sectionTitleColor: 'text-[#C9A84C]',
			eventTitleColor: 'text-[#C9A84C]',
			textColor: 'text-slate-100 font-times',
			cardBg: 'bg-[#272A32]/95 backdrop-blur-md border border-[#C9A84C]/40',
			cardShadow: 'shadow-[0_15px_35px_rgba(0,0,0,0.45)]',
			cardShape: 'rounded-3xl',
			accentColor:
				'bg-[#C9A84C] text-[#12141A] hover:bg-[#b8973e] transition-all font-semibold font-sans'
		},
		gallery: {
			sectionTitleColor: 'text-[#C9A84C]',
			imageShape:
				'rounded-2xl shadow-xl border border-[#C9A84C]/30 hover:border-[#C9A84C] transition-all'
		},
		rsvp: {
			sectionTitleColor: 'text-[#C9A84C]',
			cardBg: 'bg-[#2A2D35] border border-[#C9A84C]/40 shadow-xl',
			textColor: 'text-slate-200 font-times',
			buttonColor:
				'bg-[#C9A84C] hover:bg-[#b8973e] text-[#12141A] font-semibold font-sans shadow-md',
			inputBorder:
				'border-slate-600 bg-[#32363F] text-white focus:border-[#C9A84C] focus:ring-[#C9A84C]',
			cardShape: 'rounded-3xl',
			inputShape: 'rounded-xl',
			buttonShape: 'rounded-xl'
		},
		gift: {
			sectionTitleColor: 'text-[#C9A84C]',
			cardBg: 'bg-[#2A2D35] border border-[#C9A84C]/40 shadow-xl',
			textColor: 'text-slate-200 font-times',
			buttonColor:
				'bg-[#C9A84C] text-[#12141A] hover:bg-[#b8973e] font-semibold font-sans shadow-md',
			cardShape: 'rounded-3xl',
			buttonShape: 'rounded-full'
		},
		footer: {
			bgColor: 'bg-[#0F1115]',
			textColor: 'text-[#C9A84C]'
		}
	};
</script>

<svelte:head>
	<title>Pawiwahan Adhi & Irma | The Wedding of Adhi & Irma</title>
	<meta
		name="description"
		content="Undangan Pernikahan I Nyoman Adhi Dharma Susila & Komang Irma Trisnadewi - Sabtu, 17 Oktober 2026 di Gianyar, Bali."
	/>

	<!-- Open Graph / Facebook / WhatsApp -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="The Wedding of Adhi & Irma" />
	<meta
		property="og:description"
		content="Kami mengundang Bapak/Ibu/Saudara/i untuk hadir pada hari bahagia pernikahan kami. Sabtu, 17 Oktober 2026."
	/>
	<meta property="og:image" content="https://invitenow.id/image/adhi-irma/Cover-1.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:url" content="https://invitenow.id/adhi-irma" />
	<meta property="og:locale" content="id_ID" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="The Wedding of Adhi & Irma" />
	<meta
		name="twitter:description"
		content="Kami mengundang Bapak/Ibu/Saudara/i untuk hadir pada hari bahagia pernikahan kami. Sabtu, 17 Oktober 2026."
	/>
	<meta name="twitter:image" content="https://invitenow.id/image/adhi-irma/Cover-1.jpg" />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<audio
	id="weddingAudio"
	bind:this={audioElem}
	src={myMusic}
	loop
	preload="auto"
	onerror={handleAudioError}
></audio>

{#if !showContent}
	<!-- Cover Page dengan Font Jellyka Saint-Andrew Queen & Nuansa Gelap Mewah -->
	<Cover
		onOpen={openCover}
		coupleNames="Adhi & Irma"
		title="THE WEDDING OF"
		subTitle="Om Swastyastu, kami mengundang Anda untuk merayakan hari bahagia pernikahan kami"
		defaultRecipient="Tamu Undangan"
		imageUrl="/image/adhi-irma/Cover-1.jpg"
		theme={theme.cover}
	/>
{:else}
	<!-- Floating Music Toggle & Song Badge -->
	<div class="fixed right-6 bottom-6 z-50 flex items-center gap-3">
		{#if $isPlaying}
			<div
				transition:fade
				class="hidden items-center gap-2 rounded-full border border-[#C9A84C]/40 bg-[#12141A]/90 px-4 py-2 text-xs font-medium text-[#C9A84C] shadow-lg backdrop-blur-md sm:flex"
			>
				<span class="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
				<span class="font-sans tracking-wide">Turnover — Humming ♫</span>
			</div>
		{/if}
		<MusicControl />
	</div>

	<!-- Main Content dengan Nuansa Warm Dark Charcoal (Tidak Terlalu Gelap Pekat) -->
	<main class="font-times min-h-screen w-full overflow-hidden text-white selection:text-black">
		<div class="fixed inset-0 -z-10 overflow-hidden">
			{#each slideshowImages as imgUrl, idx}
				{#if activeSlide === idx}
					<div
						transition:fade={{ duration: 1500 }}
						class="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat transition-transform duration-[4000ms] ease-out"
						style="background-image: url('{imgUrl}');"
					></div>
				{/if}
			{/each}

			<!-- Dark Overlay agar teks & konten undangan tetap terbaca dengan jelas -->
			<div class="absolute inset-0 bg-black/75 backdrop-blur-[2px]"></div>
		</div>

		<div transition:fade>
			<!-- 1. Hero Section (Save The Date) - Tanpa Countdown di halaman pertama -->
			<Hero
				coupleNames="Adhi & Irma"
				date="17 . 10 . 2026"
				imageUrl="/image/adhi-irma/Cover 2.jpg"
				theme={theme.hero}
			/>

			<!-- 7. KATA KUTIPAN (Ditaruh SETELAH waktu dan tempat acara & di bawah slideshow) -->
			<section class="px-6 py-12">
				<div
					use:reveal={{ direction: 'bottom', duration: 900 }}
					class="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-[#C9A84C]/40 p-8 text-center text-white shadow-xl md:p-14"
				>
					<!-- Subtle ambient warm glow -->
					<div
						class="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#C9A84C]/15 blur-3xl"
					></div>
					<div
						class="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#C9A84C]/10 blur-3xl"
					></div>

					<div class="relative z-10">
						<div class="mx-auto mb-6 flex items-center justify-center gap-3 text-[#E2D9C8]/70">
							<span class="h-[1px] w-14 bg-gradient-to-r from-transparent to-[#C9A84C]"></span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 text-[#C9A84C]"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
								/>
							</svg>
							<span class="h-[1px] w-14 bg-gradient-to-l from-transparent to-[#C9A84C]"></span>
						</div>

						<blockquote
							class="font-times text-xl leading-relaxed text-[#EEE8DA] italic drop-shadow-md md:text-3xl"
						>
							“We can live like Jack and Sally if we want,<br />
							where you can always find me.<br />
							And we'll have Halloween on Christmas,<br />
							and in the night we'll wish this never ends.”
						</blockquote>

						<cite
							class="mt-8 block font-sans text-xs font-semibold tracking-[0.35em] text-[#C9A84C] uppercase"
						>
							— Blink 182
						</cite>
					</div>
				</div>
			</section>

			<!-- 3. Mempelai Bahagia (The Couple) - Bingkai Elegan Gold & Dark Warm (No Pink) -->
			<div class="px-4 py-12">
				<Couple {groom} {bride} theme={theme.couple} title="Mempelai Bahagia" />
			</div>

			<!-- 4. COUNTDOWN  -->
			<section class="px-4 py-16 text-center">
				<div use:reveal={{ direction: 'bottom', duration: 900 }} class="mx-auto max-w-2xl">
					<div class="mb-3 flex items-center justify-center gap-3">
						<span class="h-[1px] w-14 bg-gradient-to-r from-transparent to-[#C9A84C]"></span>
						<span class="text-sm text-[#C9A84C]">✧</span>
						<span class="h-[1px] w-14 bg-gradient-to-l from-transparent to-[#C9A84C]"></span>
					</div>
					<p class="font-sans text-xs font-semibold tracking-[0.35em] text-[#C9A84C] uppercase">
						Save The Date
					</p>
					<h2 class="font-times mt-2 mb-6 text-3xl text-[#C9A84C] md:text-5xl">Menghitung Hari</h2>
					<Countdown {targetDate} theme={theme.countdown} />
				</div>
			</section>

			<!-- 5. Rangkaian Acara (Waktu & Tempat Acara) -->
			<div class="relative px-4 pb-20">
				<div class="mb-8 text-center">
					<div class="mb-3 flex items-center justify-center gap-3">
						<span class="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C9A84C]"></span>
						<span class="text-sm text-[#C9A84C]">✧</span>
						<span class="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C9A84C]"></span>
					</div>
					<p class="font-sans text-xs font-semibold tracking-[0.3em] text-[#C9A84C] uppercase">
						Waktu & Tempat
					</p>
					<h2 class="font-times mt-2 text-4xl text-[#C9A84C] md:text-5xl">Rangkaian Acara</h2>
				</div>
				<EventDetails {events} theme={theme.details} />
			</div>

			<!-- 6. SLIDESHOW 3 FOTO (Portrait, Tanpa Tombol, Teks, & Titik sesuai request no. 2) -->
			<section class="px-4 py-12">
				<div class="mb-6 text-center">
					<div class="mb-2 flex items-center justify-center gap-3">
						<span class="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C9A84C]"></span>
						<span class="text-sm text-[#C9A84C]">✧</span>
						<span class="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C9A84C]"></span>
					</div>
					<p class="font-sans text-xs font-semibold tracking-[0.3em] text-[#C9A84C] uppercase">
						Momen Kebersamaan
					</p>
				</div>

				<div
					use:reveal={{ direction: 'bottom', duration: 1000 }}
					class="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-3xl border-2 border-[#C9A84C]/50 bg-[#12141A] shadow-[0_20px_45px_rgba(0,0,0,0.5)] sm:max-w-sm"
				>
					{#each slideshowImages as imgUrl, idx}
						{#if activeSlide === idx}
							<div transition:fade={{ duration: 1000 }} class="absolute inset-0">
								<img src={imgUrl} alt="Adhi & Irma Prewedding" class="h-full w-full object-cover" />
							</div>
						{/if}
					{/each}
				</div>
			</section>

			<!-- 8. KISAH / CERITA CINTA (Alur Kisah: BAB I s/d BAB IV sesuai request no. 4) -->
			<section class="mx-auto max-w-4xl px-4 py-20">
				<div class="mb-14 text-center">
					<div class="mb-3 flex items-center justify-center gap-3">
						<span class="h-[1px] w-14 bg-gradient-to-r from-transparent to-[#C9A84C]"></span>
						<span class="text-sm text-[#C9A84C]">✧</span>
						<span class="h-[1px] w-14 bg-gradient-to-l from-transparent to-[#C9A84C]"></span>
					</div>
					<p class="font-sans text-xs font-semibold tracking-[0.35em] text-[#C9A84C] uppercase">
						Kisah Kasih Kami
					</p>
					<h2 class="font-times mt-2 text-4xl text-[#C9A84C] md:text-5xl">Alur Kisah</h2>
				</div>

				<div class="space-y-8 md:space-y-10">
					<!-- BAB I -->
					<div
						use:reveal={{ direction: 'bottom', duration: 800 }}
						class="relative rounded-3xl border border-[#C9A84C]/35 p-8 shadow-xl transition-transform hover:-translate-y-1 md:p-10"
					>
						<div class="mb-5 flex items-center gap-3">
							<span
								class="rounded-full border border-[#C9A84C]/50 bg-[#C9A84C]/20 px-4 py-1 font-sans text-xs font-semibold tracking-widest text-[#C9A84C] uppercase"
							>
								BAB I
							</span>
							<span class="font-sans text-xs tracking-widest text-[#E2D9C8] uppercase"
								>2017 — Pertemuan Pertama</span
							>
						</div>
						<p class="font-script text-lg leading-relaxed text-neutral-200 md:text-xl">
							Mungkin semua ini bukan sebuah kebetulan, pertemuan kami telah terjadi di tahun 2017,
							saat kami duduk di bangku SMA. Selayaknya remaja pertemuan itu bukan hal yang istimewa
							dan kami anggap sebagai pertemuan remaja sebagai teman sekolah, Dan bahkan selayaknya
							kucing dan tikus yang tidak pernah akur dan selalu bertentangan, tidak ada terlintas
							sedikit pun dalam khayal kami bahwa pertemuan itu akan menjadi suatu hal yang besar
							bagi hidup kami kelak.
						</p>
					</div>

					<!-- BAB II -->
					<div
						use:reveal={{ direction: 'bottom', duration: 800, delay: 100 }}
						class="relative rounded-3xl border border-[#C9A84C]/35 p-8 shadow-xl transition-transform hover:-translate-y-1 md:p-10"
					>
						<div class="mb-5 flex items-center gap-3">
							<span
								class="rounded-full border border-[#C9A84C]/50 bg-[#C9A84C]/20 px-4 py-1 font-sans text-xs font-semibold tracking-widest text-[#C9A84C] uppercase"
							>
								BAB II
							</span>
							<span class="font-sans text-xs tracking-widest text-[#E2D9C8] uppercase"
								>2022 — Titik Temu</span
							>
						</div>
						<p class="font-script text-lg leading-relaxed text-neutral-200 md:text-xl">
							Dalam 2022, masa SMA kami telah berlalu, dan sudah berselang tahun tahun kemudian di
							tengah hiruk pikuk keramaian yang kita rindukan di 2020. Kami dan sekumpulan teman
							berkumpul kembali, Ditengah obrolan seru tentang hal tidak penting yang sudah kami
							lalui, ada satu percakapan yang seolah membuat cara pandang kami berdua menjadi sama.
						</p>
					</div>

					<!-- BAB III -->
					<div
						use:reveal={{ direction: 'bottom', duration: 800, delay: 200 }}
						class="relative rounded-3xl border border-[#C9A84C]/35 p-8 shadow-xl transition-transform hover:-translate-y-1 md:p-10"
					>
						<div class="mb-5 flex items-center gap-3">
							<span
								class="rounded-full border border-[#C9A84C]/50 bg-[#C9A84C]/20 px-4 py-1 font-sans text-xs font-semibold tracking-widest text-[#C9A84C] uppercase"
							>
								BAB III
							</span>
							<span class="font-sans text-xs tracking-widest text-[#E2D9C8] uppercase"
								>Refleksi Rasa</span
							>
						</div>
						<p class="font-script text-lg leading-relaxed text-neutral-200 md:text-xl">
							Setelah hari itu berlalu, entah bagaimana komunikasi kami menjadi berlanjut, dan
							banyak hal yang kami lalui bersama. Entah kenapa dari semua ketidak sempurnaan yang
							kami miliki, kami merasa memiliki banyak kesamaan seperti bercermin di air yang
							jernih.
						</p>
					</div>

					<!-- BAB IV -->
					<div
						use:reveal={{ direction: 'bottom', duration: 800, delay: 300 }}
						class="relative rounded-3xl border border-[#C9A84C]/35 p-8 shadow-xl transition-transform hover:-translate-y-1 md:p-10"
					>
						<div class="mb-5 flex items-center gap-3">
							<span
								class="rounded-full border border-[#C9A84C]/50 bg-[#C9A84C]/20 px-4 py-1 font-sans text-xs font-semibold tracking-widest text-[#C9A84C] uppercase"
							>
								BAB IV
							</span>
							<span class="font-sans text-xs tracking-widest text-[#E2D9C8] uppercase"
								>2023 — Menuju Hari Bahagia</span
							>
						</div>
						<p class="font-script text-lg leading-relaxed text-neutral-200 md:text-xl">
							Di tahun 2023, setelah mengingat banyak hal indah yang berlalu, setelah usai dari
							penampilan di sebuah acara 14 februari selepas hujan, kami pulang dengan sebuah
							keyakinan, kami adalah perjalanan, kami adalah ahli kegagalan, kami adalah gelap
							kerinduan, kami adalah terjaga dalam lelap dan kami adalah kebersamaan yang kami
							dambakan.
						</p>
						<div class="mt-6 border-t border-[#C9A84C]/30 pt-5 text-center">
							<p class="font-script text-xl font-semibold text-[#E2D9C8] md:text-2xl">
								"Hingga hari bahagia kami tiba. Dan kehidupan kami kelak menuju kerinduan."
							</p>
						</div>
					</div>
				</div>
			</section>

			<!-- 9. Galeri Foto Momen Bahagia (Prewedding Casual) -->
			<section class="border-y border-[#C9A84C]/30 py-20">
				<div class="mb-10 text-center">
					<div class="mb-3 flex items-center justify-center gap-3">
						<span class="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C9A84C]"></span>
						<span class="text-sm text-[#C9A84C]">✧</span>
						<span class="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C9A84C]"></span>
					</div>
					<p class="font-sans text-xs font-semibold tracking-[0.3em] text-[#C9A84C] uppercase">
						Galeri Foto
					</p>
					<h2 class="font-times mt-2 text-4xl text-[#C9A84C]">Momen Bahagia</h2>
				</div>
				<div class="px-4">
					<Gallery images={galleryImages} theme={theme.gallery} title="" />
				</div>
			</section>

			<!-- 10. Tanda Kasih / Wedding Gift -->
			<div class="bg-[#1A1C20] py-20">
				<div class="mb-6 text-center">
					<div class="mb-2 flex items-center justify-center gap-3">
						<span class="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C9A84C]"></span>
						<span class="text-sm text-[#C9A84C]">✧</span>
						<span class="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C9A84C]"></span>
					</div>
				</div>
				<Gift
					{bankAccounts}
					theme={theme.gift}
					title="Tanda Kasih"
					subTitle="Doa restu Anda merupakan karunia terindah bagi kami. Namun jika Anda berkehendak memberikan tanda kasih, dapat disampaikan melalui rekening berikut:"
				/>
			</div>

			<!-- 11. Buku Tamu & Ucapan Doa (RSVP) -->
			<section class="border-t border-[#C9A84C]/30 bg-[#1E2028] py-20">
				<div class="mb-10 text-center">
					<div class="mb-3 flex items-center justify-center gap-3">
						<span class="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C9A84C]"></span>
						<span class="text-sm text-[#C9A84C]">✧</span>
						<span class="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C9A84C]"></span>
					</div>
					<p class="font-sans text-xs font-semibold tracking-[0.3em] text-[#C9A84C] uppercase">
						Kirimkan Doa & Restu
					</p>
					<h2 class="font-times mt-2 text-4xl text-[#C9A84C]">Buku Tamu</h2>
				</div>
				<div class="mx-auto max-w-xl px-4">
					<RSVP designId="adhi-irma" theme={theme.rsvp} title="Ucapan & Konfirmasi Kehadiran" />
				</div>
			</section>

			<!-- 12. Balinese Om Shanti & Footer (Warm Dark Charcoal) -->
			<footer
				class="border-t border-[#C9A84C]/20 bg-[#0F1115] px-6 py-16 text-center text-neutral-300"
			>
				<div class="mx-auto max-w-2xl space-y-6">
					<h3 class="font-times text-2xl tracking-wide text-[#C9A84C]">
						Om Shanti Shanti Shanti Om
					</h3>
					<p class="font-times text-base leading-relaxed text-neutral-300">
						Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila
						Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kedua mempelai.
					</p>

					<div class="font-times space-y-1 pt-4 text-sm tracking-wider text-neutral-400">
						<p class="font-semibold text-[#C9A84C]">Keluarga Besar:</p>
						<p>I Wayan Suardila & Ni Wayan Suparini</p>
						<p>Alm. I Wayan Sanggra & Alm. Ni Ketut Sari, S.pd</p>
					</div>

					<div class="border-t border-stone-800 pt-10 font-sans text-xs text-neutral-500">
						<p>
							Desain Undangan Digital Eksklusif oleh <a
								href="/"
								class="text-[#C9A84C] hover:underline">InviteNow</a
							>
						</p>
					</div>
				</div>
			</footer>
		</div>
	</main>
{/if}

<style>
	:global(body) {
		overflow-x: hidden;
		background-color: #1a1c20;
	}

	:global(.font-jellyka) {
		font-family: 'Jellyka Saint-Andrew Queen', cursive, sans-serif !important;
	}

	:global(.font-times) {
		font-family: 'Times New Roman', Times, Baskerville, Georgia, serif !important;
	}

	:global(.font-script) {
		font-family: 'Dancing Script', cursive !important;
	}
</style>
