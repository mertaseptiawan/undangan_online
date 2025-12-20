import { writable } from 'svelte/store';

export function useSlider(totalItems: number, intervalTime = 3000) {
    const { subscribe, update, set } = writable(0);
    let intervalId: any = null;

    const next = () => {
        update(n => (n + 1) % totalItems);
    };

    const prev = () => {
        update(n => (n - 1 + totalItems) % totalItems);
    };

    const goTo = (index: number) => {
        set(index);
    };

    const startAutoPlay = () => {
        if (intervalId) return;
        intervalId = setInterval(next, intervalTime);
    };

    const stopAutoPlay = () => {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    };

    return {
        subscribe,
        next,
        prev,
        goTo,
        startAutoPlay,
        stopAutoPlay,
        destroy: stopAutoPlay 
    };
}