import { writable } from 'svelte/store';

export const albumid = writable("None");

// export const src = writable("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3")

export const src = writable()

export const pausedValue = writable()

export const durationValue = writable()