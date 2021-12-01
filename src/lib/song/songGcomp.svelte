<script>
	import { onMount } from 'svelte';
    import InfiniteScroll from "svelte-infinite-scroll";
    import AddButton from '$lib/playlist/AddToPlaylistButton.svelte';
    import { src, playPlayList } from '$lib/store/stores';
    import {Howl, Howler} from 'howler';


    let page = 0;
    let size = 20;
    let adata = [];
    let newBatch = [];

    onMount(() => fetchAlphaData())

    $: adata = [
		...adata,
        ...newBatch.splice(size * page, size * (page + 1) - 1)
    ];

    async function fetchAlphaData() {
		const res = await fetch(`http://192.168.0.91:9090/SongAlpha?alpha=G`);
		newBatch = await res.json();
	};

    function playSong() {
        const aud1 = document.getElementsByClassName("Audio1")[0].play();
    }

    function loadsong(addr) {
        playPlayList.set(false)
        src.set(addr)
        playSong()
        
    }

</script>

<ul>
    {#each adata as item}
        <li>
            <div class="songboxflex">
                <h3>{item.title}</h3>
                <div class="songbtnflex">
                       <button on:click={loadsong(item.httpaddr)}>Play</button>
                    <AddButton song={item}/>
                </div>
            </div>
            <hr />
        </li>
    {/each}
    <InfiniteScroll
        hasMore={newBatch.length}
        threshold={100}
        on:loadMore={() => {page++; fetchAlphaData()}} />
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

    h3 {
        color: white;
    }

    hr {
        border: 0;
        border-top: 2px solid brown;
        width: 100%;
    }
    
</style>