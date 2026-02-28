<script lang="ts">
    import { reveal } from '$lib/actions/reveal';

    interface Event {
        name: string;
        date: string; // Tambahkan ini
        time: string;
        locationName: string;
        address: string;
        mapUrl?: string;
        calendarUrl?: string; // Tambahkan ini jika ingin link calendar spesifik
    }

    interface Props {
        events: Event[];
        theme?: {
            sectionTitleColor?: string;
            eventTitleColor?: string;
            textColor?: string;
            cardBg?: string;
            cardShadow?: string;
            cardShape?: string;
            accentColor?: string; // Warna untuk tombol utama
        };
    }

    let { events, theme = {} }: Props = $props();

    const defaultTheme = {
        sectionTitleColor: 'text-white',
        eventTitleColor: 'text-white',
        textColor: 'text-white',
        cardBg: 'bg-black/20 backdrop-blur-sm', // Glassmorphism agar mirip gambar
        cardShadow: 'shadow-xl',
        cardShape: 'rounded-3xl',
        accentColor: 'bg-[#b34b00]' // Warna orange gelap seperti di gambar
    };

    const finalTheme = { ...defaultTheme, ...theme };
</script>

<section class="mx-auto max-w-2xl px-4 py-24 text-center">
    <div class="space-y-20">
        {#each events as event, i}
            <div
                use:reveal={{ delay: (i + 1) * 100 }}
                class="{finalTheme.cardShape} {finalTheme.cardBg} p-8 md:p-12 {finalTheme.cardShadow} border border-white/10"
            >
                <h2 class="mb-10 font-serif text-4xl italic {finalTheme.eventTitleColor}">
                    {event.name}
                </h2>

                <div class="space-y-12">
                    <div class="flex flex-col items-center">
                        <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-800 shadow-md">
                            <span class="material-icons-outlined">favorite_border</span> 
                            </div>
                        <p class="text-sm font-medium uppercase tracking-widest opacity-80 {finalTheme.textColor}">Hari/Tanggal :</p>
                        <p class="mt-1 text-xl font-semibold {finalTheme.textColor}">{event.date}</p>
                        
                        <!-- <a 
                            href={event.calendarUrl || '#'} 
                            class="mt-6 flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#5d2e17] transition-transform hover:scale-105 shadow-md"
                        >
                            <span class="material-icons-outlined text-lg">calendar_today</span>
                            Simpan ke google calendar
                        </a> -->
                    </div>

                    <div class="flex flex-col items-center">
                        <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-800 shadow-md">
                            <span class="material-icons-outlined">schedule</span>
                        </div>
                        <p class="text-sm font-medium uppercase tracking-widest opacity-80 {finalTheme.textColor}">Waktu :</p>
                        <p class="mt-1 text-xl font-semibold {finalTheme.textColor}">{event.time}</p>
                    </div>

                    <div class="flex flex-col items-center">
                        <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-800 shadow-md">
                            <span class="material-icons-outlined">location_on</span>
                        </div>
                        <p class="text-sm font-medium uppercase tracking-widest opacity-80 {finalTheme.textColor}">Tempat Acara :</p>
                        <p class="mt-1 text-xl font-semibold {finalTheme.textColor}">{event.locationName}</p>
                        <p class="mt-1 text-sm opacity-70 {finalTheme.textColor}">{event.address}</p>

                        {#if event.mapUrl}
                            <a
                                href={event.mapUrl}
                                target="_blank"
                                class="mt-8 w-full max-w-xs rounded-2xl {finalTheme.accentColor} py-4 text-lg font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-95"
                            >
                                Buka Google Maps
                            </a>
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    /* Tambahkan font icon jika belum ada di project Anda */
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons+Outlined');
</style>