const audio = document.getElementById('background-audio');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', () => {
    audio.play();
    playButton.style.display = 'none'; // Hide the play button after clicking
});

function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    audio.play();
}

function navigate() {
    const pageSelector = document.getElementById('pageSelector');
    const selectedPage = pageSelector.value;

    if (selectedPage) {
        window.location.href = selectedPage;
    }
}

function showStyledAlert() {
    const alertText = "Please sirf yhi audio pe click kre , yhi waala song is page pe bhot suit kr rha tha to doosre audio daale hi nhi hai , to baaki 2 buttons work nhi krenge 😅 . Aur haa plz is okk pe click kr de taaki ye song sun sake";
    const styledText = `${alertText}`;
    alert(styledText);
}


