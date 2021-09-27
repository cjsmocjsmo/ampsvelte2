<script >
	import { onMount } from 'svelte';
// import Album from './album.svelte';

	let artists = [];

	onMount(async () => {
		const ress = await fetch(`http://192.168.0.91:9090/InitArtistInfo2`);
		artists = await ress.json();
		
		console.log(artists);
	});

	// let show = false;

	// const handleClick = () => {
	// 	if (show === true) {
	// 		show = false
	// 	} else {
	// 		show = true
	// 	}
	// }

	function myFunction(id) {
		var x = document.getElementById(id);
		console.log(x.className.indexOf("w3-show"))
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
			<h3>{art.Artist}</h3>
			<h5>{art.Albums.length} albums</h5>
		</div>
		<span on:click={myFunction(art.ArtistID)} >+</span>
	</div>
	
		<div id={art.ArtistID} class="w3-container w3-hide">
			{#each art.Albums as alb}
				<h3>{alb.album}</h3>
			{/each}
		</div>
	
	<hr />
{/each}

<style>
	hr {
		border: 0;
		border-top: 2px solid brown;
		width: 100%;
    }
	span {
        font-size: 2em;
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
