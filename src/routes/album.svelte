<script >
	export const prerender = true;

	import { onMount } from 'svelte';

	let albums = [];

	onMount(async () => {
		const ress = await fetch(`http://192.168.0.91:9090/InitAlbum2Info`);
		albums = await ress.json();
	});

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
        // const aud1 = document.getElementById("Audio1")
        aud1.setAttribute('src', addr);
		aud1.setAttribute("controls", true)
        aud1.play()
		myFunction(id)
    }

</script>

<svelte:head>
	<title>Albums</title>
</svelte:head>

<h1>Albums</h1>

{#each albums as alb}
	<div class="albumflexbox w3-container">
		
		<img src={alb.PicHttpAddr} alt="Fuck Me"/>
		
		<div class="albuminfo">
			<h3>{alb.Album}</h3>
			<h4>{alb.NumSongs} {alb.NumSongs < 2 ? "song" : "songs"}</h4>
		</div>
		<span class="albumS" on:click={myFunction(alb.AlbumID)}>+</span>
	</div>
	<div id={alb.AlbumID} class="w3-container w3-hide foo">
		{#each alb.Songs as Song}
		<div class="artboxflex">
			<h5>{Song.title}</h5>
			<div class="artbtnflex">
				<button on:click={playsong(Song.httpaddr, alb.AlbumID)} >Play</button>
				<button>Add</button>
			</div>
		</div>
		<hr />
		{/each}
	</div>
	<hr />
{/each}

<style>
	.foo {
		background-image: linear-gradient(to left, rgba(148,0,211,0), rgba(255, 0, 0, .25), rgba(148,0,211,1));
		/* background-color: lightskyblue; */
		margin-top: 12px;
	}

	h1 {
		margin: 1em;
	}
	
	h3, h4 {
		color: white;
	}

	.albuminfo {
		display: flex;
		flex: 1;
		flex-direction: column;
		padding: 10px;
	}

	.albumflexbox {
		display: flex;
		flex-direction: row;
		align-items: center
	}

	.albumS {
        font-size: 5em;
		color: white;
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
        flex: 1;
        flex-direction: row;
        justify-content: flex-end;
        align-items: right;

	}
	.artbtnflex {
		display: flex;
		flex: 1;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}
</style>
