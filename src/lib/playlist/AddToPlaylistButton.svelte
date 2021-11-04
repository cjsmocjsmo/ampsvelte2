<script>
    import { currentPlayList } from '$lib/store/playliststore.js';
    export let song;

    let curPlayList;

    const unsubscribe = currentPlayList.subscribe(value => {
        curPlayList = value;
    });

    let resData;
    async function addSongToPlayList() {
        let url1 = 'http://192.168.0.91:9090/'
        let url2 = 'AddSongToPlaylist?fileid=' + song.fileID
        let url3 = '&playlistid=' + curPlayList.PlayListID
        let URL = url1 + url2 + url3
        const res = await fetch(URL);
        resData = await res.json();
    }
    // console.log("thisi is res data")
    // console.log(resData)
    
</script>

<button on:click={addSongToPlayList} >Add</button>

<style>

	button {
        margin: 2px;
        width: 4em;
    }

</style>