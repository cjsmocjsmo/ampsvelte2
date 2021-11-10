<script>
	// import { onMount } from 'svelte';
    import SelectButton from '$lib/playlist/PlayListSelectButton.svelte';
    import SongAcomp from '$lib/song/songAcomp.svelte';
    import SongBcomp from '$lib/song/songBcomp.svelte';
    import SongCcomp from '$lib/song/songCcomp.svelte';
    import SongDcomp from '$lib/song/songDcomp.svelte';

    let newBatch = [];
    let arse = "";
    
    let setArseA = () => {
        arse = "A"
        console.log(arse)
    }
    let setArseB = () => {
        arse = "B"
    }
    let setArseC = () => {
        arse = "C"
    }
    let setArseD = () => {
        arse = "D"
    }
    
    console.log(arse)
    let isVisible = false
	var setVisible = () => {
		if (isVisible) {
			isVisible = false
		} else {
			isVisible = true
		}
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
			<!-- <p class="alpha" on:click={getAlphaInfoE}>E</p>
			<p class="alpha" on:click={getAlphaInfoF}>F</p>
			<p class="alpha" on:click={getAlphaInfoG}>G</p> -->
		</div>
		<!-- <div class="wrapit">
			<p class="alpha" on:click={getAlphaInfo("H")}>H</p>
			<p class="alpha" on:click={getAlphaInfo("I")}>I</p>
			<p class="alpha" on:click={getAlphaInfo("J")}>J</p>
			<p class="alpha" on:click={getAlphaInfo("K")}>K</p>
			<p class="alpha" on:click={getAlphaInfo("L")}>L</p>
			<p class="alpha" on:click={getAlphaInfo("M")}>M</p>
            <p class="alpha" on:click={getAlphaInfo("N")}>N</p>
        </div>
		<div class="wrapit">
			<p class="alpha" on:click={getAlphaInfo("O")}>O</p>
			<p class="alpha" on:click={getAlphaInfo("P")}>P</p>
			<p class="alpha" on:click={getAlphaInfo("Q")}>Q</p>
            <p class="alpha" on:click={getAlphaInfo("R")}>R</p>
            <p class="alpha" on:click={getAlphaInfo("S")}>S</p>
            <p class="alpha" on:click={getAlphaInfo("T")}>T</p>
			<p class="alpha" on:click={getAlphaInfo("U")}>U</p>
		</div>

		<div class="wrapit"> 
			<p class="alpha" on:click={getAlphaInfo("V")}>V</p>
            <p class="alpha" on:click={getAlphaInfo("W")}>W</p>
			<p class="alpha" on:click={getAlphaInfo("X")}>X</p>
            <p class="alpha" on:click={getAlphaInfo("Y")}>Y</p>
			<p class="alpha" on:click={getAlphaInfo("Z")}>Z</p>
		</div> -->
	</div>
    {#if arse === "B"}
        <SongBcomp newBatch={newBatch} />
    {:else if arse === "C"}
        <SongCcomp newBatch={newBatch} />
    {:else if arse === "D"}
        <SongDcomp newBatch={newBatch} />
    {:else}
        <SongAcomp newBatch={newBatch} />
    {/if}
{/if}

<style>

    .alphaBtn {
        width: 25%;
        font-size: 1.25em;
        background-color: pink;
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