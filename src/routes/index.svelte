<script >
	import SelectButton from '$lib/playlist/PlayListSelectButton.svelte';
	import ArtistAcomp from '$lib/artist/artistAcomp.svelte';
    import ArtistBcomp from '$lib/artist/artistBcomp.svelte';
    import ArtistCcomp from '$lib/artist/artistCcomp.svelte';
    import ArtistDcomp from '$lib/artist/artistDcomp.svelte';
    import ArtistEcomp from '$lib/artist/artistEcomp.svelte';
    import ArtistFcomp from '$lib/artist/artistFcomp.svelte';
    import ArtistGcomp from '$lib/artist/artistGcomp.svelte';
    import ArtistHcomp from '$lib/artist/artistHcomp.svelte';
    import ArtistIcomp from '$lib/artist/artistIcomp.svelte';
    import ArtistJcomp from '$lib/artist/artistJcomp.svelte';
    import ArtistKcomp from '$lib/artist/artistKcomp.svelte';
    import ArtistLcomp from '$lib/artist/artistLcomp.svelte';
    import ArtistMcomp from '$lib/artist/artistMcomp.svelte';
    import ArtistNcomp from '$lib/artist/artistNcomp.svelte';
    import ArtistOcomp from '$lib/artist/artistOcomp.svelte';
    import ArtistPcomp from '$lib/artist/artistPcomp.svelte';
    import ArtistQcomp from '$lib/artist/artistQcomp.svelte';
    import ArtistRcomp from '$lib/artist/artistRcomp.svelte';
    import ArtistScomp from '$lib/artist/artistScomp.svelte';
    import ArtistTcomp from '$lib/artist/artistTcomp.svelte';
    import ArtistUcomp from '$lib/artist/artistUcomp.svelte';
    import ArtistVcomp from '$lib/artist/artistVcomp.svelte';
    import ArtistWcomp from '$lib/artist/artistWcomp.svelte';
    import ArtistXcomp from '$lib/artist/artistXcomp.svelte';
    import ArtistYcomp from '$lib/artist/artistYcomp.svelte';
    import ArtistZcomp from '$lib/artist/artistZcomp.svelte';

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
	<title>Artists</title>
</svelte:head>

<h1>Artists</h1>
<SelectButton />
<button class="alphaBtn" on:click={setVisible} >Select A Catagory</button>
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
    <ArtistBcomp />
{:else if arse === "C"}
    <ArtistCcomp />
{:else if arse === "D"}
    <ArtistDcomp />
{:else if arse === "E"}
    <ArtistEcomp />
{:else if arse === "F"}
    <ArtistFcomp />
{:else if arse === "G"}
    <ArtistGcomp />
{:else if arse === "H"}
    <ArtistHcomp />
{:else if arse === "I"}
    <ArtistIcomp />
{:else if arse === "J"}
    <ArtistJcomp />
{:else if arse === "K"}
    <ArtistKcomp />
{:else if arse === "L"}
    <ArtistLcomp />
{:else if arse === "M"}
    <ArtistMcomp />
{:else if arse === "N"}
    <ArtistNcomp />
{:else if arse === "O"}
    <ArtistOcomp />
{:else if arse === "P"}
    <ArtistPcomp />
{:else if arse === "Q"}
    <ArtistQcomp />
{:else if arse === "R"}
    <ArtistRcomp />
{:else if arse === "S"}
    <ArtistScomp />
{:else if arse === "T"}
    <ArtistTcomp />
{:else if arse === "U"}
    <ArtistUcomp />
{:else if arse === "V"}
    <ArtistVcomp />
{:else if arse === "W"}
    <ArtistWcomp />
{:else if arse === "X"}
    <ArtistXcomp />
{:else if arse === "Y"}
    <ArtistYcomp />
{:else if arse === "Z"}
    <ArtistZcomp />
{:else}
    <ArtistAcomp />
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

</style>
