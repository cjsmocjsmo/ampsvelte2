<script>
    export let songz;
    export let playlistid;
    import DeleteButton from '$lib/playlist/DelFromPlaylistButton.svelte';
</script>

    <div id={playlistid} class="playlistList w3-container w3-hide">
        {#each songz as song}
            <div class="playlistListBtn">
                <p>{song.title}</p>
                <DeleteButton />
            </div>
            <hr />
        {/each}
    </div>

<style>
    p {
        font-size: 18px;
    }

    .playlistListBtn {
        display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
    }

    .playlistList {
        background-image: linear-gradient(to left, rgba(148,0,211,0), rgba(255, 0, 0, .25), rgba(148,0,211,1));
    }

</style>