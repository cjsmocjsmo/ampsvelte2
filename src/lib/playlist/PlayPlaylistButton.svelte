<script>
	// import  { playlistQueueStore } from '$lib/store/playerqueuestore';
	import { playPlayList, playPlayListID } from '$lib/store/stores';

    export let plid;

	function setPlayList(pllid) {
		playPlayListID.set(pllid);
		playPlayList.set(true);
	}

</script>

{$playPlayListID}
{$playPlayList}
<button class="lod" on:click={setPlayList(plid)}>Play</button>



<style>

	.lod {
		background-color: green;
		color: white;
	}

</style>