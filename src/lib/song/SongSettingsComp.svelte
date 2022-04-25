<script>
	import { onMount } from 'svelte';
	import SelectButton from '$lib/playlist/PlayListSelectButton.svelte';
	import { songarse } from '$lib/store/stores';

	let isSongVisible = false;
	var setSongVisible = () => {
		if (isSongVisible) {
			isSongVisible = false;
		} else {
			isSongVisible = true;
		}
	};

	function setArse(ar) {
		$songarse = ar;
		isSongVisible = false;
	}

	let src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

	let newBatch = [];
	async function fetchSongFirstLetter() {
		const res = await fetch(`http://192.168.0.90:9090/SongFirstLetter`);
		newBatch = await res.json();
		console.log(newBatch);
	}
	onMount(() => fetchSongFirstLetter());
</script>

<!-- <Player {src} display={true}/> -->
<div class="tooltip">
	<button class="alphaBtn" on:click={setSongVisible}>Settings</button>
	<span class="tooltiptext">Song Alphabeticaly</span>
</div>

{#if isSongVisible}
	<div class="maindiv">
		<div class="wrapit">
			{#each newBatch as nb}
				<p class="alpha" on:click={setArse(nb)}>{nb}</p>
			{/each}
		</div>
	</div>
	<SelectButton />
{/if}

<style>
	.tooltip {
		position: relative;
		display: inline-block;
		border-bottom: 1px dotted black;
	}

	.tooltip .tooltiptext {
		visibility: hidden;
		width: 120px;
		background-color: #555;
		color: #fff;
		text-align: center;
		border-radius: 6px;
		padding: 5px 0;
		position: absolute;
		z-index: 1;
		top: 125%;
		left: -8%;
		opacity: 0;
		transition: opacity 0.3s;
	}

	.tooltip .tooltiptext::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: #555 transparent transparent transparent;
	}

	.tooltip:hover .tooltiptext {
		visibility: visible;
		opacity: 1;
	}

	.alphaBtn {
		width: 25%;
		font-size: 0.8em;
		background-color: pink;
		border-radius: 7px;
		font-size: 1.25em;
	}

	.alpha {
		display: block;
		border-radius: 50%;
		padding: 12px;
		background-color: rgb(45, 202, 24);
		width: 45px;
		text-align: center;
		margin-right: 12px;
	}

	.wrapit {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
</style>
