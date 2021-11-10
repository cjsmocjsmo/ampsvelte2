<script>
	import { onMount } from 'svelte';
    import InfiniteScroll from "svelte-infinite-scroll";
    import SelectButton from '$lib/playlist/PlayListSelectButton.svelte';
    import AddButton from '$lib/playlist/AddToPlaylistButton.svelte';

    let page = 1;
    let nextUrl = "";
    let data = [];
    let newBatch = [];

	async function fetchData() {
		const res = await fetch(`http://192.168.0.91:9090/SongInfoByPage?page=${page}`);
		newBatch = await res.json();
	};

    onMount(() => fetchData())

    $: data = [
		...data,
        ...newBatch
    ];

    async function fetchAlphaData(id) {
		const res = await fetch(`http://192.168.0.91:9090/SongAlpha?alpha=${id}`);
		newBatch = await res.json();
        console.log(newBatch)
	};

    

    function getAlphaInfo(id) {
        // 
        console.log("cliced")
        // data = []
        // const alphaInfo = fetchAlphaData(id)
    }

    

    function playsong(addr) {
        console.log(addr)
        const aud1 = document.getElementsByClassName("Audio1")[0]
        aud1.setAttribute('src', addr);
        aud1.setAttribute("controls", true)
        aud1.play();
        console.log(aud1.currentTime)
    }

    let isVisible = false
	var setVisible = () => {
		if (isVisible) {
			isVisible = false
		} else {
			isVisible = true
		}
	}

</script>

<svelte:head>
	<title>Artists</title>
</svelte:head>

<h1>Songs</h1>

<SelectButton />

<button class="alphaBtn" on:click={setVisible} >Select</button>
{#if isVisible}
	<div class="maindiv">
		<div class="wrapit">
			<p class="alpha" on:click={getAlphaInfo("A")}>A</p>
			<p class="alpha" on:click={getAlphaInfo("B")}>B</p>
			<p class="alpha" on:click={getAlphaInfo("C")}>C</p>
			<p class="alpha" on:click={getAlphaInfo("D")}>D</p>
			<p class="alpha" on:click={getAlphaInfo("E")}>E</p>
			<p class="alpha" on:click={getAlphaInfo("F")}>F</p>
			<p class="alpha" on:click={getAlphaInfo("G")}>G</p>
		</div>
		<div class="wrapit">
			<p class="alpha" on:click={getAlphaInfo("H")}>H</p>
			<p class="alpha" on:click={getAlphaInfo("I")}>I</p>
			<p class="alpha" on:click={getAlphaInfo("J")}>J</p>
			<p class="alpha" on:click={getAlphaInfo("K")}>K</p>
			<p class="alpha" on:click={getAlphaInfo("L")}>L</p>
			<p class="alpha" on:click={getAlphaInfo("M")}>M</p>
            <p class="alpha" on:click={getAlphaInfo("N")}>N</p>
        </div>
		<div class="wrapit">
			<p class="alpha" on:click={getAlphaInfo("O")}>O</p>
			<p class="alpha" on:click={getAlphaInfo("P")}>P</p>
			<p class="alpha" on:click={getAlphaInfo("Q")}>Q</p>
            <p class="alpha" on:click={getAlphaInfo("R")}>R</p>
            <p class="alpha" on:click={getAlphaInfo("S")}>S</p>
            <p class="alpha" on:click={getAlphaInfo("T")}>T</p>
			<p class="alpha" on:click={getAlphaInfo("U")}>U</p>
		</div>

		<div class="wrapit"> 
			<p class="alpha" on:click={getAlphaInfo("V")}>V</p>
            <p class="alpha" on:click={getAlphaInfo("W")}>W</p>
			<p class="alpha" on:click={getAlphaInfo("X")}>X</p>
            <p class="alpha" on:click={getAlphaInfo("Y")}>Y</p>
			<p class="alpha" on:click={getAlphaInfo("Z")}>Z</p>
		</div>
	</div>
{/if}


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




<style>

    .alphaBtn {
		width: 100%;
        font-size: 1.25em;
        border-radius: 10px;
	}

	.alpha {
		/* border: 2px solid ; */
		display: block;
		border-radius: 50%;
		padding: 12px;
		/* margin: 1px; */
		background-color: rgb(45, 202, 24);
		width: 45px;
		height: 45px;
		text-align: center;

	}
	.wrapit {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		/* flex-wrap: wrap; */

	}
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