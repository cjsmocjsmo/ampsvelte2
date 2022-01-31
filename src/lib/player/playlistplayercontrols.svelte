<script>
	import { playlistQueueStore } from '$lib/store/playerqueuestore';
	import { picaddr, duration, showPlayButton, playPlayList } from '$lib/store/stores';
	import { Howler } from 'howler';











	// let playlistplayer
	const handleClick = () => {
		if ($showPlayButton) {
			showPlayButton.set(false);
			const pllist = DaPlayList();
			playlistplayer = new PlayListPlayer(pllist)
		} else {
			showPlayButton.set(true);
			Howler.stop();
		}
	};

	
	// let playlistplayer;
	let plist = [];
	function DaPlayList() {
		
		for (let i = 0; i < $playlistQueueStore.length; i++) {
			let zoo = {
				"howl": null,
				"src": $playlistQueueStore[i].httpaddr,
				"pic": $playlistQueueStore[i].picHttpAddr,
			}
			if (typeof zoo === "undefined") {
				continue
			} else {
				plist.push(zoo)
			}
		}
		console.log(plist)
		return plist
		// playlistplayer = new PlayListPlayer(plist)

	}

	var PlayListPlayer = function (playlists) {
		let self = this;

		self.playlists = playlists;
		console.log(self.playlists)
		self.index = 0;

		// Setup the display for each station.
		for (let i = 0; i < self.playlists.length; i++) {
			console.log(i)
			console.log(self.playlists[i].howl )
			// console.log(!self.playlists[i].howl.playing())
			// if (!self.playlists[i].howl === null) {
			// 	console.log("fuck it worked")
			// } else {
			// 	console.log("eatme")
			// }

			

					let isNotPlaying = self.playlists[i].howl && !self.playlists[i].howl.playing();
					console.log(isNotPlaying)
					// // let isNotPlaying = self.playlists[i].howl && !self.playlists[i].howl === null;

					playlistplayer.stop();
					console.log(!self.playlists[i].howl)
					

					if (isNotPlaying || !self.playlists[i].howl) {
						playlistplayer.play(i);
					}
					
			// document.svg['playarrow' + i].addEventListener(
				// document.svg["playarrow"].addEventListener(
			// document.getElementById("playarrow").addEventListener(
			// 	'click',
			// 	function (index) {
			// 		console.log(index)
			// 		let isNotPlaying = self.playlists[index].howl && !self.playlists[index].howl.playing();

			// 		playlistplayer.stop();
					

			// 		if (isNotPlaying || !self.playlists[index].howl) {
			// 			playlistplayer.play(index);
			// 		}
			// 	}.bind(self, i)
			// );
		}
	};

	PlayListPlayer.prototype = {
		play: function (index) {
			let self = this;
			let sound;

			index = typeof index === 'number' ? index : self.index;
			let data = self.playlists[index];

			console.log(data)

			if (data.howl) {
				sound = data.howl;
			} else {
				sound = data.howl = new Howl({
					src: data.src,
					html5: true,
					format: ['mp3', 'aac']
				});
			}

			sound.play();

			// self.toggleStationDisplay(index, true);

			self.index = index;
		},

		stop: function () {
			let self = this;

			let sound = self.playlists[self.index].howl;

			// self.toggleStationDisplay(self.index, false);

			if (sound) {
				sound.stop();
			}
		},

		// toggleStationDisplay: function (index, state) {
		// 	let self = this;

		// 	window['station' + index].style.backgroundColor = state ? 'rgba(255, 255, 255, 0.33)' : '';

		// 	window['live' + index].style.opacity = state ? 1 : 0;

		// 	window['playing' + index].style.display = state ? 'block' : 'none';
		// }
	};

	let playlistplayer = new PlayListPlayer(plist)
	// let playlistplayer = new PlayListPlayer([
	// 	{
	// 		freq: '91.1',
	// 		title: 'Radio City',
	// 		src: 'http://prclive1.listenon.in:9960/',
	// 		howl: null
	// 	},
	// 	{
	// 		freq: '81.4',
	// 		title: 'BBC Radio 1',
	// 		src: 'http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio1_mf_q',
	// 		howl: null
	// 	},
	// 	{
	// 		freq: '89.9',
	// 		title: 'Hip Hop Hits',
	// 		src: 'http://tunein4.streamguys1.com/hhbeafree5',
	// 		howl: null
	// 	},
	// 	{
	// 		freq: '98.3',
	// 		title: 'Radio  Mirchi',
	// 		src: 'http://peridot.streamguys.com:7150/Mirchi',
	// 		howl: null
	// 	},
	// 	{
	// 		freq: '103.3',
	// 		title: "80's Hits",
	// 		src: 'http://tunein4.streamguys1.com/80shtfree1',
	// 		howl: null
	// 	}
	// ]);
</script>

<div class="playermain">
	<div id="playerDiv">
		<img style="width: 70px; height: 70px" src={$picaddr} alt="fuckit" />

		{#if $showPlayButton}
			<div class="tooltip">
				<svg
					id="playarrow"
					on:click={handleClick}
					xmlns="http://www.w3.org/2000/svg"
					width="52"
					height="52"
					fill="black"
					class="bi bi-play-fill"
					viewBox="0 0 16 16"
				>
					<path
						d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
					/>
				</svg>
				<span class="tooltiptext">Play Song</span>
			</div>
		{:else}
			<div class="tooltip">
				<svg
					on:click={handleClick}
					xmlns="http://www.w3.org/2000/svg"
					width="52"
					height="52"
					fill="black"
					class="bi bi-pause"
					viewBox="0 0 16 16"
				>
					<path
						d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"
					/>
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
			<svg
				id="add"
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				fill="black"
				class="bi bi-plus"
				viewBox="0 0 16 16"
			>
				<path
					d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
				/>
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
