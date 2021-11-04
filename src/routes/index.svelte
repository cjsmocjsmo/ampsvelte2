<script >
	import { onMount } from 'svelte';
	import {albumid} from '../lib/store/stores.js';

	let artists = [];

	onMount(async () => {
		const ress = await fetch(`http://192.168.0.91:9090/InitArtistInfo2`);
		artists = await ress.json();
	});

	function myFunction(id) {
		var x = document.getElementById(id);
		if (x.className.indexOf("w3-show") == -1) {
			x.className += " w3-show";
		} else { 
			x.className = x.className.replace(" w3-show", "");
		}
	}

</script>

<svelte:head>
	<title>Artists</title>
</svelte:head>

<h1>Artists</h1>
{#each artists as art }
	<div class="artistflexbox w3-container" >
		<div class="artistflex">
			<p class="p1">{art.Artist}</p>
			<p class="p2">{art.Albums.length} {art.Albums.length < 2 ? "album" : "albums"}</p>
		</div>
		<span class="sp1" on:click={myFunction(art.ArtistID)} >+</span>
	</div>
	<div id={art.ArtistID} class="w3-container w3-hide foo">
		{#each art.Albums as alb}
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
{/each}

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

</style>
