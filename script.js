let audioPlayer = document.getElementById("audioPlayer");
let audioSource = document.getElementById("audioSource");
let currentSongElement = document.getElementById("currentSong");
let songQueue = [];
let isLooping = false;  // Looping state

// Play a song
function playSong(songUrl) {
    audioSource.src = songUrl;
    audioPlayer.load();  // Load the new song
    audioPlayer.play();
    currentSongElement.innerText = songUrl.split('/').pop().split('.')[0];  // Display song name

    // Reset loop to false each time a new song starts
    isLooping = false;
    document.getElementById("loopButton").textContent = "Loop: Off";
}

// Queue a song
function queueSong(songUrl) {
    if (!songQueue.includes(songUrl)) {
        songQueue.push(songUrl);
    }
}

// Loop toggle function
function toggleLoop() {
    isLooping = !isLooping;
    if (isLooping) {
        audioPlayer.loop = true;
        document.getElementById("loopButton").textContent = "Loop: On";
    } else {
        audioPlayer.loop = false;
        document.getElementById("loopButton").textContent = "Loop: Off";
    }
}

// Event listener for when song ends
audioPlayer.addEventListener('ended', function () {
    if (!isLooping && songQueue.length > 0) {
        let nextSong = songQueue.shift();  // Get next song from queue
        playSong(nextSong);  // Play next song in the queue
    }
});

// Function to play the next song in the queue
function playNextSong() {
    if (songQueue.length > 0) {
        let nextSong = songQueue.shift();
        playSong(nextSong);
    }
}

// Function to display the current song time on the audio bar
audioPlayer.addEventListener('timeupdate', function () {
    let currentTime = audioPlayer.currentTime;
    let duration = audioPlayer.duration;
    let progress = (currentTime / duration) * 100;
    document.getElementById("audioPlayer").style.setProperty('--progress', `${progress}%`);
});

// Create and set the loop button
let loopButton = document.createElement("button");
loopButton.id = "loopButton";
loopButton.textContent = "Loop: Off";
loopButton.onclick = toggleLoop;
document.body.appendChild(loopButton);
