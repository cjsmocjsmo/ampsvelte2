<script>
	import { onMount } from 'svelte';
    import SelectButton from '$lib/playlist/PlayListSelectButton.svelte';
    import AddButton from '$lib/playlist/AddToPlaylistButton.svelte';

	let songs = [];

	onMount(async () => {
		const ress = await fetch(`http://192.168.0.91:9090/InitialSongInfo`);
		songs = await ress.json();
	});

    function playsong(addr) {
        console.log(addr)
        const aud1 = document.getElementsByClassName("Audio1")[0]
        aud1.setAttribute('src', addr);
        aud1.setAttribute("controls", true)
        aud1.play();
        console.log(aud1.currentTime)
    }

</script>

<svelte:head>
	<title>Artists</title>
</svelte:head>

<h1>Songs</h1>
<SelectButton />
{#each songs as song}
    <div class="songboxflex">
        <h3>{song.title}</h3>
        <div class="songbtnflex">
            <button on:click={playsong(song.httpaddr)}>Play</button>
            <AddButton song={song}/>
        </div>
    </div>
    <hr />
{/each}

<style>

    h3 {
        color: white;
    }

    .songboxflex{
		display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: right;

	}

	.songbtnflex {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
	}

    button {
        margin: 2px;
        width: 4em;
    }

    hr {
        border: 0;
        border-top: 2px solid brown;
        width: 100%;
    }
    
</style>