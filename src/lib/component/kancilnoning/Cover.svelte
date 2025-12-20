<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import { audioStore } from '$lib/stores/useAudio';

    export let guestName: string = "Tamu Undangan";
    export let onOpen: () => void;

    onMount(() => {
        const params = new URLSearchParams(window.location.search);
        const name = params.get('to');
        if (name) {
            guestName = name;
        }
    });

    function handleOpen() {
        audioStore.init('/music/beautiful_in_white.mp3');
        audioStore.play();
        onOpen();
    }
</script>

<section class="relative h-screen w-full flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img 
            src="/image/cover.jpeg" 
            alt="Main Cover" 
            class="w-full h-full object-cover shadow-inner"
        />
        <div class="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
    </div>

    <div class="relative z-10 text-center text-white px-4" in:fly={{ y: 20, duration: 1000 }}>
        <p class="uppercase tracking-[0.3em] text-sm mb-4 opacity-80">The Wedding of</p>
        <h1 class="font-serif text-4xl md:text-7xl mb-12 tracking-wider">Kancil & Noning</h1>

        <div class="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 inline-block">
            <p class="text-sm italic font-light mb-2">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
            <h2 class="text-2xl md:text-3xl font-bold mb-4 text-amber-200 capitalize">
                {guestName}
            </h2>
            
            <div class="flex items-center justify-center gap-2 mb-8 opacity-90">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p class="text-sm uppercase tracking-widest">Banjar Adat Sengguan</p>
            </div>

            <button 
                on:click={handleOpen}
                class="bg-amber-200 text-zinc-900 px-8 py-3 rounded-full font-semibold tracking-tighter hover:bg-white transition-all duration-300 flex items-center gap-2 mx-auto group"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                BUKA UNDANGAN
            </button>
        </div>
    </div>
</section>