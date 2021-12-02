<script>
	import  { playlistQueueStore } from '$lib/store/playerqueuestore';
	import { picaddr, duration, showPlayButton, playPlayList } from '$lib/store/stores';
	import { Howler } from 'howler';

	const handleClick = () => {
		if ($showPlayButton) {
			showPlayButton.set(false)
			PlayDaPlayList()
			
		} else {
			showPlayButton.set(true)
			Howler.stop()

		}
	}

	function PlayDaPlayList() {
		
		for(let i = 0; i < $playlistQueueStore.length; i++) {
			console.log($playlistQueueStore[i].httpaddr)
			console.log($playlistQueueStore[i].picHttpAddr)
			createHowl($playlistQueueStore[i].httpaddr, $playlistQueueStore[i].picHttpAddr)

			// createHowl($playlistQueueStore[i])
			// if ( typeof sound === undefined) {
			// 	song = $playlistQueueStore[i]
			// 	createHowl(song)
			// } else if (sound.state() === "unloaded") {
			// 	song = $playlistQueueStore[i]
			// 	createHowl(song)
			// 	playlistQueueStore.remove(song)
			// 	console.log($playlistQueueStore[i])
			// }
		}
	}

	let sound;
	function createHowl(addr, pA) {
		picaddr.set(pA)
        showPlayButton.set(false)
        playPlayList.set(true)
        console.log(addr)
        Howler.stop()
        sound = new Howl({
			html5: true,
			src: addr,
			autoplay: true,
			volume: 0.5,
            onload: function() {
                duration.set(formatTime(Math.round(sound.duration())));
            },
			onend: function() {
                showPlayButton.set(true)
                sound.stop()
				sound.unload()
				console.log('Finished!');
			}
		});
		sound.play()
    }

	function formatTime(secs) {
        var minutes = Math.floor(secs / 60) || 0;
        var seconds = (secs - minutes * 60) || 0;
        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }

	
</script>

<!-- <p>{$playlistQueueStore}</p> -->
<div class="playermain">
	<div id="playerDiv">
		<img style="width: 70px; height: 70px" src={$picaddr} alt="fuckit" />
		
		{#if $showPlayButton }
			<div class="tooltip">
				<svg id="playarrow" on:click={handleClick} xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="black" class="bi bi-play-fill" viewBox="0 0 16 16">
					<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
				</svg>
				<span class="tooltiptext">Play Song</span>
			</div>	
		{:else}
			<div class="tooltip">
				<svg id="pause" on:click={handleClick} xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="black" class="bi bi-pause" viewBox="0 0 16 16">
					<path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
				</svg>
				<span class="tooltiptext">Pause Song</span>
			</div>	
		{/if}
		<!-- <div class="tooltip">
			<svg id="previous" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
				<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
			</svg>
			<span class="tooltiptext">Previous Song</span>
		</div>	 -->
		<div class="tooltip">
			<svg id="add" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" class="bi bi-plus" viewBox="0 0 16 16">
				<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
			</svg>
			<span class="tooltiptext">Next Song</span>
		</div>
		<div>
			<p style="color: black">{$duration}</p>
		</div>
	</div>
</div>

<style>
	.tooltip {
		position: relative;
		display: inline-block;
	}

	.tooltip .tooltiptext {
		visibility: hidden;
		width: 120px;
		background-color: black;
		color: #fff;
		text-align: center;
		border-radius: 6px;
		padding: 5px 0;
		
		/* Position the tooltip */
		position: absolute;
		z-index: 1;
		bottom: 100%;
		left: 50%;
		margin-left: -60px;
	}

	.tooltip:hover .tooltiptext {
		visibility: visible;
	}

	 .playermain {
		padding: 10px;
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: pink;
	}
	
	#playerDiv {
		display: flex;
		flex: 1;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		
	}
</style>