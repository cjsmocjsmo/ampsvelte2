<script>
	import { playlistQueueStore } from '$lib/store/playerqueuestore';
	import { picaddr, duration, showPlayButton, playPlayList } from '$lib/store/stores';
	import { Howler } from 'howler';

	const handleClick = () => {
		if ($showPlayButton) {
			showPlayButton.set(false);
			PlayDaPlayList();
		} else {
			showPlayButton.set(true);
			Howler.stop();
		}
	};

	let plist = [];
	function PlayDaPlayList() {
		for (let i = 0; i < $playlistQueueStore.length; i++) {
			let zoo = {
				"howl": $playlistQueueStore[i].howl,
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
		var playlistplayer = new PlayListPlayer(plist)
	}

	// let sound;
	// let fin = 'notfinished';
	// function createHowl(addr, pA) {
	// 	fin = 'notfinished';
	// 	picaddr.set(pA);
	// 	showPlayButton.set(false);
	// 	playPlayList.set(true);
	// 	console.log(addr);
	// 	Howler.stop();
	// 	sound = new Howl({
	// 		html5: true,
	// 		src: addr,
	// 		autoplay: true,
	// 		volume: 0.5,
	// 		onload: function () {
	// 			duration.set(formatTime(Math.round(sound.duration())));
	// 		},
	// 		onend: function () {
	// 			showPlayButton.set(true);
	// 			sound.stop();
	// 			sound.unload();
	// 			fin = 'Finished';
	// 			console.log('Finished!');
	// 		}
	// 	});
	// 	// sound.play()
	// }

	// function formatTime(secs) {
	// 	var minutes = Math.floor(secs / 60) || 0;
	// 	var seconds = secs - minutes * 60 || 0;
	// 	return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
	// }






	let PlayListPlayer = function (playlists) {
		var self = this;

		self.playlists = playlists;
		self.index = 0;

		// Setup the display for each station.
		for (let i = 0; i < self.playlists.length; i++) {
			// window['title' + i].innerHTML =
			// 	'<b>' + self.playlists[i].freq + '</b> ' + self.playlists[i].title;
			console.log(i)
			// document.svg['playarrow' + i].addEventListener(
				// document.svg["playarrow"].addEventListener(
				document.getElementById("playarrow").addEventListener(
				'click',
				function (index) {
					var isNotPlaying = self.playlists[index].howl && !self.playlists[index].howl.playing();

					playlistplayer.stop();

					if (isNotPlaying || !self.playlists[index].howl) {
						playlistplayer.play(index);
					}
				}.bind(self, i)
			);
		}
	};

	PlayListPlayer.prototype = {
		play: function (index) {
			var self = this;
			var sound;

			index = typeof index === 'number' ? index : self.index;
			var data = self.playlists[index];

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
			var self = this;

			var sound = self.playlists[self.index].howl;

			// self.toggleStationDisplay(self.index, false);

			if (sound) {
				sound.stop();
			}
		},

		// toggleStationDisplay: function (index, state) {
		// 	var self = this;

		// 	window['station' + index].style.backgroundColor = state ? 'rgba(255, 255, 255, 0.33)' : '';

		// 	window['live' + index].style.opacity = state ? 1 : 0;

		// 	window['playing' + index].style.display = state ? 'block' : 'none';
		// }
	};

	// var playlistplayer = new PlayListPlayer([
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
					id="pause"
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
