import { writable } from 'svelte/store';

export const albumid = writable("None");

export const src = writable("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3")

export const playPlayList = writable(false);

export const playlistSongs = writable();

export const showPlayButton = writable(true);

export const duration = writable("00.00");

export const picaddr = writable('https://www.debian.org/logos/openlogo-nd-75.jpg');



export const artistarse = writable("C");

export const albumarse = writable("A");

export const songarse = writable("A");