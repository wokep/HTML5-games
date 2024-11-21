let audioPlayer = document.getElementById('audioPlayer');
let currentSongElement = document.getElementById('currentSong');
let songQueue = [];
let isPlaying = false;

// Function to play a song
function playSong(songUrl) {
    if (audioPlayer.src !== songUrl || !isPlaying) {
        audioPlayer.src = songUrl;
        audioPlayer.play();
        currentSongElement.textContent = songUrl.split('/').pop().replace('%20', ' ').replace('.mp3', '');
        isPlaying = true;
    } else {
        audioPlayer.pause();
        isPlaying = false;
        currentSongElement.textContent = 'Paused';
    }
}

// Function to add a song to the queue
function queueSong(songUrl) {
    if (!songQueue.includes(songUrl)) {
        songQueue.push(songUrl);
        alert(`Song "${songUrl.split('/').pop().replace('%20', ' ')}" added to the queue!`);
    } else {
        alert("This song is already in the queue.");
    }
}

// Automatically play next song in queue when the current song ends
audioPlayer.addEventListener('ended', () => {
    if (songQueue.length > 0) {
        playSong(songQueue.shift());
    }
});
