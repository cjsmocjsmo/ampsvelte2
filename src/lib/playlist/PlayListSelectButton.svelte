<script>

// need onMount for initial values
// need to setup store for selected value




	let questions = [
		{ id: 1, text: `Playlist` },
		{ id: 2, text: `mycool Playlist` },
		{ id: 3, text: `Another playlist` }
	];

	let selected;

	let answer = '';

	function handleSubmit() {
		alert(`answered question ${selected.id} (${selected.text}) with "${answer}"`);
	}
</script>

<!-- <h2>Insecurity questions</h2> -->

<form on:submit|preventDefault={handleSubmit}>
	<select bind:value={selected} on:change="{() => answer = ''}">
		{#each questions as question}
			<option value={question}>
				{question.text}
			</option>
		{/each}
	</select>

	<!-- <input bind:value={answer}> -->

	<!-- <button disabled={!answer} type=submit>
		Submit
	</button> -->
</form>

<p>selected playlist: {selected ? selected.text : '[waiting...]'}</p>

<style>
    form {
        text-align: right;
    }

    select {
        width: 225px;
        
    }
	/* select { display: block; width: 500px; max-width: 100%; } */
</style>