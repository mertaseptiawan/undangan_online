<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';

    interface Props {
        coupleNames: string;
        imageUrl: string;
        title?: string;
        subTitle?: string;
        onOpen: () => void;
        theme?: {
            textColor?: string;
            buttonColor?: string;
        };
    }

    let {
        coupleNames,
        imageUrl,
        title = 'The Wedding Of',
        subTitle = 'Please join us in our celebration of love',
        onOpen,
        theme = {}
    }: Props = $props();

    // State untuk menyimpan nama tamu dari URL
    let guestName = $state('');

    onMount(() => {
        // Mengambil parameter 'to' dari URL (contoh: ?to=Budi+Sudarsono)
        const params = new URLSearchParams(window.location.search);
        const to = params.get('to');
        if (to) {
            guestName = to;
        }
    });

    const defaultTheme = {
        textColor: 'text-white',
        buttonColor: 'bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/50',
    };

    const finalTheme = $derived({ ...defaultTheme, ...theme });
    let isOpening = $state(false);

    function handleOpen() {
        onOpen();
        isOpening = true;
    }
</script>

{#if !isOpening}
<div
    out:fly={{ y: -100, duration: 1000 }}
    class="fixed inset-0 z-70 flex flex-col items-center justify-center overflow-hidden"
>
    <div class="absolute inset-0 z-0">
        <img 
            src={imageUrl} 
            alt="Wedding Banner" 
            class="h-full w-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <div 
        class="relative z-10 flex flex-col items-center px-6 text-center {finalTheme.textColor}"
        in:fade={{ delay: 300, duration: 800 }}
    >
        <p class="mb-4 text-xs font-light uppercase tracking-[0.5em] opacity-80">
            {title}
        </p>
        
        <h1 class="mb-8 font-serif text-5xl md:text-8xl leading-tight">
            {coupleNames}
        </h1>

        {#if guestName}
            <div in:fade={{ delay: 600 }} class="mb-8">
                <p class="text-xs uppercase tracking-widest opacity-70 mb-2">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
                <p class="text-xl font-medium italic">{guestName}</p>
            </div>
        {/if}

        <p class="mb-10 max-w-sm text-sm italic opacity-70">
            {subTitle}
        </p>

        <button
            onclick={handleOpen}
            class="group relative overflow-hidden rounded-full px-10 py-4 transition-all hover:scale-105 active:scale-95 {finalTheme.buttonColor}"
        >
            <span class="flex items-center gap-3 font-medium tracking-[0.2em] uppercase text-xs">
                Open Invitation
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </span>
        </button>
    </div>
</div>
{/if}

<style>
    h1 {
        text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
    }
</style>