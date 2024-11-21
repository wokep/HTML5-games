let audioPlayer = new Audio();
let nowPlayingText = document.getElementById("nowPlayingText");
let queue = [];
let isLooping = false;

// Function to play a song
function playSong(url, songName) {
    audioPlayer.src = url; // Set audio source to the song URL
    audioPlayer.play(); // Start playing the song
    nowPlayingText.innerHTML = "Now Playing: " + songName; // Display current song
    document.getElementById("nowPlaying").style.display = "block"; // Show the Now Playing section
    audioPlayer.addEventListener('ended', function() {
        if (queue.length > 0) {
            let nextSong = queue.shift(); // Get the next song from the queue
            playSong(nextSong.url, nextSong.songName); // Play the next song
        }
    });
}

// Function to queue a song
function queueSong(url, songName) {
    queue.push({ url, songName });
    alert("Added to queue: " + songName);
}

// Function to toggle the loop feature
function toggleLoop() {
    isLooping = !isLooping;
    audioPlayer.loop = isLooping;
    alert("Loop is now " + (isLooping ? "enabled" : "disabled"));
}
