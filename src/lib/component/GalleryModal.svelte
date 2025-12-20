<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';

    export let images: string[] = [];
    export let currentIndex = 0;
    export let isOpen = false;

    const dispatch = createEventDispatcher();

    const close = () => dispatch('close');
    const next = () => currentIndex = (currentIndex + 1) % images.length;
    const prev = () => currentIndex = (currentIndex - 1 + images.length) % images.length;

    function handleKeydown(e: KeyboardEvent) {
    if (!isOpen) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
    <div 
        transition:fade={{ duration: 300 }}
        class="fixed max-w-full inset-0 z-100 bg-black/90 flex flex-col items-center justify-center backdrop-blur-sm"
    >
        <div class="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-110">
            <div class="text-white text-lg font-light shadow-sm">
                {currentIndex + 1} / {images.length}
            </div>
            
            <div class="flex gap-6">
                <button on:click={close} aria-label="Close gallery" class="text-white hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <button aria-label="previous image"
            on:click={prev} 
            class="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 z-110 transition-colors"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-14 md:w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
            </svg>
        </button>

        <div class="w-full h-full flex items-center justify-center p-4 md:p-12">
            {#key currentIndex}
                <img 
                    in:fade={{ duration: 400 }}
                    src={images[currentIndex]} 
                    alt="Gallery Fullscreen"
                    class="max-w-full max-h-full object-contain shadow-2xl border border-white/10"
                />
            {/key}
        </div>

        <button aria-label="next image"
            on:click={next} 
            class="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 z-110 transition-colors"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-14 md:w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
            </svg>
        </button>

        <div class="absolute bottom-10 left-0 right-0 text-center px-4">
            <p class="text-white text-sm md:text-base font-light tracking-wide truncate max-w-md mx-auto">
                Image_{currentIndex + 1}.jpg
            </p>
        </div>
    </div>
{/if}