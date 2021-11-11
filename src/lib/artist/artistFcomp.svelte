<script >
	import { onMount } from 'svelte';
	import {albumid} from '$lib/store/stores.js';
	import InfiniteScroll from "svelte-infinite-scroll";
	
    let page = 0;
    let size = 20;
    let data = [];
    let newBatch = [];

    async function fetchAlphaData() {
		const res = await fetch(`http://192.168.0.91:9090/ArtistAlpha?alpha=F`);
		newBatch = await res.json();
        console.log(newBatch)
	};

	onMount(() => fetchAlphaData())

	$: data = [
		...data,
        ...newBatch.splice(size * page, size * (page + 1) - 1)
    ];

	function myFunction(id) {
		var x = document.getElementById(id);
		if (x.className.indexOf("w3-show") == -1) {
			x.className += " w3-show";
		} else { 
			x.className = x.className.replace(" w3-show", "");
		}
	}

</script>

<ul>
	{#each data as item}
		<li>
			<div class="artistflexbox w3-container" >
				<div class="artistflex">
					<p class="p1">{item.Artist}</p>
					<p class="p2">{item.Albums.length} {item.Albums.length < 2 ? "album" : "albums"}</p>
				</div>
				<span class="sp1" on:click={myFunction(item.ArtistID)} >+</span>
			</div>
			<div id={item.ArtistID} class="w3-container w3-hide foo">
				{#each item.Albums as alb}
					<a href="/SongsForAlbum">
						<img 
							id={alb.albumID} 
							src={alb.picHttpAddr} 
							alt="fuck" 
							on:click={() => albumid.set(alb.albumID)} />
					</a>
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

	.p1 {
		font-size: 28px;
	}

	.p2 {
		font-size: 18px;
	}

	.sp1{
		font-size: 5em;
		color: white;
	}

	img {
		min-width: 25px;
		max-width: 80px;

	}

	hr {
		border: 0;
		border-top: 2px solid brown;
		width: 100%;
    }

	.foo {
		background-color: lightskyblue;
		margin-top: 12px;
	}

	span {
        font-size: 2.5em;
    }

	.artistflexbox {
        display: flex;
        flex: 1;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

	.artistflex {
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: left;
	}

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
</style>
