<script>
	import { createEventDispatcher, onDestroy } from 'svelte';
    export let plist;

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
    console.log(plist[0])

</script>

<svelte:window on:keydown={handle_keydown}/>

<div class="modal-background" on:click={close}></div>

<div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
    
	<hr>
    <form>
        <p>Please select your preferred contact method</p>
        <div>
            <ol>
                {#each plist as pl}
                <li>
                    <input type="radio" id={pl.PlayListID} bind:group={selectedPlaylist}
                        name="contact" value={pl.PlayListID}>
                    <label for="Choice1">{pl.PlayListName}</label>
                </li>


                {/each}
            </ol>  
        </div>
        <div>
          <button type="submit" on:click={close}>Submit</button>
        </div>
      </form>
	<hr>
</div>

<style>
    hr {
        
        border-top: 1.5px solid rgb(231, 6, 25);
       
    }

    ol li{
        list-style-type: none;
        
    }

    label, p {
        font-size: large;
        color: black;
    }

	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.473);
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
		/* background: rgb(112, 8, 138); */
        background: rgba(142, 224, 48, 0.863);
	}

	button {
		display: block;
	}
</style>