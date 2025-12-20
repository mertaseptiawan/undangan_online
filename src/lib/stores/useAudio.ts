import { writable } from 'svelte/store';

// Status apakah musik sedang berputar
export const isPlaying = writable(false);

// Kita simpan referensi audio di sini agar bisa diakses global
let audio: HTMLAudioElement | null = null;

export const audioStore = {
    // Fungsi untuk memulai musik pertama kali (Load on Demand)
    init: (src: string) => {
        if (!audio) {
            audio = new Audio(src);
            audio.loop = true;
        }
    },

    play: () => {
        if (audio) {
            audio.play();
            isPlaying.set(true);
        }
    },

    pause: () => {
        if (audio) {
            audio.pause();
            isPlaying.set(false);
        }
    },

    toggle: () => {
        if (audio) {
            if (audio.paused) {
                audio.play();
                isPlaying.set(true);
            } else {
                audio.pause();
                isPlaying.set(false);
            }
        }
    }
};