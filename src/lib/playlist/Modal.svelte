<script>
	import { createEventDispatcher, onDestroy } from 'svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let modal;

	const handle_keydown = e => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	};

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
    let selectedPlaylist = '';
    console.log(selectedPlaylist)
</script>

<svelte:window on:keydown={handle_keydown}/>

<div class="modal-background" on:click={close}></div>

<div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
    
	<hr>
    <form>
        <p>Please select your preferred contact method</p>
        <div>
            <ol>
                <li>
                    <input type="radio" id="contactChoice1" bind:group={selectedPlaylist}
                        name="contact" value="email">
                    <label for="Choice1">Email</label>
                </li>

                <li>
                    <input type="radio" id="contactChoice2" bind:group={selectedPlaylist}
                        name="contact" value="phone">
                    <label for="Choice2">Phone</label>
                </li>
                <li>
                    <input type="radio" id="contactChoice3" bind:group={selectedPlaylist}
                        name="contact" value="mail">
                    <label for="Choice3">Mail</label>
                </li>
            </ol>  
        </div>
        <div>
            <span>{selectedPlaylist}</span>
          <button type="submit" on:click={close}>Submit</button>
        </div>
      </form>
	<hr>

	<!-- svelte-ignore a11y-autofocus -->
	<!-- <button autofocus on:click={close}>close modal</button> -->
</div>

<style>
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
	}

	.modal {
		position: absolute;
		left: 50%;
		top: 50%;
		width: calc(100vw - 4em);
		max-width: 32em;
		max-height: calc(100vh - 4em);
		overflow: auto;
		transform: translate(-50%,-50%);
		padding: 1em;
		border-radius: 0.2em;
		background: white;
	}

	button {
		display: block;
	}
</style>