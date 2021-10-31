<script>
	import Modal from '$lib/playlist/Modal.svelte';
    import { onMount } from 'svelte';
	let showModal = false;

    let playlistList = '';
    onMount(async () => {
		const res = await fetch(`http://192.168.0.91:9090/AllPlaylists`);
		playlistList = await res.json();
        // console.log(playlistList)
	});


</script>

<button on:click="{() => showModal = true}">
	show modal
</button>

{#if showModal}
	<Modal on:close="{() => showModal = false}" plist={playlistList}>

	</Modal>
{/if}
