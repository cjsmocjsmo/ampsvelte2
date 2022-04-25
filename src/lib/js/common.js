export async function fetchArtistAlphaData(alpha) {
    const res = await fetch(`http://192.168.0.90:9090/ArtistAlpha?alpha=${alpha}`);
    let newBatch = await res.json();
    console.log(newBatch)
};

// export async function fetchAlbumAlphaData(alpha) {
//     const res = await fetch(`http://192.168.0.90:9090/AlbumAlpha?alpha=${alpha}`);
//     newAlbumBatch = await res.json();
//     console.log(newAlbumBatch)
// };

export async function fetchSongAlphaData(alpha) {
    const res = await fetch(`http://192.168.0.90:9090/SongAlpha?alpha=${alpha}`);
    let newBatch = await res.json();
    console.log(newBatch)
};

export function formatTime(secs) {
    let minutes = Math.floor(secs / 60) || 0;
    let seconds = (secs - minutes * 60) || 0;
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

export function myFunction(id) {
    let x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}