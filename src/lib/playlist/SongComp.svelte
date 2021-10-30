<script>
    export let songs;
    export let playlistid;
    // export let songcount;

</script>


{#if songs != null}
    <div id={playlistid} class="playlistList w3-container w3-hide">
        {#each songs as song}
            <div class="playlistListBtn">
                <p>{song.title}</p>
                <button>Delete</button>
            </div>
            <hr />
        {/each}
    </div>
{:else}
    <div id={playlistid} >None Available</div>
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
        background-image: linear-gradient(to left, rgba(148,0,211,0), rgba(255, 0, 0, .25), rgba(148,0,211,1));
        /* background-color: lightskyblue; */
    }

</style>