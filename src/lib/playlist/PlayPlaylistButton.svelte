<script>
	import  { playlistQueueStore } from '$lib/store/playerqueuestore';
	import { playPlayList, playlistSongs } from '$lib/store/stores';
	import {Howl, Howler} from 'howler';
	export let plid;

	// onMount(() => fetchPlaylist(plid))

	let sound;
	let foo = [];

	async function fetchPlaylist(plidd) {
		const resp = await fetch(`http://192.168.0.91:9090/PlayListByID?playlistid=${plidd}`)
		const plist = await resp.json();
        console.log(plist.PlayList)
        plist.PlayList.forEach(element => { foo.push(element.httpaddr)})
		console.log(foo)
        // console.log($playlistSongs)
		// playPlayList.set(true)
		sound = new Howl({
			src: foo,
			autoplay: true,
			volume: 0.5,
			onend: function() {
				console.log('Finished!');
			}
		});
		sound.play()
	}



	// async function fetchPlaylist(plidd) {
	// 	const resp = await fetch(`http://192.168.0.91:9090/PlayListByID?playlistid=${plidd}`)
	// 	const plist = await resp.json();
    //     console.log(plist.PlayList)
	// 	// sound = new Howl({
	// 	// 	src: plist.PlayList,
	// 	// 	autoplay: true,
	// 	// 	loop: true,
	// 	// 	volume: 0.5,
	// 	// 	onend: function() {
	// 	// 		console.log('Finished!');
	// 	// 	}
	// 	// });
	// }
	

	const stopPlay = () => sound.stop()

	// function stop() {
	// 	sound.pause()
	// }

</script>

<!-- <p>{$playlistSongs}</p> -->

<button class="lod" on:click={fetchPlaylist(plid)}>Play</button>
<button on:click={stopPlay} >pause/stop</button>


<style>

	.lod {
		background-color: green;
		color: white;
	}

</style>