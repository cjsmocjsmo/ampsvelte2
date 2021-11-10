<script >
	export const prerender = true;
	import { onMount } from 'svelte';
	import InfiniteScroll from "svelte-infinite-scroll";


    let page = 0;
    let size = 20;
    let data = [];
    let newBatch = [];

    onMount(() => fetchAlphaData())

    $: data = [
		...data,
        ...newBatch.splice(size * page, size * (page + 1) - 1)
    ];

    async function fetchAlphaData() {
		const res = await fetch(`http://192.168.0.91:9090/AlbumAlpha?alpha=E`);
		newBatch = await res.json();
        console.log(newBatch)
	};

	function myFunction(id) {
		var x = document.getElementById(id);
		if (x.className.indexOf("w3-show") == -1) {
			x.className += " w3-show";
		} else { 
			x.className = x.className.replace(" w3-show", "");
		}
	}

	function playsong(addr, id) {
        const aud1 = document.getElementsByClassName("Audio1")[0]
        aud1.setAttribute('src', addr);
		aud1.setAttribute("controls", true)
        aud1.play()
		myFunction(id)
    }

</script>

<ul>
	{#each data as item}
		<li>
			<div class="albumflexbox w3-container">
				<img src={item.PicHttpAddr} on:click={myFunction(item.AlbumID)} alt="Fuck Me" />
				<div class="albuminfo">
					<h3>{item.Album}</h3>
					<h4>{item.NumSongs} {item.NumSongs < 2 ? "song" : "songs"}</h4>
				</div>
			</div>
			<div id={item.AlbumID} class="w3-container w3-hide foo">
				{#each item.Songs as Song}
				<div class="artboxflex">
					<h5>{Song.title}</h5>
					<div class="artbtnflex">
						<button on:click={playsong(Song.httpaddr, item.AlbumID)} >Play</button>
						<button>Add</button>
					</div>
				</div>
				<hr />
				{/each}
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

    /* .alphaBtn {
		width: 100%;
        font-size: 1.25em;
        border-radius: 10px;
	}
	
	.alpha {
		display: block;
		border-radius: 50%;
		padding: 12px;
		background-color: rgb(45, 202, 24);
		width: 45px;
		height: 45px;
		text-align: center;

	}
	.wrapit {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;

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

	.foo {
		background-image: linear-gradient(to left, rgba(148,0,211,0), rgba(255, 0, 0, .25), rgba(148,0,211,1));
		margin-top: 12px;
	}
	
	h3, h4, h5 {
		color: white;
	}

	.albuminfo {
		display: flex;
		flex-direction: column;
		padding: 10px;
	}

	.albumflexbox {
		display: flex;
		flex-direction: row;
		align-items: center
	}
	
	img {
		max-width: 200px;
		min-width: 135px;
		width: 30%;
		height: 30%;
		display: block;
	}

	hr {
		border: 0;
		border-top: 2px solid brown;
		width: 100%;
    }

	.artboxflex{
		display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

	}

	.artbtnflex {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	button {
		margin: 2px;
		width: 4em;
	}
	
</style>
