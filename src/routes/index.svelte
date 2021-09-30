<script >
	import { onMount } from 'svelte';

	let artists = [];

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
</script>

<svelte:head>
	<title>Artists</title>
</svelte:head>

<h1>Artists</h1>
{#each artists as art }
	<div class="artistflexbox w3-container" >
		<div class="artistflex">
			<h3>{art.Artist}</h3>
			<!-- <h5>{art.Albums.length} albums</h5> -->
			<h5>{art.Albums.length} {art.Albums.length < 2 ? "album" : "albums"}</h5>
		</div>
		<span on:click={myFunction(art.ArtistID)} >+</span>
	</div>
	<div id={art.ArtistID} class="w3-container w3-hide foo">
		{#each art.Albums as alb}
			<img src={alb.picHttpAddr} alt="fuck" />
			<!-- <div class="artboxflex">
				<h5>{alb.album}</h5>
				<div class="artbtnflex">
					<button>Open</button>
				</div>
			</div> -->
			<!-- <hr /> -->
		{/each}
	</div>
	<hr />
{/each}

<style>
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
	/* .artboxflex{
		display: flex;
        flex: 1;
        flex-direction: row;
		align-items: center;
		justify-content: center;
        


        justify-content: flex-end;
        align-items: right;

	}
	.artbtnflex {
		display: flex;
		flex: 1;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	} */

</style>
