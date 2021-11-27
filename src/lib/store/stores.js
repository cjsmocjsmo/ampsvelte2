import { writable } from 'svelte/store';

export const albumid = writable("None");

// export const src = writable("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3")

export const src = writable()

export const pausedValuePlayer1 = writable()

export const pausedValuePlayer2 = writable()

export const playPlayList = writable()

export const playPlayListID = writable()