<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { isPlaying, audioStore } from '$lib/musicStore';
    
    // Import Komponen Struktur Terbaru
    import Cover from '$lib/component/invitation/Cover.svelte';
    import Hero from '$lib/component/invitation/Hero.svelte';
    import Countdown from '$lib/component/invitation/Countdown.svelte';
    import Couple from '$lib/component/invitation/Couple.svelte';
    import EventDetails from '$lib/component/invitation/EventDetails.svelte';
    import Gallery from '$lib/component/invitation/Gallery.svelte';
    import RSVP from '$lib/component/invitation/RSVP.svelte';
    import Gift from '$lib/component/invitation/Gift.svelte';
    import Footer from '$lib/component/invitation/Footer.svelte';
    import MusicControl from '$lib/component/MusicControl.svelte';

    // State Management (Svelte 5)
    let showContent = $state(false);
    let audioElem: HTMLAudioElement | undefined = $state();

    const myMusic = "/music/beautiful_in_white.mp3";
    const targetDate = "2026-01-10T14:00:00";

    // Data Mempelai
    const groom = {
        name: 'Kancil',
        fullName: 'I Gusti Ngurah Darma Adi Winata',
        photo: '/image/elegant/groom.jpeg',
        parents: ['I Gusti Nyoman Putra', 'Jero Citrawati'],
        address: 'Banjar Sengguan, Lingkungan Semarapura Kangin, Klungkung'
    };

    const bride = {
        name: 'Noning',
        fullName: 'Ni Putu Rini Oktaviyanti',
        photo: '/image/elegant/bridge.jpeg',
        parents: ['I Made Budiantara', 'Ni Putu Sari'],
        address: 'Banjar Dinas Pande, Nongan, Karangasem'
    };

    const events = [
        {
            name: 'Resepsi Pernikahan',
            date: 'Jumat, 02 Januari 2026',
            time: '14.00 Wita s/d Selesai',
            locationName: 'Banjar Adat Sengguan',
            address: 'Semarapura Kangin, Klungkung',
            mapUrl: 'https://maps.app.goo.gl/KFvzLsCcUBm3iLKJA',
            calendarUrl: '#'
        },
    ];

    // Load Gallery Images menggunakan Vite Glob
    const modules = import.meta.glob('/static/image/elegant/gallery/*.{jpg,jpeg,png,webp}', { eager: true });
    const galleryImages = Object.keys(modules).map((path) => path.replace('/static', ''));

    const bankAccounts = [
        {
            bankName: 'BCA',
            accountNumber: '123456789',
            accountHolder: 'Gusti Ngurah Darma'
        }
    ];

    // Config Theme Elegant (Sesuai gaya lama tapi struktur baru)
    const theme = {
        cover: {
            bgColor: 'bg-black/60',
            textColor: 'text-white',
            buttonColor: 'bg-amber-700 text-white hover:bg-amber-800',
            accentColor: 'border-amber-500'
        },
        hero: {
            titleFont: 'font-serif-elegant',
            titleColor: 'text-white',
            dateColor: 'text-amber-200'
        },
        countdown: {
            bgColor: 'bg-white',
            numberColor: 'text-amber-700',
            labelColor: 'text-gray-500',
            borderColor: 'border-amber-100'
        },
        couple: {
            sectionTitleColor: 'text-amber-700',
            nameColor: 'text-gray-900',
            textColor: 'text-gray-500',
            dividerColor: 'text-amber-500',
            imageShape: 'rounded-full border-4 border-amber-200 shadow-xl w-64 h-80',
            frameShape: 'bg-white border-none'
        },
        details: {
            sectionTitleColor: 'text-white',
            eventTitleColor: 'text-amber-300',
            textColor: 'text-white/90',
            cardBg: 'bg-white/20 backdrop-blur-md border border-white/30',
            cardShadow: 'shadow-2xl',
            cardShape: 'rounded-[40px]'
        },
        rsvp: {
            sectionTitleColor: 'text-amber-700',
            cardBg: 'bg-white',
            buttonColor: 'bg-amber-700 text-white hover:bg-amber-800',
            inputBorder: 'border-gray-200 focus:ring-amber-500',
            cardShape: 'rounded-2xl',
            inputShape: 'rounded-lg',
            buttonShape: 'rounded-lg'
        },
		gift: {
            sectionTitleColor: 'text-amber-700',
            cardBg: 'bg-white shadow-sm border border-amber-50',
            textColor: 'text-gray-600',
            buttonColor: 'bg-amber-50 text-amber-700',
            cardShape: 'rounded-xl',
            buttonShape: 'rounded-md'
        },
    };

    onMount(() => {
        if (audioElem) {
            audioStore.set(audioElem);
            audioElem.volume = 0.5;
        }
    });

    async function openCover() {
        const audio = document.getElementById('weddingAudio') as HTMLAudioElement;
        if (audio) {
            try {
                await audio.play();
                $isPlaying = true;
                audioStore.set(audio);
            } catch (err) {
                console.error("Autoplay blocked", err);
            }
        }
        showContent = true;
    }
</script>

<audio id="weddingAudio" bind:this={audioElem} src={myMusic} loop preload="auto"></audio>

{#if !showContent}
    <Cover 
        onOpen={openCover} 
        coupleNames="Kancil & Noning" 
        imageUrl="/image/elegant/cover.jpeg" 
        theme={theme.cover}
    />
{:else}
    <MusicControl />

    <main class="min-h-screen w-full bg-[#FDFBF8]">
        <div transition:fade={{ duration: 1000 }}>
            
            <Hero
                coupleNames="Kancil & Noning"
                date="02 . 01 . 2026"
                imageUrl="/image/elegant/cover.jpeg"
                theme={theme.hero}
            />

            <section class="py-20 px-6 text-center max-w-2xl mx-auto">
                <img src="/assets/ornamen/10.png" alt="decor" class="w-24 mx-auto mb-8 opacity-60" />
                <p class="italic text-amber-800 mb-4 leading-relaxed">
                    "Menjalin cinta dalam ikatan suci pernikahan"
                </p>
                <p class="text-sm text-gray-600 leading-loose">
                    Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa, kami bermaksud mengundang Bapak/Ibu/Saudara/i pada acara pernikahan kami.
                </p>
            </section>

            <div class="py-10">
                <Couple {groom} {bride} theme={theme.couple} />
            </div>

            <section class="py-20 relative overflow-hidden">
                <div class="absolute inset-0 z-0">
                    <img src="/image/elegant/cover.jpeg" alt="bg" class="w-full h-full object-cover blur-sm opacity-30" />
                </div>
                <div class="container mx-auto px-4 relative z-10">
                    <h2 class="text-center mb-10 text-xl tracking-widest uppercase text-amber-800">Menghitung Hari</h2>
                    <Countdown {targetDate} theme={theme.countdown} />
                </div>
            </section>

            <section class="py-24 bg-amber-900 relative">
                <div class="absolute inset-0 opacity-20">
                    <img src="/image/elegant/image3.jpeg" alt="bg" class="w-full h-full object-cover" />
                </div>
                <div class="relative z-10">
                    <EventDetails {events} theme={theme.details} />
                </div>
            </section>

            <section class="py-20">
                <div class="px-4">
                    <Gallery images={galleryImages} />
                </div>
            </section>

            <section class="py-20 bg-gray-50">
                <div class="max-w-xl mx-auto px-4">
                    <RSVP 
                        designId="elegant" 
                        theme={theme.rsvp} 
                    />
                </div>
            </section>

            <Gift {bankAccounts} theme={theme.gift} />

            <Footer 
                theme={{ 
                    bgColor: 'bg-zinc-950', 
                    textColor: 'text-white' 
                }} 
            />
        </div>
    </main>
{/if}