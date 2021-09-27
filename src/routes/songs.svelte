<script>
	import { onMount } from 'svelte';

	let songs = [];

	onMount(async () => {
		const ress = await fetch(`http://192.168.0.91:9090/InitialSongInfo`);
		songs = await ress.json();
		
		console.log(songs);
	});
</script>

<svelte:head>
	<title>Artists</title>
</svelte:head>

<h1>Songs</h1>
{#each songs as song}
    <div class="songflexbox">
        <h3>{song.title}</h3>
        <span>+</span>
    </div>
    <hr />
{/each}




<style>
    .songflexbox {
        display: flex;
        flex: 1;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    span {
        font-size: 2em;
    }
    hr {
        border: 0;
        border-top: 2px solid brown;
        width: 100%;
    }
</style>