<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import PlayerControls from '$lib/player/singleplayercontrols.svelte';
	// import PlayListPlayerControls from '$lib/player/playlistplayercontrols.svelte';
	import PlayListPlayerControls2 from '$lib/player/playlistplayercontrols2.svelte';
	import { playPlayList } from '$lib/store/stores';

</script>


<Header />

<main>
	<slot />
</main>

<footer>
	{#if $playPlayList}
		<!-- <PlayListPlayerControls /> -->
		<PlayListPlayerControls2 />
	{:else}
		<PlayerControls />
	{/if}
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
		background-image: linear-gradient(to left, rgba(148,0,211,0), rgba(129, 36, 36, 0.25), rgba(148,0,211,1));
	}

	 /* footer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	} */
/*
	footer{
		font-weight: bold;
		width: 100%;
	} */

	/* @media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	} */
</style>
