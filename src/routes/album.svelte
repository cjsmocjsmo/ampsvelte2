<script >
	export const prerender = true;

	import { onMount } from 'svelte';

	let photos = [];

	onMount(async () => {
		const ress = await fetch(`http://192.168.0.91:9090/RandomPics`);
		photos = await ress.json();
		
		// console.log(photos);
	});

	let albums = [];

	onMount(async () => {
		const ress = await fetch(`http://192.168.0.91:9090/InitAlbumInfo`);
		albums = await ress.json();
		
		console.log(albums);
	});



</script>

<svelte:head>
	<title>Albums</title>
</svelte:head>

<h1>Albums</h1>

{#each albums as alb}
	<div class="albumflexbox">
		
			<img src={alb.picHttpAddr} />
		
		<div class="albuminfo">
			<h3>{alb.album}</h3>
			<h4>{alb.numsongs} songs</h4>
		</div>
	</div>
	<hr />
{/each}





<!-- <div id="foo">
	{#each photos as p}
		<img src={p} alt="Welcome" />
	{/each}	
</div> -->

<style>

	h1 {
		margin: 1em;
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



	#foo {
		display: flex;
		flex: 1;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		
	}
	
	img {
		max-width: 200px;
		width: 30%;
		height: 30%;
		display: block;
	}

	hr {
    border: 0;
    border-top: 2px solid brown;
    width: 100%;
    }
</style>
