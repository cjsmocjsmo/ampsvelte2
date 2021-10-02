<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	// import Playercontrols from'../lib/player/playercontrols.svelte'
	// let show = true;
	// const handleClick = () => {
	// 	if (show === true) {
	// 		show = false;
	// 	} else {
	// 		show = true;
	// 	}
	// }

</script>

<Header />

<audio 
	class="Audio1" 
	controls="" 
	style="width: 100%; margin-top: 10px" 
	src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
></audio>


<!-- <Playercontrols /> -->

<main>
	<slot />
</main>



<footer>
	
	<!-- <p>Possible player controls</p> -->
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
		background-image: linear-gradient(to right, rgba(148,0,211,0), rgba(255, 0, 0, .25), rgba(148,0,211,1));
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer{
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
