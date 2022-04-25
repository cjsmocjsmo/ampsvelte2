<script >
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
    import Settings from '$lib/artist/ArtistSettingsComp.svelte';
    import {artistarse} from '$lib/store/stores';

    let src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
</script>

<svelte:head>
	<title>Artists</title>
</svelte:head>

<Settings />

<!-- <Player {src} /> -->




{#if $artistarse === "B"}
    <ArtistBcomp />
{:else if $artistarse === "C"}
    <ArtistCcomp />
{:else if $artistarse === "D"}
    <ArtistDcomp />
{:else if $artistarse === "E"}
    <ArtistEcomp />
{:else if $artistarse === "F"}
    <ArtistFcomp />
{:else if $artistarse === "G"}
    <ArtistGcomp />
{:else if $artistarse === "H"}
    <ArtistHcomp />
{:else if $artistarse === "I"}
    <ArtistIcomp />
{:else if $artistarse === "J"}
    <ArtistJcomp />
{:else if $artistarse === "K"}
    <ArtistKcomp />
{:else if $artistarse === "L"}
    <ArtistLcomp />
{:else if $artistarse === "M"}
    <ArtistMcomp />
{:else if $artistarse === "N"}
    <ArtistNcomp />
{:else if $artistarse === "O"}
    <ArtistOcomp />
{:else if $artistarse === "P"}
    <ArtistPcomp />
{:else if $artistarse === "Q"}
    <ArtistQcomp />
{:else if $artistarse === "R"}
    <ArtistRcomp />
{:else if $artistarse === "S"}
    <ArtistScomp />
{:else if $artistarse === "T"}
    <ArtistTcomp />
{:else if $artistarse === "U"}
    <ArtistUcomp />
{:else if $artistarse === "V"}
    <ArtistVcomp />
{:else if $artistarse === "W"}
    <ArtistWcomp />
{:else if $artistarse === "X"}
    <ArtistXcomp />
{:else if $artistarse === "Y"}
    <ArtistYcomp />
{:else if $artistarse === "Z"}
    <ArtistZcomp />
{:else}
    <ArtistAcomp />
{/if}

