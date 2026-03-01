import { writable } from 'svelte/store';

export const isPlaying = writable<boolean>(false);
// Store untuk menyimpan referensi elemen audio
export const audioStore = writable<HTMLAudioElement | null>(null);