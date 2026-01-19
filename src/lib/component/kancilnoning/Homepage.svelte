<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { createCountdown } from '$lib/stores/useCountdown';
    import { useSlider } from '$lib/stores/useSlider';
    import { fade } from 'svelte/transition';
    import { supabase } from '$lib/supabase';
    import { createPagination } from '$lib/stores/usePagination';
    import { reveal } from '$lib/actions/reveal';
    import GalleryModal from '../GalleryModal.svelte';
    import Cover from '$lib/component/kancilnoning/Cover.svelte';
    import MusicControl from '$lib/component/MusicControl.svelte';
    import { addToCalendar } from '$lib/actions/googleCalendar';

    let newName = "";
    let newStatus = "";
    let newMessage = "";
    let guestBook: any[] = [];
    let loading = false;
    const currentYear = new Date().getFullYear();

    let showContent = false;

    //countdown
    const targetDate= "2026-01-10T14:00:00";
    const countdownStore = createCountdown(targetDate);
    const format = (n: number) => n.toString().padStart(2, '0');
    
    //pagination
    const pagination = createPagination([], 5);
    const { paginatedItems, currentPage, totalPages } = pagination;

    export let images: string[] = [
        "/image/image1.jpeg",
        "/image/image2.jpeg",
        "/image/image3.jpeg",
        "/image/image4.jpeg",
        "/image/image5.jpeg",
        "/image/image6.jpeg"
    ];

    let isModalOpen: boolean = false;
    let activeIndex: number = 0;

    function openCover() {
        showContent = true;
        setTimeout(() => {
            const content = document.getElementById('main-content');
        }, 100);
    }

    function openModal(index: number) {
        activeIndex = index;
        isModalOpen = true;
    }

    async function fetchMessages() {
        const { data, error } = await supabase
            .from('guestbook')
            .select('*')
            .order('created_at', { ascending: false });

        if (!error) {
            guestBook = data;
            pagination.updateData(data || []);
        }
    }

    async function handleSubmit() {
        if (!newName || !newMessage || !newStatus) return alert("Isi semua ya!");
        
        loading = true;
        const { error } = await supabase
            .from('guestbook')
            .insert([{ name: newName, status: newStatus, message: newMessage }]);

        if (error) {
            alert("Gagal kirim pesan: " + error.message);
        } else {
            newName = ""; newStatus = ""; newMessage = "";
            await fetchMessages();
        }
        loading = false;
    }

    const slider = useSlider(images.length, 5000);

    onMount(() => {
        slider.startAutoPlay();
        fetchMessages();
    });

    onDestroy(() => {
        slider.destroy();
        countdownStore.stop();
    });
</script>

{#if !showContent}
    <div transition:fade>
        <Cover onOpen={openCover} />
    </div>
{:else}

    <MusicControl />

    <main id="main-content" class="mt-0 overflow-hidden w-full">
        <div transition:fade>

            <section class="relative h-screen flex items-center justify-center text-center text-white">
                <div class="absolute inset-0 bg-black/40 z-10"></div>
                <img src="/image/cover.jpeg" class="absolute inset-0 w-full h-full object-cover" alt="Couple Banner">
                <div use:reveal={{ direction: 'bottom', scale: 1, distance: "50px", delay: 0, duration: 1000 }} class="relative z-20 px-4 flex flex-col space-y-60 items-center">
                    <div style="font-family: 'Playwrite NZ', cursive;">
                        <p class="uppercase tracking-[0.3em] mb-4">The Wedding Of</p>
                        <h1 class="font-serif-elegant text-3xl md:text-9xl mb-4">Kancil & Noning</h1>
                    </div>

                    <p style="font-family: 'Edu VIC WA NT Hand Precursive', cursive;" class="text-lg italic font-light">"Menjalin cinta dalam ikatan suci pernikahan"</p>
                </div>
            </section>

            <section class="py-20 px-4 max-w-6xl mx-auto text-center">
                <h2 use:reveal={{ direction: 'bottom', scale: 1, distance: "50px", delay: 0, duration: 1000 }} class="font-serif-elegant text-5xl mb-16 text-amber-700">Mempelai</h2>
                <div class="grid md:grid-cols-3 gap-12">
                    <div class="flex flex-col items-center">
                        <div use:reveal={{ direction: 'left', scale: 1, distance: "50px", delay: 0, duration: 1000 }} class="w-64 h-80 p-2 border-4 border-amber-200 rounded-full overflow-hidden shadow-xl mb-6">
                            <img src="/image/groom.jpeg" class="w-full h-full object-cover rounded-full" alt="Groom">
                        </div>
                        <div use:reveal={{ direction: 'left', scale: 1, distance: "50px", delay: 0, duration: 1000 }} class="text-center">
                            <h3 class="text-3xl font-semibold">Kancil</h3>
                            <p class="text-gray-500 mt-2 italic">I Gst. Ngurah Darma Adi Winata</p>
                            
                            <p class="text-gray-500 mt-2 text-sm italic">Putra dari pasangan</p>
                            <p class="text-gray-500 mt-2 text-sm italic">I Gusti Nyoman Putra</p>
                            <p class="text-gray-500 mt-2 text-sm italic">&</p>
                            <p class="text-gray-500 mt-2 text-sm italic">Jero Citrawati</p>
                            <p class="text-gray-500 mt-2 text-sm italic">Banjar Sengguan, Lingkungan Semarapura Kangin - Klungkung</p>
                        </div>
                        
                    </div>
                    <h2 style="font-family: 'Ole'" use:reveal={{ direction: 'bottom', scale: 1, distance: "50px", delay: 0, duration: 1000 }} class="font-serif-elegant text-5xl text-amber-700">&</h2>
                    <div class="flex flex-col items-center">
                        <div use:reveal={{ direction: 'right', scale: 1, distance: "50px", delay: 0, duration: 1000 }} class="w-64 h-80 p-2 border-4 border-amber-200 rounded-full overflow-hidden shadow-xl mb-6">
                            <img src="/image/bridge.jpeg" class="w-full h-full object-cover rounded-full" alt="Bride">
                        </div>
                        <div use:reveal={{ direction: 'right', scale: 1, distance: "50px", delay: 0, duration: 1000 }} class="text-center">
                            <h3 class="text-3xl font-semibold">Noning</h3>
                            <p class="text-gray-500 mt-2 italic">Ni Putu Rini Oktaviyanti</p>

                            <p class="text-gray-500 mt-2 text-sm italic">Putri dari pasangan</p>
                            <p class="text-gray-500 mt-2 text-sm italic">I Made Budiantara</p>
                            <p class="text-gray-500 mt-2 text-sm italic">&</p>
                            <p class="text-gray-500 mt-2 text-sm italic">Ni Putu Sari</p>
                            <p class="text-gray-500 mt-2 text-sm italic">Banjar Dinas Pande, Desa. Nongan, Kecamatan Rendang - Karangasem</p>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section class="py-16 px-4 bg-amber-50 text-center">
                <h3 use:reveal={{ direction: 'bottom', scale: 1, distance: "50px", delay: 0, duration: 1000 }} class="text-xl font-light mb-8 uppercase tracking-widest">Menghitung Hari</h3>
                <div use:reveal={{ direction: 'bottom', scale: 1, distance: "50px", delay: 0, duration: 1000 }} class="flex justify-center gap-4 md:gap-8">
                    <div class="bg-white p-6 rounded-lg shadow-sm min-w-20">
                        <span class="block text-3xl font-bold text-amber-700">{format($countdownStore.days)}</span>
                        <span class="text-xs text-gray-400">Hari</span>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-sm min-w-20">
                        <span class="block text-3xl font-bold text-amber-700">{format($countdownStore.hours)}</span>
                        <span class="text-xs text-gray-400">Jam</span>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-sm min-w-20">
                        <span class="block text-3xl font-bold text-amber-700">{format($countdownStore.minutes)}</span>
                        <span class="text-xs text-gray-400">Menit</span>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-sm min-w-20">
                        <span class="block text-3xl font-bold text-amber-700">{format($countdownStore.seconds)}</span>
                        <span class="text-xs text-gray-400">Detik</span>
                    </div>
                </div>
            </section>

            <section class="relative py-20 my-20 px-4 min-h-screen flex flex-col items-center justify-center">
                <div class="absolute inset-0 z-0">
                    <img 
                        src="/image/cover.jpeg" 
                        class="w-full h-full object-cover" 
                        alt="Background Acara"
                    />
                    <div class="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                </div>

                <h2 use:reveal={{ direction: 'bottom', scale: 1, distance: "50px", delay: 0, duration: 1000 }} class="relative z-10 font-serif text-3xl md:text-6xl text-white mb-10 drop-shadow-lg">
                    Acara & Lokasi
                </h2>

                <div class="relative z-10 w-full max-w-lg bg-white/20 backdrop-blur-md border border-white/30 rounded-[40px] p-10 md:p-14 text-center text-white shadow-2xl">
                    
                    <h3 class="font-serif-elegant text-2xl md:text-5xl mb-12 italic">
                        Resepsi Pernikahan
                    </h3>

                    <div class="flex flex-col items-center mb-10">
                        <div use:reveal class="bg-white w-8 h-8 rounded-full flex items-center justify-center mb-4 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <p use:reveal={{ direction: 'bottom', scale: 1, distance: "50px", delay: 0, duration: 1000 }} class="md:text-2xl font-light tracking-wide">Hari/Tanggal : <br> Sabtu, 10 Januari 2026</p>

                        <button 
                            on:click={addToCalendar}
                            class="my-4 text-sm  inline-flex items-center justify-center gap-2 bg-white text-amber-900 px-6 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                            </svg>
                            Simpan ke google calendar
                        </button>
                    </div>

                    <div class="flex flex-col items-center mb-10">
                        <div use:reveal class="bg-white w-8 h-8 rounded-full flex items-center justify-center mb-4 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p use:reveal={{ direction: 'bottom', scale: 1, distance: "50px", delay: 0, duration: 1000 }} class="md:text-2xl font-light tracking-wide">Waktu : <br> 14.00 - Selesai</p>
                    </div>

                    <div class="flex flex-col items-center mb-12">
                        <div use:reveal class="bg-white w-8 h-8 rounded-full flex items-center justify-center mb-4 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <p use:reveal={{ direction: 'bottom', scale: 1, distance: "50px", delay: 0, duration: 1000 }} class="md:text-xl leading-relaxed">
                            Tempat Acara : <br> Banjar Adat Sengguan
                        </p>
                    </div>

                    <a 
                        href="https://maps.app.goo.gl/eefs2ttTe9hhGKEEA" 
                        target="_blank" 
                        class="inline-block bg-amber-700 text-white px-6 py-4 rounded-xl font-semibold hover:bg-black transition-all duration-300 shadow-xl"
                    >
                        Buka Google Maps
                    </a>
                </div>
            </section>

            <section class=" mx-auto">
                <h2 class="font-serif-elegant text-5xl text-center mb-12 text-amber-700">Galeri Momen</h2>

                <div class="relative h-screen my-20 flex items-center justify-center text-center text-white overflow-hidden">
                    <div class="absolute inset-0 bg-black/40 z-10"></div>
                
                    {#each images as img, i}
                        {#if $slider === i}
                            <img 
                                src={img} 
                                transition:fade={{ duration: 1000 }}
                                class="absolute inset-0 w-full h-full object-cover" 
                                alt="Couple Banner"
                            >
                        {/if}
                    {/each}
                </div>
                
                <div class="columns-2 px-4 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {#each images as img, i}
                        <div class="break-inside-avoid" use:reveal={{ delay: (i % 3) * 100,scale: 0.5,distance: '20px',duration: 800 }}>
                            <button aria-label="show modal"
                                on:click={() => openModal(i)}
                                class="w-full block overflow-hidden rounded-lg shadow-md focus:outline-none"
                            >
                                <img 
                                    class="rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer w-full" 
                                    src={img} 
                                    alt="Gallery {i + 1}"
                                />
                        </button>
                        </div>
                    {/each}
                </div>

                <GalleryModal 
                    {images} 
                    bind:isOpen={isModalOpen} 
                    bind:currentIndex={activeIndex} 
                    on:close={() => isModalOpen = false} 
                />
            </section>


            <section class="py-20 px-4 bg-gray-100">
                <div class="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
                    <h2 class="font-serif-elegant text-4xl text-center mb-8 text-amber-700">Buku Tamu</h2>
                    
                    <form on:submit|preventDefault={handleSubmit} class="space-y-4 mb-10">
                        <input bind:value={newName} type="text" placeholder="Nama Anda" class="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                        <select bind:value={newStatus} class="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                            <option value="" disabled>Konfirmasi Kehadiran</option>
                            <option value="hadir">Hadir</option>
                            <option value="tidak">Tidak Hadir</option>
                        </select>
                        <textarea bind:value={newMessage} placeholder="Ucapan & Doa" rows="4" class="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
                        <button type="submit" disabled={loading} class="w-full bg-amber-700 text-white font-bold py-3 rounded-lg hover:bg-amber-800">{loading ? 'Mengirim...' : 'Kirim Pesan'}</button>
                    </form>

                    <div class="space-y-6 pr-2">
                        {#each $paginatedItems as guest}
                            <div class="border-b pb-4 last:border-0" in:fade>
                                <h5 class="font-bold text-gray-800">{guest.name} 
                                    {#if guest.status === 'hadir'}
                                        <span class="text-xs font-normal text-green-600 bg-green-100 px-2 py-1 rounded ml-2">Hadir</span>
                                    {:else}
                                        <span class="text-xs font-normal text-gray-400 bg-gray-100 px-2 py-1 rounded ml-2">Tidak Hadir</span>
                                    {/if}
                                </h5>
                                <p class="text-gray-600 text-sm mt-1">{guest.message}</p>
                            </div>
                        {:else}
                            <p class="text-center text-gray-400 italic py-4">Belum ada ucapan...</p>
                        {/each}
                    </div>

                    {#if $totalPages > 1}
                        <div class="flex justify-center items-center gap-6 mt-10 pt-6 border-t border-gray-100">
                            <button 
                                on:click={pagination.prev} 
                                disabled={$currentPage === 1}
                                class="flex items-center text-amber-700 disabled:text-gray-300 disabled:cursor-not-allowed font-medium transition-colors hover:text-amber-900"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                Prev
                            </button>

                            <div class="flex gap-2">
                                <span class="bg-amber-50 text-amber-700 px-4 py-1 rounded-full text-sm font-bold border border-amber-200">
                                    {$currentPage} / {$totalPages}
                                </span>
                            </div>

                            <button 
                                on:click={pagination.next} 
                                disabled={$currentPage === $totalPages}
                                class="flex items-center text-amber-700 disabled:text-gray-300 disabled:cursor-not-allowed font-medium transition-colors hover:text-amber-900"
                            >
                                Next
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    {/if}
                </div>
            </section>

            <footer class="bg-zinc-950 text-white py-12 px-6 mt-20 border-t border-white/5">
                <div class="max-w-6xl mx-auto flex flex-col items-center">
                    
                    <div class="flex items-center gap-4 mb-8">
                        <div class="h-px w-12 bg-white/20"></div>
                        <span class="text-xl">✨</span>
                        <div class="h-px w-12 bg-white/20"></div>
                    </div>

                    <h2 class="font-serif text-3xl md:text-4xl tracking-[0.2em] mb-4 text-center">
                        Kancil & Noning
                    </h2>
                    
                    <p class="text-white/50 font-light italic mb-10 text-center max-w-md">
                        "Growing old together is the greatest adventure of all."
                    </p>

                    <div class="max-w-56 text-center">
                        <p class="text-xs">powered by:</p>
                        <img src="/image/logo1.png" class="w-full h-full object-cover rounded-full" alt="Bride">
                    </div>
                    

                    <!-- <div class="flex gap-6 mb-12">
                        <a href="#" aria-label="Instagram" class="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        </a>
                        <a href="#" aria-label="WhatsApp" class="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        </a>
                    </div> -->

                    <div class="text-xs text-white/30 tracking-tighter text-center">
                        &copy; {currentYear} Created with ❤️ for Your Special Day.
                    </div>
                </div>
            </footer>
        </div>
    </main>
{/if} 
    
