<script lang="ts">
    import { isPlaying, audioStore } from '$lib/musicStore'; 

    function toggleMusic() {
        // Ambil referensi audio dari store yang diisi oleh Page
        const audio = $audioStore;
        
        if (!audio) return;
        
        if (audio.paused) {
            audio.play().catch(console.error);
            $isPlaying = true;
        } else {
            audio.pause();
            $isPlaying = false;
        }
    }
</script>

<button 
    type="button"
    onclick={toggleMusic}
    class="fixed bottom-6 right-6 z-[90] flex h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-lg backdrop-blur-md transition-all hover:scale-110 active:scale-95"
    class:animate-spin-slow={$isPlaying}
>
    {#if $isPlaying}
        <svg class="h-6 w-6 text-amber-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
        </svg>
    {:else}
        <svg class="h-6 w-6 text-amber-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
        </svg>
    {/if}
</button>

<style>
    .animate-spin-slow {
        animation: spin 3s linear infinite;
    }

    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
</style>