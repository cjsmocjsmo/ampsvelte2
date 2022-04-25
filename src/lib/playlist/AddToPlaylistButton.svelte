<script>
    export let song;

    let resData;
    async function addSongToPlayList() {
        const res = await fetch(`http://192.168.0.90:9090/GetCurrentPlayListName`);
		const plname = await res.json();
        let url1 = 'http://192.168.0.90:9090/AddSongToPlaylist?fileid='
        let url2 =  song.fileID + '&playlistid=' + plname.curplaylistID
        let URL = url1 + url2
        const resz = await fetch(URL);
        resData = await resz.json();
    }
    
</script>

 <button on:click={addSongToPlayList} >Add</button>

<style>

	button {
        margin: 2px;
        width: 4em;
    }

</style>