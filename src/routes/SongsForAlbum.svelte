<script>
    import { onMount } from 'svelte';
    import AddButton from '$lib/playlist/AddToPlaylistButton.svelte';
    import PlayListSelectButton from '$lib/playlist/PlayListSelectButton.svelte';
    import { albumid, picaddr, duration, playPlayList, showPlayButton } from '$lib/store/stores';
    import { Howl, Howler } from 'howler';

    let songs = [];

    onMount(async () => {
		const ress = await fetch(`http://192.168.0.91:9090/SongsForAlbum?selected=${$albumid}`)
		songs = await ress.json();
	});
    
    function formatTime(secs) {
        var minutes = Math.floor(secs / 60) || 0;
        var seconds = (secs - minutes * 60) || 0;
        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }

    let sound;
    function loadsong(addr, pA) {
        picaddr.set(pA)
        showPlayButton.set(false)
        playPlayList.set(false)
        console.log(addr)
        Howler.unload()
        sound = new Howl({
			html5: true,
			src: addr,
			autoplay: true,
			volume: 0.5,
            onload: function() {
                duration.set(formatTime(Math.round(sound.duration())));
            },
			onend: function() {
                showPlayButton.set(true)
                Howler.unload()
				console.log('Finished!');
			}
		});
		sound.play()
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