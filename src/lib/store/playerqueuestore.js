import { writable } from 'svelte/store';
import { src } from '$lib/store/stores';

// constructor function
const createStore = () => {
  // initialize internal writable store with empty list
  const { subscribe, set, update } = writable([]);

  // mark link as read by removing it from the list
  const remove = (link) =>
    update(linklist => linklist.shift());
    // update(linklist => linklist.filter(l => l !== link));

  // add new link to the top of the list
  const add = (link) => update(linklist => [link, ...linklist]);

  // const setsrc = () => update(linklist => src.set(linklist[0]))

  return {
    subscribe,
    add,
    // setsrc,
    init: set, // alias set method to init
    remove,
    clear: () => set([])
  };
};

// initialize the store
const playlistQueueStore = createStore();

export { playlistQueueStore };