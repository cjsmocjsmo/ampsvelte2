<script>
	import { onMount } from 'svelte';
	import { currentPlayList } from '$lib/store/playliststore.js';

	let playListLists = '';

	onMount(async () => {
		const res = await fetch(`http://192.168.0.91:9090/AllPlaylists`);
		playListLists = await res.json();
	});

	let selected;

	let answer = '';

	function handleSubmit() {
		currentPlayList.set(selected.PlayListName)
		alert(`answered question ${selected.PlayListID} (${selected.PlayListName}) with "${answer}"`);
	}

	let currentCPName;

	const unsubscribe = currentPlayList.subscribe(value => {
		currentCPName = value;
	});

</script>

<form on:submit|preventDefault={handleSubmit}>
	<p>{selected ? '' : 'Select A Playlist To Add Music To'}</p>
	<select bind:value={selected} on:change="{() => answer = ''}">
		{#each playListLists as playListList}
			<option value={playListList}>
				{playListList.PlayListName}
			</option>
		{/each}
	</select>
</form>

<!-- <p>selected playlist: {selected ? selected.PlayListName : '[waiting...]'}</p> -->
<!-- <p>{selected ? '' : 'Select A Playlist To Add Music To'}</p> -->

<style>
    form {
        text-align: right;
    }

    select {
        width: 225px;
        
    }
</style>