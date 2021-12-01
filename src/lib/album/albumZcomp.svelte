<script >
	export const prerender = true;
	import { onMount } from 'svelte';
	import InfiniteScroll from "svelte-infinite-scroll";
	import AddButton from '$lib/playlist/AddToPlaylistButton.svelte';
	import { picaddr, duration, playPlayList, showPlayButton } from '$lib/store/stores';
	import {Howl, Howler} from 'howler';

    let page = 0;
    let size = 20;
    let data = [];
    let newBatch = [];

    onMount(() => fetchAlphaData())

    $: data = [
		...data,
        ...newBatch.splice(size * page, size * (page + 1) - 1)
    ];

    async function fetchAlphaData() {
		const res = await fetch(`http://192.168.0.91:9090/AlbumAlpha?alpha=Z`);
		newBatch = await res.json();
        console.log(newBatch)
	};

	function myFunction(id) {
		var x = document.getElementById(id);
		if (x.className.indexOf("w3-show") == -1) {
			x.className += " w3-show";
		} else { 
			x.className = x.className.replace(" w3-show", "");
		}
	}

    function formatTime(secs) {
        var minutes = Math.floor(secs / 60) || 0;
        var seconds = (secs - minutes * 60) || 0;
        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }

    let sound;
    function loadsong(addr, pA) {
        picaddr.set(pA)
        showPlayButton.set(false)
        playPlayList.set(false)
        console.log(addr)
        Howler.unload()
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
                Howler.unload()
				console.log('Finished!');
			}
		});
		sound.play()
    }

</script>

<ul>
	{#each data as item}
		<li>
			<div class="albumflexbox w3-container">
				<img src={item.PicHttpAddr} on:click={myFunction(item.AlbumID)} alt="Fuck Me" />
				<div class="albuminfo">
					<h3>{item.Album}</h3>
					<h4>{item.NumSongs} {item.NumSongs < 2 ? "song" : "songs"}</h4>
				</div>
			</div>
			<div id={item.AlbumID} class="w3-container w3-hide foo">
				{#each item.Songs as song}
				<div class="artboxflex">
					<h5>{song.title}</h5>
					<div class="artbtnflex">
						    <button on:click={loadsong(song.httpaddr, item.AlbumID)} >Play</button>
						<AddButton song={song}/>
					</div>
				</div>
				<hr />
				{/each}
				<button class="closebtn" on:click={myFunction(item.AlbumID)}>Close</button>
			</div>
			
			<hr />
		</li>
	{/each}
	<InfiniteScroll
		hasMore={newBatch.length}
		threshold={100}
		on:loadMore={() => {page++; fetchAlphaData()}} />
</ul>



<style>

    ul {
        display: flex;
        flex-direction: column;
        border-radius: 2px;
        width: 100%;
        max-width: 100%;
        max-height: 800px;
        overflow-x: scroll;
        list-style: none;
        padding: 0;
    }

	.closebtn {
		display: block;
		width: 50%;
		margin: auto;
		font-size: 1.1em;
	}

	.foo {
		background-image: linear-gradient(to left, rgba(148,0,211,0), rgba(255, 0, 0, .25), rgba(148,0,211,1));
		margin-top: 12px;
	}
	
	h3, h4, h5 {
		color: white;
	}

	.albuminfo {
		display: flex;
		flex-direction: column;
		padding: 10px;
	}

	.albumflexbox {
		display: flex;
		flex-direction: row;
		align-items: center
	}
	
	img {
		max-width: 175px;
		min-width: 135px;
		width: 30%;
		height: 30%;
		display: block;
	}

	hr {
		border: 0;
		border-top: 2px solid brown;
		width: 100%;
    }

	.artboxflex{
		display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

	}

	.artbtnflex {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	button {
		margin: 2px;
		width: 4em;
	}
	
</style>
