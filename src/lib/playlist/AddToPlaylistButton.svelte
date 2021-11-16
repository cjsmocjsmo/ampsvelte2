<script>
    export let song;

    let resData;
    async function addSongToPlayList() {
        const res = await fetch(`http://192.168.0.91:9090/GetCurrentPlayListName`);
		const plname = await res.json();
        console.log(plname.curplaylistname)
        let url1 = 'http://192.168.0.91:9090/'
        let url2 = 'AddSongToPlaylist?fileid=' + song.fileID
        let url3 = '&playlistid=' + plname.curplaylistID
        let URL = url1 + url2 + url3
        console.log(URL)
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