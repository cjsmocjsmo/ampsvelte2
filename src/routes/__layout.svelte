<script>
	import Header from '$lib/header/Header.svelte';
	import PlayListComp from '$lib/player/PlayListComp.svelte';
	import PlaylerControls from '$lib/player/playercontrols.svelte';
	import '../app.css';
	// import Playercontrols from'../lib/player/playercontrols.svelte';

	// import{ hasPlayerEnded } from '$lib/store/stores';
	// import { get } from 'svelte/store';



	let endsig = () => {
		const aud1 = document.getElementsByClassName("Audio1")[0]
		aud1.setAttribute("src", "")
	}

</script>


<Header />
<!-- <PlaylerControls /> -->

<main>
	<slot />
</main>

<footer>
	
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

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* padding: 10px; */
	}

	footer{
		font-weight: bold;
		width: 100%;
	}

	/* @media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	} */
</style>
