<script>
	import Modal from '$lib/playlist/Modal.svelte';

	let showModal = false;
</script>

<button on:click="{() => showModal = true}">
	show modal
</button>

{#if showModal}
	<Modal on:close="{() => showModal = false}">

	</Modal>
{/if}
