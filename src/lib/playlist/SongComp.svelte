<script>

    export let songs;
    // export let songcount;

</script>


{#if songs != null}
    <div class="playlistList">
        {#each songs as song}
            <div class="playlistListBtn">
                <p>{song.title}</p>
                <button>Delete</button>
            </div>
            <hr />
        {/each}
    </div>
{:else}
    <div>None Available</div>
{/if}


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
        background-color: lightskyblue;
    }

</style>