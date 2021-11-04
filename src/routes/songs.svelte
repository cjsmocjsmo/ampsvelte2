<script>
	import { onMount } from 'svelte';
    import InfiniteScroll from "$lib/playlist/infinitescroll.svelte";
    // import InfiniteScroll from "svelte-infinite-scroll";
    import SelectButton from '$lib/playlist/PlayListSelectButton.svelte';
    import AddButton from '$lib/playlist/AddToPlaylistButton.svelte';

    
	// let allSongs = [];
    let page = 1;
    let nextUrl = "";
    let data = [];
    let newBatch = [];


	async function fetchData() {
		const res = await fetch(`http://192.168.0.91:9090/SongInfoByPage?page=${page}`);
		newBatch = await res.json();
        console.log(data)
        console.log(newBatch)
	};

    onMount(() => {
		fetchData();
	})

    $: data = [
		...data,
        ...newBatch
    ];

    // let page = 0;
    // let size = 20;
    // let songs = [];

    // $: songs = [
    //     ...songs,
    //     ...allSongs.splice(size * page, size * (page + 1) - 1)
    // ];






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
<main>
    <ul>
        {#each data as item}
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
        on:loadMore={() => {page++; fetchData()}} />
    </ul>
</main>



<style>
/* ul {
    width: 400px;
    max-height: 400px;
    overflow-x: scroll;
  } */
    ul {
        /* list-style-type: none; */
        /* box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); */
        display: flex;
        flex-direction: column;
        border-radius: 2px;
        width: 100%;
        max-width: 100%;
        max-height: 700px;
            /* background-color: white; */
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