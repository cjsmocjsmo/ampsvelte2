<script>
	import { onMount } from 'svelte';
	import PlayPlaylistButton from '$lib/playlist/PlayPlaylistButton.svelte';
	import {  addPlaylist, addRandomPlaylist, deleteitsong} from '$lib/js/playlists.js';
	import { deleteit } from '$lib/js/playlists';
	import { myFunction } from '$lib/js/common'; 

	let playlists;
	$: playlists = [];

	let plname1 = "";
	let plname2 = "";
	let numsongs = "";
	let show1 = false;
	let show2 = false;

	onMount(async () => {
		const ress = await fetch(`http://192.168.0.90:9090/AllPlaylists`);
		playlists = await ress.json();
		console.log(playlists)
	});

	// async function fetchPlaylist(plid) {
	// 	const addr = `http://192.168.0.90:9090/PlayListByID?playlistid=${plid}`
	// 	await fetch(addr, {mode: "cors", method: "GET"})
	// 	.then(r => r.json())
	// 	.then(data => {
	// 		data.forEach(element => {
	// 			//put in playlistqueue
	// 			console.log(element)
	// 		});
			
	// 	}).catch(err => console.log(err));
	// }

	// async function fetchPlaylist(plid) {
	// 	const resp = await fetch(`http://192.168.0.90:9090/PlayListByID?playlistid=${plid}`)
	// 	plists = await resp.json();
	// 	plists.forEach(element => console.log(element))
		
	// }
	

	

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

	function deleteplaylist(plid) {
		// document.getElementById(plid).remove();
		deleteit(plid)
	}

</script>

<svelte:head>
	<title>Playlists</title>
</svelte:head>

<!-- <button on:click={fetchPlaylist()} >click</button> -->

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
	<div class="infodiv">
		<p style="font-size: 25px" >{pl.PlayListName}</p>
		<p>{pl.PlayListCount} {pl.PlayListCount === 1 ? 'song' : 'songs'} </p>
	</div>

	<div class="playlistListMain">
		<div class="playlistDiv">
			<div class="playlistBtnGrp">
				<button class="del" on:click={deleteplaylist(pl.PlayListID)} >Delete</button>
				<PlayPlaylistButton plid={pl.PlayListID}/>
				<!-- <button class="lod" on:click={fetchPlaylist(pl.PlayListID)}>Play</button> -->
				<button class="vs" on:click={myFunction(pl.PlayListID)}>{pl.PlayListCount} {pl.PlayListCount === 1 ? 'song' : 'songs'}</button>
			</div>
		</div>
	</div>

	<div id={pl.PlayListID} class="playlistList w3-container w3-hide">
        {#each pl.PlayList as song}
            <div class="playlistListBtn">
                <p>{song.title}</p>
				<button on:click={deleteitsong(pl.PlayListID, song.fileID)} >Delete</button>
            </div>
            <hr />
        {/each}
    </div>
	
	<hr />
	
{/each}

<style>

	p {
        font-size: 18px;
    }

    .playlistListBtn {
        display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
    }

    .playlistList {
        background-image: linear-gradient(to left, rgba(148,0,211,0), rgba(255, 0, 0, .25), rgba(148,0,211,1));
    }


	.infodiv {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.vs {
		background-color: pink;
	}

	/* .lod {
		background-color: green;
		color: white;
	} */

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