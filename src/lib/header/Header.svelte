<script>
	import { page } from '$app/stores';
	// import AudioControls from '$lib/player/Component.svelte';
	// import PlayListPlayer from '$lib/player/PlayListComp.svelte';
	// import { duration, playPlayList, showPlayButton } from '$lib/store/stores';
	// import  { playlistQueueStore } from '$lib/store/playerqueuestore';
	// import { get } from 'svelte/store';

</script>

<header>
	<div class="corner">
	</div>
	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/" style="color: black;">Artist</a></li>
			<li class:active={$page.path === '/album'}><a sveltekit:prefetch href="/album" style="color: black;">Ablum</a></li>
			<li class:active={$page.path === '/songs'}><a sveltekit:prefetch href="/songs" style="color: black;">Songs</a></li>
			<li class:active={$page.path === '/playlists'}><a sveltekit:prefetch href="/playlists" style="color: black;">PlayLists</a></li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>
	
	<div class="corner">
		
		<!-- TODO put something else here? github link? -->
	</div>
	
</header>

<style>

	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	nav {
		display: flex;
		justify-content: center;
		/* --background: rgba(255, 255, 255, 0.7); */
		--background: pink;
		
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
