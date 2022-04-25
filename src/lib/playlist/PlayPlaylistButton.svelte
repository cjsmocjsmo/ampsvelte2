<script>
	import  { playlistQueueStore } from '$lib/store/playerqueuestore';
	import { playPlayList } from '$lib/store/stores';
	// import {Howl, Howler} from 'howler';
	export let plid;

	// onMount(() => fetchPlaylist(plid))

	// let sound;
	// let foo = [];

	async function fetchPlaylist(plidd) {
		playPlayList.set(true)
		const resp = await fetch(`http://192.168.0.90:9090/PlayListByID?playlistid=${plidd}`)
		const plist = await resp.json();
        // plist.PlayList.forEach(element => { playlistQueueStore.add(element.httpaddr)})
		plist.PlayList.forEach(element => { playlistQueueStore.add(element)})
		console.log($playlistQueueStore)
        // console.log($playlistSongs)
		// playPlayList.set(true)
	// 	sound = new Howl({
	// 		html5: true,
	// 		src: foo,
	// 		autoplay: true,
	// 		volume: 0.5,
	// 		onend: function() {
	// 			console.log('Finished!');
	// 		}
	// 	});
	// 	sound.play()
	}
	// console.log(foo)




</script>

<!-- <p>{$playlistSongs}</p> -->

<button class="lod" on:click={fetchPlaylist(plid)}>Load PlayList</button>
<!-- <button on:click={stopPlay} >pause/stop</button> -->



<style>

	.lod {
		background-color: green;
		color: white;
	}

</style>