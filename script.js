// JavaScript to handle the play functionality

// Get all the play buttons
const playButtons = document.querySelectorAll('.play-button');
const audioElement = document.getElementById('audio-player');
const nowPlayingText = document.getElementById('nowPlayingText');
let isLooping = false;

// Function to handle song play
function playSong(songUrl, songName) {
    if (audioElement.src !== songUrl) {
        audioElement.src = songUrl;
        audioElement.play();
        nowPlayingText.innerText = `Now Playing: ${songName}`;
    } else if (audioElement.paused) {
        audioElement.play();
        nowPlayingText.innerText = `Now Playing: ${songName}`;
    } else {
        audioElement.pause();
    }
}

// Loop toggle
function toggleLoop() {
    isLooping = !isLooping;
    audioElement.loop = isLooping;
    if (isLooping) {
        alert('Loop is ON');
    } else {
        alert('Loop is OFF');
    }
}

// Add event listeners for each play button
playButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const songUrl = button.getAttribute('data-url');
        const songName = button.getAttribute('data-song');
        playSong(songUrl, songName);
    });
});

// Initialize the audio player
const audioPlayer = document.createElement('audio');
audioPlayer.id = 'audio-player';
audioPlayer.style.display = 'none';
document.body.appendChild(audioPlayer);
