<script>
    import { onMount } from 'svelte';
    import { albumid } from '../lib/store/stores.js';
    
    import AddButton from '$lib/playlist/AddToPlaylistButton.svelte';
    import PlayListSelectButton from '$lib/playlist/PlayListSelectButton.svelte';

    let songs = [];

    onMount(async () => {
		const ress = await fetch(`http://192.168.0.91:9090/SongsForAlbum?selected=${$albumid}`)
		songs = await ress.json();
	});

    function loadsong(addr) {
        const aud1 = document.getElementsByClassName("Audio1")[0]
        aud1.setAttribute('src', addr);
        // aud1.setAttribute("controls", true)
        aud1.play();
    }
</script>

<PlayListSelectButton />
{#each songs as song}
    <div class="pmaster">
        <div class="pdivs">
            <p class="p1">{song.title}</p>
            <p class="p2">{song.album}</p>
        </div>
        <div class="psongs">
            <a href="/" >
                <button on:click={loadsong(song.httpaddr)}>Play</button>
            </a>
            
            <AddButton song={song}/>
            <a href="/"><button>Back</button></a>
        </div>
    </div>
    <hr />
{/each}



<style>

    button {
        margin: 2px;
        width: 4em;
    }

    .psongs {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .pmaster {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    
    .p1 {
        font-size: 22px;
    }

    .p2 {
        font-size: 16px;
    }

    hr {
        border: 0;
        border-top: 2px solid brown;
        width: 100%;
    }
    
</style>