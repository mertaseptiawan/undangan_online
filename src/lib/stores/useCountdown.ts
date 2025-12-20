// src/lib/stores/countdown.ts
import { writable } from 'svelte/store';
import { calculateTimeLeft } from '$lib/utils/timer'; // Sesuaikan path-nya

export function createCountdown(targetDate: string) {
    // Inisialisasi store dengan perhitungan awal
    const { subscribe, set } = writable(calculateTimeLeft(targetDate));

    // Jalankan interval
    const interval = setInterval(() => {
        const time = calculateTimeLeft(targetDate);
        set(time);

        // Jika waktu habis, hentikan interval
        if (time.days === 0 && time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
            clearInterval(interval);
        }
    }, 1000);

    // Kita kembalikan object yang punya fungsi subscribe agar bisa dibaca komponen
    return {
        subscribe,
        stop: () => clearInterval(interval) // Fungsi manual untuk stop
    };
}