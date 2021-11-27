<svelte:options accessors/>

<script>
    import { onMount } from 'svelte';
    // import { createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition';
    // import { spring } from 'svelte/motion';
    import { src, pausedValuePlayer2, playPlayList, playPlayListID } from '$lib/store/stores';
    // import  { playlistQueueStore } from '$lib/store/playerqueuestore';
    
    export let paused = true;
    export let duration = 0;
    pausedValuePlayer2.set(true)

    export let audio = null;
    export let preload = "metadata";
    export let iconColor = "gray";
    export let textColor = "gray";
    export let barPrimaryColor = "red";
    export let barSecondaryColor = "blue";
    export let backgroundColor = "white";
    export let display = false;
    export let inlineTooltip = false;
    export let disableTooltip = false;

    // const dispatch = createEventDispatcher();
    let currentTime = 0;
    let tooltip;
    let tooltipX = 0;
    let tooltipY = 0;
    let showTooltip = false;
    let seekText = "";
    let seeking = false;
    let songBar;

    console.log($playPlayListID)
    onMount(() => PlayPlayList($playPlayListID))

    export function hide() {
        display = false;
    }

    export function show() {
        display = true;
    }

    function seek(event, bounds) {
        let x = event.pageX - bounds.left;
        return Math.min(Math.max(x / bounds.width, 0), 1);
    }

    function seekAudio(event) {
        if (!songBar) return;
        audio.currentTime = seek(event, songBar.getBoundingClientRect()) * duration;
    }

    function formatSeconds(seconds) {
		if (isNaN(seconds)) return "No Data";
		var sec_num = parseInt(seconds, 10)
		var hours   = Math.floor(sec_num / 3600)
		var minutes = Math.floor(sec_num / 60) % 60
		var seconds = sec_num % 60

		return [hours,minutes,seconds]
			.map(v => v < 10 ? "0" + v : v)
			.filter((v,i) => v !== "00" || i > 0)
			.join(":")
    }

    function seekTooltip(event) {
        if (!inlineTooltip) {
            let tooltipBounds = tooltip.getBoundingClientRect();
            tooltipX = event.pageX - tooltipBounds.width - 10;
            tooltipY = songBar.offsetTop + 10;
        }
        let bounds = songBar.getBoundingClientRect();
        let seekValue = (event.pageX - bounds.left) * duration / bounds.width;
        seekText = formatSeconds(seekValue);
    }

    function trackMouse(event) {
        if (seeking) seekAudio(event);
        if (showTooltip && !disableTooltip) seekTooltip(event);
        // if (volumeSeeking) seekVolume(event);
    }


    


    let playlistSongs = [];

	async function fetchPlaylist(plidd) {
		const resp = await fetch(`http://192.168.0.91:9090/PlayListByID?playlistid=${plidd}`)
		const plist = await resp.json();
        console.log(plist.PlayList)
        plist.PlayList.forEach(element => { playlistSongs.push(element.httpaddr)})
        console.log(playlistSongs)
        playlistSongs.forEach(song => {
                console.log(song)
                if (paused) {
                    src.set(song)
                    audio.play()
                    paused = false
                } else {
                    songEnded()
                }
            })
        // console.log(plist)
		// plist.PlayList.forEach(element => { console.log(element.httpaddr); playlistQueueStore.add(element.httpaddr) })
		// playPlayList.set(true)
	}

    function songEnded() {
        src.set("")
        paused = true
    }
    
    function playlistEnded() {
        if (playlistSongs.length < 1) {
            playlistSongs = []
            src.set("")
            paused = true
            audio = null
            playPlayList.set(false)
        }
    }

    function PlayPlayList(PLID) {
        if ( PLID != "") {
            fetchPlaylist(PLID)
        }
        console.log(playlistSongs.length)
        if ( playlistSongs.length != 0 ) {
            // playlistSongs.forEach(song => {
            //     console.log(song)
            //     if (paused) {
            //         audio.play(song)
            //         paused = false
            //     } else {
            //         songEnded()
            //     }
            // })
        // } else {
            playlistEnded()
        }
    }

    

</script>

<svelte:window
    on:mouseup={() => seeking = false}
    on:mousemove={trackMouse}
/>

<!-- <svelte:window
    on:mouseup={() => seeking = volumeSeeking = false}
    on:mousemove={trackMouse}
/> -->

{#if display}
    <div class="controls" style="--color:{textColor}; --background-color:{backgroundColor}">
        
        <button
            class="material-icons"
            style="--icon-color:{iconColor}"
            on:click={() => audio.paused ? audio.play() : audio.pause()}>
            {#if paused}
                <svg id="playarrow" xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="red" class="bi bi-play-fill" viewBox="0 0 20 20">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                </svg>
                <!-- play_arrow -->
            {:else}
                <svg id="pause" xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="red" class="bi bi-pause" viewBox="0 0 20 20">
                    <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                </svg>
                <!-- pause -->
            {/if}
        </button>
        <progress
            bind:this={songBar}
            value={currentTime ? currentTime : 0}
            max={duration}
            on:mousedown={() => seeking = true}
            on:mouseenter={() => showTooltip = true}
            on:mouseleave={() => showTooltip = false}
            on:click={seekAudio}
            style="--primary-color:{barPrimaryColor}; --secondary-color:{barSecondaryColor}"
            
            class="song-progress"
        ></progress>
        
        <div class="control-times">{formatSeconds(currentTime)}/{formatSeconds(duration)}</div>
 



        {#if !disableTooltip && (inlineTooltip || showTooltip)}
            <div
                class:hover-tooltip={!inlineTooltip}
                transition:fade
                bind:this={tooltip}
                class="tooltip"
                style="--left:{tooltipX}px;
                --top:{tooltipY}px;
                --background-color:{backgroundColor};
                --box-color:{barSecondaryColor};
                --text-color:{textColor}">
                {#if showTooltip}
                    {seekText}
                {:else}
                    {#if duration > 3600}
                        --:--:--
                    {:else}
                        --:--
                    {/if}
                {/if}
            </div>
        {/if}
        <svg id="previous" xmlns="http://www.w3.org/2000/svg" width="62" height="62" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
        </svg>
        <svg id="add" xmlns="http://www.w3.org/2000/svg" width="62" height="62" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
    </div>
{/if}

<audio
    class="Audio1"
    id="Audio1"
    autoplay="true"
	bind:this={audio}
	bind:paused
	bind:duration
    bind:currentTime
	on:play
	on:ended={songEnded}
	src={$src}
	{preload}
    
></audio>







<style>
    .controls {
        display: flex;
        flex-flow: row;
        justify-content: space-around;
        /* color: var(--color); */
        color: white;
        /* background-color: var(--background-color); */
        background-image: linear-gradient(to left, rgba(148,0,211,0), rgba(133, 118, 118, 0.25), rgba(148,0,211,1)); 
        padding-left: 10px;
        padding-right: 10px;
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10+ and Edge */
        user-select: none; /* Standard syntax */
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .control-times {
        margin: auto;
        margin-right: 5px;
    }

    .material-icons {
        font-size: 32px;
        margin-bottom: 0px;
        color: var(--icon-color);
        background-color: rgba(0,0,0,0);
        cursor: pointer;
        transition: 0.3s;
        border: none;
        border-radius:38px;
    }

    progress {
		display: block;
        color: var(--primary-color);
        background: var(--secondary-color);
        border: none;
        height: 15px;
        margin: auto;
        margin-left: 5px;
        margin-right: 5px
    }
    
    progress::-webkit-progress-bar {background-color: var(--secondary-color); width: 100%}

    progress::-moz-progress-bar { background: var(--primary-color); }

    progress::-webkit-progress-value { background: var(--primary-color); }

    .song-progress {
        width: 100%;
    }
</style>