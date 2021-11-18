<script>
	import { onMount } from 'svelte';
    import InfiniteScroll from "svelte-infinite-scroll";
    import AddButton from '$lib/playlist/AddToPlaylistButton.svelte';
    import { showPlayButton } from '$lib/store/stores';

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
		const res = await fetch(`http://192.168.0.91:9090/SongAlpha?alpha=I`);
		newBatch = await res.json();
	};


    function loadsong(addr) {
        console.log(addr)
        const aud1 = document.getElementsByClassName("Audio1")[0]
        aud1.setAttribute('src', addr);
        aud1.setAttribute("controls", true)
        showPlayButton.set(true)
    }

    function play() {
        const aud1 = document.getElementsByClassName("Audio1")[0].play();
        showPlayButton.set(false)
    }

    function pausesong() {
        const aud1 = document.getElementsByClassName("Audio1")[0].pause();
        showPlayButton.set(true)
    }

</script>

<div class="boo">
    <ul>
        {#each adata as item}
            <li>
                <div class="songboxflex">
                    <h3>{item.title}</h3>
                    <div class="songbtnflex">
                        <button on:click={loadsong(item.httpaddr)}>Load</button>
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
</div>
<style>

    .boo {
        width:auto;
        height: 570px;
    }

    ul {
        display: flex;
        flex-direction: column;
        border-radius: 2px;
        width: 100%;
        max-width: 100%;
        max-height: 590px;
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