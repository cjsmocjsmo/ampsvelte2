<script>
	import { onMount } from 'svelte';
    // import InfiniteScroll from "svelte-infinite-scroll";
    import AddButton from '$lib/playlist/AddToPlaylistButton.svelte';
    import { picaddr, duration, playPlayList, showPlayButton } from '$lib/store/stores';
    import {Howl, Howler} from 'howler';
    import { formatTime } from '$lib/js/common.js';

    let page = 0;
    let size = 20;
    let ddata = [];
    let newwBatch = [];
    let sound;

    $: ddata = [
		...ddata,
        ...newwBatch.splice(size * page, size * (page + 1) - 1)
    ];

    async function fetchSongAlphaData() {
        const res = await fetch(`http://192.168.0.90:9090/SongAlpha?alpha=A`);
        let newBatch = await res.json();
        console.log(newBatch)
    };

    onMount(() => fetchSongAlphaData())

    

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

{ddata}
<ul>
    {#each ddata as sitem}
        <li>
            <div class="songboxflex">
                <h3>{sitem.title}</h3>
                <div class="songbtnflex">
                       <button on:click={loadsong(sitem.httpaddr, sitem.picHttpAddr)}>Play</button>
                    <AddButton song={sitem}/>
                </div>
            </div>
            <hr />
        </li>
    {/each}
    <!-- <InfiniteScroll
        hasMore={newSongBatch.length}
        threshold={100}
        on:loadMore={() => {page++; fetchAlphaData()}} /> -->
</ul>

<style>

    ul {
        display: flex;
        flex-direction: column;
        border-radius: 2px;
        width: 100%;
        max-width: 100%;
        max-height: 800px;
        overflow-x: scroll;
        list-style: none;
        padding: 0;
    }
    
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