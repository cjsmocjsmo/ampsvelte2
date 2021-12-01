<script>
	import { onMount } from 'svelte';

	let playListLists = '';

	let plname;
	$: plname = "";

	onMount(async () => {
		const res = await fetch(`http://192.168.0.91:9090/AllPlaylists`);
		playListLists = await res.json();
	});

	onMount(async () => {
		const res = await fetch(`http://192.168.0.91:9090/GetCurrentPlayListName`);
		plname = await res.json();
	});

	async function updateCPLN(pln, plid) {
		const res = await fetch(`http://192.168.0.91:9090/UpdateCurrentPlayListName?curplaylistname=${pln}&&curplaylistid=${plid}`);
		plname = await res.json();
	};

</script>

<div>
	
	<form on:submit|preventDefault={updateCPLN(plname.PlayListName, plname.PlayListID)}>
	<p>{plname.curplaylistname} = Current Selected PlayList</p>
	{#each playListLists as playListList}
		{#if playListList.PlayListName != plname.PlayListName}
			<label>
				<input type=radio bind:group={plname} value={playListList}>
				{playListList.PlayListName}
			</label>
		{:else}
			<label>
				<input type=radio bind:group={plname} value={playListList} checked="true" >
				{playListList.PlayListName}
			</label>
		{/if}
	{/each}
	<input id="submit" type="submit" value={plname.curplaylistname ? plname.curplaylistname : "Select Me"}>
	</form>
	
</div>

<style>

	#submit {
		min-width: 80px;
		font-size: 14px;
	}

	label {
		margin: 2px;
		color: white;
	}

    form {
        text-align: right;
		margin: 8px;
    }
	
</style>