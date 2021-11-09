<script >
	import { onMount } from 'svelte';
	import {albumid} from '../lib/store/stores.js';
	import InfiniteScroll from "svelte-infinite-scroll";
	import SelectButton from '$lib/playlist/PlayListSelectButton.svelte';
	
	let page = 1;
    let nextUrl = "";
    let data = [];
    let newBatch = [];

	async function fetchData() {
		const ress = await fetch(`http://192.168.0.91:9090/ArtistInfoByPage?page=${page}`);
		newBatch = await ress.json();
		// console.log(data)
        // console.log(newBatch)
	};

	onMount(() => fetchData())

	$: data = [
		...data,
        ...newBatch
    ];

	function myFunction(id) {
		var x = document.getElementById(id);
		if (x.className.indexOf("w3-show") == -1) {
			x.className += " w3-show";
		} else { 
			x.className = x.className.replace(" w3-show", "");
		}
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

<h1>Artists</h1>
<SelectButton />
<button class="alphaBtn" on:click={setVisible} >show</button>
{#if isVisible}
	<div class="maindiv">
		<div class="wrapit">
			<p class="alpha">A</p>
			<p class="alpha">B</p>
			<p class="alpha">C</p>
			<p class="alpha">D</p>
			<p class="alpha">E</p>
			<p class="alpha">F</p>
			<p class="alpha">F</p>
		</div>
		<div class="wrapit">
			<p class="alpha">G</p>
			<p class="alpha">G</p>
			<p class="alpha">H</p>
			<p class="alpha">I</p>
			<p class="alpha">J</p>
			<p class="alpha">K</p>
			<p class="alpha">L</p>
		</div>
		<div class="wrapit">
			<p class="alpha">M</p>
			<p class="alpha">N</p>
			<p class="alpha">O</p>
			<p class="alpha">P</p>
			<p class="alpha">Q</p>
			<p class="alpha">R</p>
			<p class="alpha">S</p>
		</div>
		<div class="wrapit">
			<p class="alpha">T</p>
			<p class="alpha">U</p>
			<p class="alpha">V</p>
			<p class="alpha">W</p>
			<p class="alpha">X</p>
			<p class="alpha">Y</p>
			<p class="alpha">Z</p>
		</div>
	</div>
{/if}

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
