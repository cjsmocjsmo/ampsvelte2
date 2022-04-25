export async function deleteit(plid) {
    const res = await fetch(`http://192.168.0.90:9090/DeletePlayList?playlistid=${plid}`);
    playlists = await res.json();
    console.log(playlists)
}

export async function addPlaylist(name) {
    const res = await fetch(`http://192.168.0.90:9090/AddPlaylist?name=${name}`);
    playlists = await res.json();
    console.log(playlists)
};

export async function addRandomPlaylist(songcount, name) {
    const res = await fetch(`http://192.168.0.90:9090/AddRandomPlaylist?songcount=${songcount}&&name=${name}`);
    playlists = await res.json();
    console.log(playlists)
};

export async function deleteitsong(plid, songid) {
    const res = await fetch(`http://192.168.0.90:9090/DeleteSongFromPlaylist?playlistid=${plid}&&fileid=${songid}`);
    playlists = await res.json();
    console.log(playlists)
}