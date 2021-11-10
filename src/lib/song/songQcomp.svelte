<script>
	import { onMount } from 'svelte';
    import InfiniteScroll from "svelte-infinite-scroll";
    import AddButton from '$lib/playlist/AddToPlaylistButton.svelte';

    let page = 0;
    let size = 20;
    let Qdata = [];
    let newBatch = [];

    onMount(() => fetchAlphaData())

    $: Qdata = [
		...Qdata,
        ...newBatch.splice(size * page, size * (page + 1) - 1)
    ];

    async function fetchAlphaData(id) {
		const res = await fetch(`http://192.168.0.91:9090/SongAlpha?alpha=Q`);
		newBatch = await res.json();
        console.log(newBatch)
	};

    function playsong(addr) {
        console.log(addr)
        const aud1 = document.getElementsByClassName("Audio1")[0]
        aud1.setAttribute('src', addr);
        aud1.setAttribute("controls", true)
        aud1.play();
        console.log(aud1.currentTime)
    }

</script>

<ul>
    {#each Qdata as item}
        <li>
            <div class="songboxflex">
                <h3>{item.title}</h3>
                <div class="songbtnflex">
                    <button on:click={playsong(item.httpaddr)}>Play</button>
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
        max-height: 700px;
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