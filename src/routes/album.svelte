<script >
	// export const prerender = true;
	import { onMount } from 'svelte';
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
    import Settings from '$lib/album/AlbumSettingsComp.svelte';
    import { albumarse } from '$lib/store/stores';

    // import AlbumComp from '$lib/album/albumComp.svelte'

	// let isAlbumVisible = false
	// var setAlbumVisible = () => {
	// 	if (isAlbumVisible) {
	// 		isAlbumVisible = false
	// 	} else {
	// 		isAlbumVisible = true
	// 	}
	// }

	// let $albumarse = "A";

    // function set$albumArse(ar) {
    //     $albumarse = ar
    //     isAlbumVisible = false
    // }

    // let newBatch = []
    // async function fetchAlbumFirstLetter() {
	// 	const res = await fetch(`http://192.168.0.90:9090/AlbumFirstLetter`);
	// 	newBatch = await res.json();
    //     console.log(newBatch)
	// };
    // onMount(() => fetchAlbumFirstLetter())
</script>

<svelte:head>
	<title>Albums</title>
</svelte:head>


<Settings />

<!-- <div class="tooltip">
    <button class="alphaBtn" on:click={setAlbumVisible} >Settings</button>
    <span class="tooltiptext">Album Alphabeticaly</span>
</div> -->



<!-- {#if isAlbumVisible}
	<div class="maindiv">
		<div class="wrapit">
            {#each newBatch as NB1}
			    <p class="alpha" on:click={set$albumArse(NB1)}>{NB1}</p>
            {/each}
            
			<p class="alpha" on:click={set$albumArse("B")}>B</p>
			<p class="alpha" on:click={set$albumArse("C")}>C</p>
			<p class="alpha" on:click={set$albumArse("D")}>D</p>
			<p class="alpha" on:click={set$albumArse("E")}>E</p>
			<p class="alpha" on:click={set$albumArse("F")}>F</p>
			<p class="alpha" on:click={set$albumArse("G")}>G</p>
		</div>
		<div class="wrapit">
			<p class="alpha" on:click={set$albumArse("H")}>H</p>
			<p class="alpha" on:click={set$albumArse("I")}>I</p>
			<p class="alpha" on:click={set$albumArse("J")}>J</p>
			<p class="alpha" on:click={set$albumArse("K")}>K</p>
			<p class="alpha" on:click={set$albumArse("L")}>L</p>
			<p class="alpha" on:click={set$albumArse("M")}>M</p>
			<p class="alpha" on:click={set$albumArse("N")}>N</p>
		</div>
		<div class="wrapit">
			<p class="alpha" on:click={set$albumArse("O")}>O</p>
			<p class="alpha" on:click={set$albumArse("P")}>P</p>
			<p class="alpha" on:click={set$albumArse("Q")}>Q</p>
			<p class="alpha" on:click={set$albumArse("R")}>R</p>
			<p class="alpha" on:click={set$albumArse("S")}>S</p>
			<p class="alpha" on:click={set$albumArse("T")}>T</p>
			<p class="alpha" on:click={set$albumArse("U")}>U</p>
		</div>
		<div class="wrapit">
			<p class="alpha" on:click={set$albumArse("V")}>V</p>
			<p class="alpha" on:click={set$albumArse("W")}>W</p>
			<p class="alpha" on:click={set$albumArse("X")}>X</p>
			<p class="alpha" on:click={set$albumArse("Y")}>Y</p>
			<p class="alpha" on:click={set$albumArse("Z")}>Z</p>
		</div>
	</div>
    <SelectButton />
{/if} -->



{#if $albumarse === "B"}
   
    <AlbumBcomp />
{:else if $albumarse === "C"}
    <AlbumCcomp alpha=$albumarse />
{:else if $albumarse === "D"}
    <AlbumDcomp />
{:else if $albumarse === "E"}
    <AlbumEcomp />
{:else if $albumarse === "F"}
    <AlbumFcomp />
{:else if $albumarse === "G"}
    <AlbumGcomp />
{:else if $albumarse === "H"}
    <AlbumHcomp />
{:else if $albumarse === "I"}
    <AlbumIcomp />
{:else if $albumarse === "J"}
    <AlbumJcomp />
{:else if $albumarse === "K"}
    <AlbumKcomp />
{:else if $albumarse === "L"}
    <AlbumLcomp />
{:else if $albumarse === "M"}
    <AlbumMcomp />
{:else if $albumarse === "N"}
    <AlbumNcomp />
{:else if $albumarse === "O"}
    <AlbumOcomp />
{:else if $albumarse === "P"}
    <AlbumPcomp />
{:else if $albumarse === "Q"}
    <AlbumQcomp />
{:else if $albumarse === "R"}
    <AlbumRcomp />
{:else if $albumarse === "S"}
    <AlbumScomp />
{:else if $albumarse === "T"}
    <AlbumTcomp />
{:else if $albumarse === "U"}
    <AlbumUcomp />
{:else if $albumarse === "V"}
    <AlbumVcomp />
{:else if $albumarse === "W"}
    <AlbumWcomp />
{:else if $albumarse === "X"}
    <AlbumXcomp />
{:else if $albumarse === "Y"}
    <AlbumYcomp />
{:else if $albumarse === "Z"}
    <AlbumZcomp />
{:else}
    <AlbumAcomp />
{/if}


<style>
    /* .tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
    }

    .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 125%;
    left: 30%;
    
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
    }

    .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
    }

    .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
    } */

    /* .alphaBtn {
        width: 25%;
        font-size: .8em;
        background-color: pink;
        border-radius: 7px;
    }
	
	.alpha {
		display: block;
		border-radius: 50%;
		padding: 12px;
		background-color: rgb(45, 202, 24);
		width: 45px;
		text-align: center;

	}
	.wrapit {
		display: flex;
		flex-direction: row;
        flex-wrap: wrap;
		justify-content: space-evenly;
        background-color: red;
	}

	button {
		margin: 2px;
		width: 4em;
	} */
	
</style>

     <!-- let set$albumArseA = () => {
         $albumarse = "A"
         isAlbumVisible = false
     }
     let set$albumArseB = () => {
         $albumarse = "B"
         isAlbumVisible = false
     }
     let set$albumArseC = () => {
         $albumarse = "C"
         isAlbumVisible = false
     }
     let set$albumArseD = () => {
         $albumarse = "D"
         isAlbumVisible = false
     }
     let set$albumArseE = () => {
         $albumarse = "E"
         isAlbumVisible = false
     }
     let set$albumArseF = () => {
         $albumarse = "F"
         isAlbumVisible = false
     }
     let set$albumArseG = () => {
         $albumarse = "G"
         isAlbumVisible = false
     }
     let set$albumArseH = () => {
         $albumarse = "H"
         isAlbumVisible = false
     } 
     let set$albumArseI = () => {
         $albumarse = "I"
         isAlbumVisible = false
     }     
     let set$albumArseJ = () => {
         $albumarse = "J"
         isAlbumVisible = false
     }     
     let set$albumArseK = () => {
         $albumarse = "K"
         isAlbumVisible = false
     } 
     let set$albumArseL = () => {
         $albumarse = "L"
         isAlbumVisible = false
     } 
     let set$albumArseM = () => {
         $albumarse = "M"
         isAlbumVisible = false
     } 
     let set$albumArseN = () => {
         $albumarse = "N"
         isAlbumVisible = false
     } 
     let set$albumArseO = () => {
         $albumarse = "O"
         isAlbumVisible = false
     } 
     let set$albumArseP = () => {
         $albumarse = "P"
         isAlbumVisible = false
     } 
     let set$albumArseQ = () => {
         $albumarse = "Q"
         isAlbumVisible = false
     } 
     let set$albumArseR = () => {
         $albumarse = "R"
         isAlbumVisible = false
     } 
     let set$albumArseS = () => {
         $albumarse = "S"
         isAlbumVisible = false
     } 
     let set$albumArseT = () => {
         $albumarse = "T"
         isAlbumVisible = false
     } 
     let set$albumArseU = () => {
         $albumarse = "U"
         isAlbumVisible = false
     } 
     let set$albumArseV = () => {
         $albumarse = "V"
         isAlbumVisible = false
     } 
     let set$albumArseW = () => {
         $albumarse = "W"
         isAlbumVisible = false
     } 
     let set$albumArseX = () => {
         $albumarse = "X"
         isAlbumVisible = false
     } 
     let set$albumArseY = () => {
         $albumarse = "Y"
         isAlbumVisible = false
     } 
     let set$albumArseZ = () => {
         $albumarse = "Z"
         isAlbumVisible = false
     } -->