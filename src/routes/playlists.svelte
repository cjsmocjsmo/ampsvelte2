<script>
	import { onMount } from 'svelte';
	import Songs from '../lib/playlist/SongComp.svelte';

	let playlists;
	$: playlists = [];

	let plname1 = "";
	let plname2 = "";
	let numsongs = "";
	let show1 = false;
	let show2 = false;

	onMount(async () => {
		const ress = await fetch(`http://192.168.0.91:9090/AllPlaylists`);
		playlists = await ress.json();
		console.log(playlists)
	});

	async function addRandomPlaylist(songcount, name) {
		const res = await fetch(`http://192.168.0.91:9090/AddRandomPlaylist?songcount=${songcount}&&name=${name}`);
		playlists = await res.json();
        console.log(playlists.PlayList)
	};

	async function addPlaylist(name) {
		const res = await fetch(`http://192.168.0.91:9090/AddPlaylist?name=${name}`);
		playlists = await res.json();
        console.log(playlists)
	};

	function myFunction(id) {
		var x = document.getElementById(id);
		if (x.className.indexOf("w3-show") == -1) {
			x.className += " w3-show";
		} else { 
			x.className = x.className.replace(" w3-show", "");
		}
	}

	const handleClick1 = () => {
		if (show1 === true) {
			show1 = false;
		} else {
			show1 = true;
		}
	}
	
	const handleClick2 = () => {
		if (show2 === true) {
			show2 = false;
		} else {
			show2 = true;
		}
	}

	const handleSubmit1 = () => {
		addPlaylist(plname1)
		show1 = false;
	}

	const handleSubmit2 = () => {
		addRandomPlaylist(numsongs, plname2)
		show2 = false;
	}

	async function deleteit(plid) {
		const res = await fetch(`http://192.168.0.91:9090/DeletePlayList?playlistid=${plid}`);
		playlists = await res.json();
		console.log(playlists)
	}

	function deleteplaylist(plid) {
		// document.getElementById(plid).remove();
		deleteit(plid)
	}

</script>

<svelte:head>
	<title>Playlists</title>
</svelte:head>

<div class="playlistBtnGroup">
	<button on:click={handleClick1}>ADD EMPTY</button>
	<button on:click={handleClick2}>ADD RANDOM</button>
</div>

{#if show1 === true}
	<div class="addPL">
		<input bind:value={plname1} placeholder="Playlist Name" >
		<button on:click={handleSubmit1}>Submit</button>
	</div>
{:else}
	<div></div>
{/if}

{#if show2 === true}
	<div>
		<div class="addRandPL">
			<input bind:value={plname2} placeholder="Playlist Name" >
		</div>
		<div class="addRandPL">
			<input bind:value={numsongs} placeholder="Number of songs" >
		</div>
		<div class="addRandPL">
			<button on:click={handleSubmit2}>Submit</button>
		</div>
	</div>
{:else}
	<div></div>
{/if}

<hr />

{#each playlists as pl}
	<!-- <div id={pl.PlayListID} class="playlistListMain"> -->
	<div class="infodiv">
		<p style="font-size: 25px" >{pl.PlayListName}</p>
		<p>{pl.PlayListCount} {pl.PlayListCount === 1 ? 'song' : 'songs'} </p>
	</div>

	<div class="playlistListMain">
		<div class="playlistDiv">
			<div class="playlistBtnGrp">
				<button class="del" on:click={deleteplaylist(pl.PlayListID)} >Delete</button>
				<button class="lod">Play</button>
				<button class="vs" on:click={myFunction(pl.PlayListID)}>{pl.PlayListCount} {pl.PlayListCount === 1 ? 'song' : 'songs'}</button>
			</div>
		</div>
	</div>
	
	<!-- {#if pl.PlayListCount != "0"} -->
		<Songs playlistid={pl.PlayListID} songz={pl.PlayList}/>
	<!-- {:else}
		<p>No PlayLists Found</p>
	{/if} -->
	
	<hr />
	
{/each}

<style>

	.infodiv {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.vs {
		background-color: pink;
	}

	.lod {
		background-color: green;
		color: white;
	}

	.del {
		background-color: red;
		color: white;
	}

	.playlistBtnGrp {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		margin-top: 1em;
		margin-bottom: 1em;
		
	}

	hr {
		border: 0;
		border-top: 2px solid brown;
		width: 100%;
	}

	.playlistListMain {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

	}

	.playlistDiv {
		display: flex;
		flex-direction: column;
	}


	p {
		font-size: 18px;
	}

	.addRandPL {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: 1em;
	}

	.addPL {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: 1em;
	}

	.playlistBtnGroup {
		display: flex;
		flex-direction: row; 
		justify-content: space-around;
		width: 100%;
		margin-top: 3em;
		margin-bottom: 3em;

	} 

</style>