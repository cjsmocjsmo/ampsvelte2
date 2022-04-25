<script>
    import { onMount } from 'svelte';
    import SelectButton from '$lib/playlist/PlayListSelectButton.svelte';
    import SongAcomp from '$lib/song/songAcomp.svelte';
    import SongBcomp from '$lib/song/songBcomp.svelte';
    import SongCcomp from '$lib/song/songCcomp.svelte';
    import SongDcomp from '$lib/song/songDcomp.svelte';
    import SongEcomp from '$lib/song/songEcomp.svelte';
    import SongFcomp from '$lib/song/songFcomp.svelte';
    import SongGcomp from '$lib/song/songGcomp.svelte';
    import SongHcomp from '$lib/song/songHcomp.svelte';
    import SongIcomp from '$lib/song/songIcomp.svelte';
    import SongJcomp from '$lib/song/songJcomp.svelte';
    import SongKcomp from '$lib/song/songKcomp.svelte';
    import SongLcomp from '$lib/song/songLcomp.svelte';
    import SongMcomp from '$lib/song/songMcomp.svelte';
    import SongNcomp from '$lib/song/songNcomp.svelte';
    import SongOcomp from '$lib/song/songOcomp.svelte';
    import SongPcomp from '$lib/song/songPcomp.svelte';
    import SongQcomp from '$lib/song/songQcomp.svelte';
    import SongRcomp from '$lib/song/songRcomp.svelte';
    import SongScomp from '$lib/song/songScomp.svelte';
    import SongTcomp from '$lib/song/songTcomp.svelte';
    import SongUcomp from '$lib/song/songUcomp.svelte';
    import SongVcomp from '$lib/song/songVcomp.svelte';
    import SongWcomp from '$lib/song/songWcomp.svelte';
    import SongXcomp from '$lib/song/songXcomp.svelte';
    import SongYcomp from '$lib/song/songYcomp.svelte';
    import SongZcomp from '$lib/song/songZcomp.svelte';
    import Settings from '$lib/song/SongSettingsComp.svelte';
    import { songarse } from '$lib/store/stores';

    // let isSongVisible = false
	// var setSongVisible = () => {
	// 	if (isSongVisible) {
	// 		isSongVisible = false
	// 	} else {
	// 		isSongVisible = true
	// 	}
	// }

    // let $songarse = "";
    // function set$songArse(ar) {
    //     $songarse = ar
    //     isSongVisible = false
    // }

    // let newBatch = []
    // async function fetchSongFirstLetter() {
	// 	const res = await fetch(`http://192.168.0.90:9090/SongFirstLetter`);
	// 	newBatch = await res.json();
    //     console.log(newBatch)
	// };
    // onMount(() => fetchSongFirstLetter())



</script>

<svelte:head>
	<title>Songs</title>
</svelte:head>

<Settings />

<!-- <button class="alphaBtn" on:click={setSongVisible} >Settings</button> -->

<!-- {#if isSongVisible}
	<div class="maindiv">
		<div class="wrapit">
           
            <p class="alpha" on:click={set$songArseB}>B</p>
			<p class="alpha" on:click={set$songArseB}>B</p>
			<p class="alpha" on:click={set$songArseC}>C</p>
			<p class="alpha" on:click={set$songArseD}>D</p>
			<p class="alpha" on:click={set$songArseE}>E</p>
			<p class="alpha" on:click={set$songArseF}>F</p>
			<p class="alpha" on:click={set$songArseG}>G</p>
		</div>
		<div class="wrapit">
			<p class="alpha" on:click={set$songArseH}>H</p>
			<p class="alpha" on:click={set$songArseI}>I</p>
			<p class="alpha" on:click={set$songArseJ}>J</p>
			<p class="alpha" on:click={set$songArseK}>K</p>
			<p class="alpha" on:click={set$songArseL}>L</p>
			<p class="alpha" on:click={set$songArseM}>M</p>
            <p class="alpha" on:click={set$songArseN}>N</p>
        </div>
		<div class="wrapit">
			<p class="alpha" on:click={set$songArseO}>O</p>
			<p class="alpha" on:click={set$songArseP}>P</p>
			<p class="alpha" on:click={set$songArseQ}>Q</p>
            <p class="alpha" on:click={set$songArseR}>R</p>
            <p class="alpha" on:click={set$songArseS}>S</p>
            <p class="alpha" on:click={set$songArseT}>T</p>
			<p class="alpha" on:click={set$songArseU}>U</p>
		</div>

		<div class="wrapit">
			<p class="alpha" on:click={set$songArseV}>V</p>
            <p class="alpha" on:click={set$songArseW}>W</p>
			<p class="alpha" on:click={set$songArseX}>X</p>
            <p class="alpha" on:click={set$songArseY}>Y</p>
			<p class="alpha" on:click={set$songArseZ}>Z</p>
		</div>
	</div>
    <SelectButton />
{/if} -->

{#if $songarse === "B"}
    <SongBcomp />
{:else if $songarse === "C"}
    <SongCcomp />
{:else if $songarse === "D"}
    <SongDcomp />
{:else if $songarse === "E"}
    <SongEcomp />
{:else if $songarse === "F"}
    <SongFcomp />
{:else if $songarse === "G"}
    <SongGcomp />
{:else if $songarse === "H"}
    <SongHcomp />
{:else if $songarse === "I"}
    <SongIcomp />
{:else if $songarse === "J"}
    <SongJcomp />
{:else if $songarse === "K"}
    <SongKcomp />
{:else if $songarse === "L"}
    <SongLcomp />
{:else if $songarse === "M"}
    <SongMcomp />
{:else if $songarse === "N"}
    <SongNcomp />
{:else if $songarse === "O"}
    <SongOcomp />
{:else if $songarse === "P"}
    <SongPcomp />
{:else if $songarse === "Q"}
    <SongQcomp />
{:else if $songarse === "R"}
    <SongRcomp />
{:else if $songarse === "S"}
    <SongScomp />
{:else if $songarse === "T"}
    <SongTcomp />
{:else if $songarse === "U"}
    <SongUcomp />
{:else if $songarse === "V"}
    <SongVcomp />
{:else if $songarse === "W"}
    <SongWcomp />
{:else if $songarse === "X"}
    <SongXcomp />
{:else if $songarse === "Y"}
    <SongYcomp />
{:else if $songarse === "Z"}
    <SongZcomp />
{:else}
    <SongAcomp />
{/if}



