<script>
    import { currentPlayList } from '$lib/store/playliststore.js';
    export let song;

    let curPlayList;

    const unsubscribe = currentPlayList.subscribe(value => {
        curPlayList = value;
    });

    let resData;
    async function addSongToPlayList() {
        console.log(curPlayList.PlayListID)
        if (typeof curPlayList.PlayListID != "string") {
            {alert("Select A Playlist")}
        } else {
            let url1 = 'http://192.168.0.91:9090/'
            let url2 = 'AddSongToPlaylist?fileid=' + song.fileID
            let url3 = '&playlistid=' + curPlayList.PlayListID
            let URL = url1 + url2 + url3
            console.log(URL)
            const res = await fetch(URL);
            resData = await res.json();
        }
    }
    
</script>



    



    <button on:click={addSongToPlayList} >Add</button>



<style>

	button {
        margin: 2px;
        width: 4em;
    }

</style>