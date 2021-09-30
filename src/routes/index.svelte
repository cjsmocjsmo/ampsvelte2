<script >
	import { onMount } from 'svelte';
	import Songs from '../lib/playlist/SongComp.svelte';

	let artists = [];
	let songs = [];

	onMount(async () => {
		const ress = await fetch(`http://192.168.0.91:9090/InitArtistInfo2`);
		artists = await ress.json();
		
		console.log(artists);
	});

	function myFunction(id) {
		var x = document.getElementById(id);
		if (x.className.indexOf("w3-show") == -1) {
			x.className += " w3-show";
		} else { 
			x.className = x.className.replace(" w3-show", "");
		}
	}

	function songsforalbum(albid) {
		songs = fetch(`http://192.168.0.91:9090/SongsForAlbum?albumid=${albid}`)
            .then(response => 
			// playlists = response.json(),
			console.log(response.json()),
			// console.log(response.statusText),
			// console.log(playlists),
            
        );
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
		<span on:click={myFunction(art.ArtistID)} >+</span>
	</div>
	<div id={art.ArtistID} class="w3-container w3-hide foo">
		{#each art.Albums as alb}
			<img 
				id={alb.albumID} 
				src={alb.picHttpAddr} 
				alt="fuck" 
				on:click={songsforalbum(alb.albumID)}
			/>
		{/each}
	</div>
	<hr />
{/each}

<Songs songs={songs} />

<style>
	.p1 {
		font-size: 28px;
	}

	.p2 {
		font-size: 18px;
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
