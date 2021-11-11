<script >
	// export const prerender = true;
	// import { onMount } from 'svelte';
	// import InfiniteScroll from "svelte-infinite-scroll";
	import SelectButton from '$lib/playlist/PlayListSelectButton.svelte';
    import AlbumAcomp from '$lib/album/albumAcomp.svelte';
    import AlbumBcomp from '$lib/album/albumBcomp.svelte';
    import AlbumCcomp from '$lib/album/albumCcomp.svelte';
    import AlbumDcomp from '$lib/album/albumDcomp.svelte';
    import AlbumEcomp from '$lib/album/albumEcomp.svelte';
    import AlbumFcomp from '$lib/album/albumFcomp.svelte';
    import AlbumGcomp from '$lib/album/albumGcomp.svelte';
    import AlbumHcomp from '$lib/album/albumHcomp.svelte';
    import AlbumIcomp from '$lib/album/albumIcomp.svelte';
    import AlbumJcomp from '$lib/album/albumJcomp.svelte';
    import AlbumKcomp from '$lib/album/albumKcomp.svelte';
    import AlbumLcomp from '$lib/album/albumLcomp.svelte';
    import AlbumMcomp from '$lib/album/albumMcomp.svelte';
    import AlbumNcomp from '$lib/album/albumNcomp.svelte';
    import AlbumOcomp from '$lib/album/albumOcomp.svelte';
    import AlbumPcomp from '$lib/album/albumPcomp.svelte';
    import AlbumQcomp from '$lib/album/albumQcomp.svelte';
    import AlbumRcomp from '$lib/album/albumRcomp.svelte';
    import AlbumScomp from '$lib/album/albumScomp.svelte';
    import AlbumTcomp from '$lib/album/albumTcomp.svelte';
    import AlbumUcomp from '$lib/album/albumUcomp.svelte';
    import AlbumVcomp from '$lib/album/albumVcomp.svelte';
    import AlbumWcomp from '$lib/album/albumWcomp.svelte';
    import AlbumXcomp from '$lib/album/albumXcomp.svelte';
    import AlbumYcomp from '$lib/album/albumYcomp.svelte';
    import AlbumZcomp from '$lib/album/albumZcomp.svelte';

	let isVisible = false
	var setVisible = () => {
		if (isVisible) {
			isVisible = false
		} else {
			isVisible = true
		}
	}

	let arse = "";
    let setArseA = () => {
        arse = "A"
        isVisible = false
    }
    let setArseB = () => {
        arse = "B"
        isVisible = false
    }
    let setArseC = () => {
        arse = "C"
        isVisible = false
    }
    let setArseD = () => {
        arse = "D"
        isVisible = false
    }
    let setArseE = () => {
        arse = "E"
        isVisible = false
    }
    let setArseF = () => {
        arse = "F"
        isVisible = false
    }
    let setArseG = () => {
        arse = "G"
        isVisible = false
    }
    let setArseH = () => {
        arse = "H"
        isVisible = false
    } 
    let setArseI = () => {
        arse = "I"
        isVisible = false
    }     
    let setArseJ = () => {
        arse = "J"
        isVisible = false
    }     
    let setArseK = () => {
        arse = "K"
        isVisible = false
    } 
    let setArseL = () => {
        arse = "L"
        isVisible = false
    } 
    let setArseM = () => {
        arse = "M"
        isVisible = false
    } 
    let setArseN = () => {
        arse = "N"
        isVisible = false
    } 
    let setArseO = () => {
        arse = "O"
        isVisible = false
    } 
    let setArseP = () => {
        arse = "P"
        isVisible = false
    } 
    let setArseQ = () => {
        arse = "Q"
        isVisible = false
    } 
    let setArseR = () => {
        arse = "R"
        isVisible = false
    } 
    let setArseS = () => {
        arse = "S"
        isVisible = false
    } 
    let setArseT = () => {
        arse = "T"
        isVisible = false
    } 
    let setArseU = () => {
        arse = "U"
        isVisible = false
    } 
    let setArseV = () => {
        arse = "V"
        isVisible = false
    } 
    let setArseW = () => {
        arse = "W"
        isVisible = false
    } 
    let setArseX = () => {
        arse = "X"
        isVisible = false
    } 
    let setArseY = () => {
        arse = "Y"
        isVisible = false
    } 
    let setArseZ = () => {
        arse = "Z"
        isVisible = false
    }

</script>

<svelte:head>
	<title>Albums</title>
</svelte:head>

<SelectButton />

<button class="alphaBtn" on:click={setVisible} >Album Select</button>

{#if isVisible}
	<div class="maindiv">
		<div class="wrapit">
			<p class="alpha" on:click={setArseA}>A</p>
			<p class="alpha" on:click={setArseB}>B</p>
			<p class="alpha" on:click={setArseC}>C</p>
			<p class="alpha" on:click={setArseD}>D</p>
			<p class="alpha" on:click={setArseE}>E</p>
			<p class="alpha" on:click={setArseF}>F</p>
			<p class="alpha" on:click={setArseG}>G</p>
		</div>
		<div class="wrapit">
			<p class="alpha" on:click={setArseH}>H</p>
			<p class="alpha" on:click={setArseI}>I</p>
			<p class="alpha" on:click={setArseJ}>J</p>
			<p class="alpha" on:click={setArseK}>K</p>
			<p class="alpha" on:click={setArseL}>L</p>
			<p class="alpha" on:click={setArseM}>M</p>
			<p class="alpha" on:click={setArseN}>N</p>
		</div>
		<div class="wrapit">
			<p class="alpha" on:click={setArseO}>O</p>
			<p class="alpha" on:click={setArseP}>P</p>
			<p class="alpha" on:click={setArseQ}>Q</p>
			<p class="alpha" on:click={setArseR}>R</p>
			<p class="alpha" on:click={setArseS}>S</p>
			<p class="alpha" on:click={setArseT}>T</p>
			<p class="alpha" on:click={setArseU}>U</p>
		</div>
		<div class="wrapit">
			<p class="alpha" on:click={setArseV}>V</p>
			<p class="alpha" on:click={setArseW}>W</p>
			<p class="alpha" on:click={setArseX}>X</p>
			<p class="alpha" on:click={setArseY}>Y</p>
			<p class="alpha" on:click={setArseZ}>Z</p>
		</div>
	</div>
{/if}

{#if arse === "B"}
    <AlbumBcomp />
{:else if arse === "C"}
    <AlbumCcomp />
{:else if arse === "D"}
    <AlbumDcomp />
{:else if arse === "E"}
    <AlbumEcomp />
{:else if arse === "F"}
    <AlbumFcomp />
{:else if arse === "G"}
    <AlbumGcomp />
{:else if arse === "H"}
    <AlbumHcomp />
{:else if arse === "I"}
    <AlbumIcomp />
{:else if arse === "J"}
    <AlbumJcomp />
{:else if arse === "K"}
    <AlbumKcomp />
{:else if arse === "L"}
    <AlbumLcomp />
{:else if arse === "M"}
    <AlbumMcomp />
{:else if arse === "N"}
    <AlbumNcomp />
{:else if arse === "O"}
    <AlbumOcomp />
{:else if arse === "P"}
    <AlbumPcomp />
{:else if arse === "Q"}
    <AlbumQcomp />
{:else if arse === "R"}
    <AlbumRcomp />
{:else if arse === "S"}
    <AlbumScomp />
{:else if arse === "T"}
    <AlbumTcomp />
{:else if arse === "U"}
    <AlbumUcomp />
{:else if arse === "V"}
    <AlbumVcomp />
{:else if arse === "W"}
    <AlbumWcomp />
{:else if arse === "X"}
    <AlbumXcomp />
{:else if arse === "Y"}
    <AlbumYcomp />
{:else if arse === "Z"}
    <AlbumZcomp />
{:else}
    <AlbumAcomp />
{/if}

<style>

    .alphaBtn {
        width: 50%;
        font-size: 1.25em;
        background-color: pink;
        border-radius: 7px;
    }
	
	.alpha {
		display: block;
		border-radius: 50%;
		padding: 12px;
		background-color: rgb(45, 202, 24);
		width: 45px;
		height: 45px;
		text-align: center;

	}
	.wrapit {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}

	button {
		margin: 2px;
		width: 4em;
	}
	
</style>
