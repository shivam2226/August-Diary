document.addEventListener('DOMContentLoaded', function() {
    const playButtons = document.querySelectorAll('.play-button');
    const audioPlayer = document.getElementById('audioPlayer');

    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            const playlistItem = button.closest('.playlist-item');
            const songTitle = playlistItem.querySelector('h3').textContent;
            const audioSrc = `songs/${songTitle}.mp3`; // Adjust the path accordingly
            
            if (audioPlayer.src !== audioSrc) {
                audioPlayer.src = audioSrc;
                audioPlayer.load();
            }
            
            if (audioPlayer.paused) {
                audioPlayer.play();
            } else {
                audioPlayer.pause();
            }
        });
    });
});

function navigate() {
    const pageSelector = document.getElementById('pageSelector');
    const selectedPage = pageSelector.value;

    if (selectedPage) {
        window.location.href = selectedPage;
    }
}
