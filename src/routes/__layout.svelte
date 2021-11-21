<script>
	import Header from '$lib/header/Header.svelte';
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
<!-- <audio 
	id="Audio1"
	class="Audio1" 
	controls="" 
	style="width: 65%; margin-top: 10px; margin-right: auto; margin-left: auto;" 
	src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
	on:ended={endsig}
	
></audio> -->

<!-- <p>hasPlayerEnded: {$hasPlayerEnded}</p> -->

<main>
	<slot />
</main>

<footer>
	
		<!-- <audio 
			id="Audio1" 
			class="Audio1" 
			on:ended={endsig}
			controls
			src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" >
		</audio> -->
	
	
	<!-- <Playercontrols /> -->
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
		background-image: linear-gradient(to left, rgba(148,0,211,0), rgba(255, 0, 0, .25), rgba(148,0,211,1));
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
