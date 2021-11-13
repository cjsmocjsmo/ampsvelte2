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
		console.log("handlesubmit")
		currentPlayList.set(selected)
	}
	
</script>

<form on:submit|preventDefault={handleSubmit}>
	<select id="selLab" bind:value={selected} on:change="{() => answer = ''}">
		{#each playListLists as playListList}
			<option value={playListList}>
				{playListList.PlayListName}
			</option>
		{/each}
	</select>
	<button type=submit>
		Submit
	</button>
</form>

<style>

    form {
        text-align: right;
		margin: 8px;
    }

    select {
        width: 225px;
        
    }
	
</style>