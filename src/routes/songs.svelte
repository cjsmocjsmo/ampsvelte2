<script>
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

<h1>Songs</h1>

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
    <SongBcomp />
{:else if arse === "C"}
    <SongCcomp />
{:else if arse === "D"}
    <SongDcomp />
{:else if arse === "E"}
    <SongEcomp />
{:else if arse === "F"}
    <SongFcomp />
{:else if arse === "G"}
    <SongGcomp />
{:else if arse === "H"}
    <SongHcomp />
{:else if arse === "I"}
    <SongIcomp />
{:else if arse === "J"}
    <SongJcomp />
{:else if arse === "K"}
    <SongKcomp />
{:else if arse === "L"}
    <SongLcomp />
{:else if arse === "M"}
    <SongMcomp />
{:else if arse === "N"}
    <SongNcomp />
{:else if arse === "O"}
    <SongOcomp />
{:else if arse === "P"}
    <SongPcomp />
{:else if arse === "Q"}
    <SongQcomp />
{:else if arse === "R"}
    <SongRcomp />
{:else if arse === "S"}
    <SongScomp />
{:else if arse === "T"}
    <SongTcomp />
{:else if arse === "U"}
    <SongUcomp />
{:else if arse === "V"}
    <SongVcomp />
{:else if arse === "W"}
    <SongWcomp />
{:else if arse === "X"}
    <SongXcomp />
{:else if arse === "Y"}
    <SongYcomp />
{:else if arse === "Z"}
    <SongZcomp />
{:else}
    <SongAcomp />
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