
// To play and change the songs --->>>

//Adding variables ->
// Adding audio files buttons in the overlay playlist

// let whatsPoppin = document.getElementById('1');
// let sunflower = document.getElementById('2');
// let industryBaby = document.getElementById('3');

let songIndex = 0;
let audioElement = new Audio("./assets/overlay assets/jack Harlow - WHATS POPPIN.mp3");
let masterPlay = document.querySelector('#playCTA');
let progressBar = document.querySelector('#songProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.querySelector('#masterSongName');
let masterArtistName = document.querySelector('#masterArtistName');
let masterAlbumCover = document.querySelector('#masterAlbumCover');

let songs = [
    {songName: "WHATS POPPIN", filepath: "./assets/overlay assets/jack Harlow - WHATS POPPIN.mp3", coverPath: "./assets/overlay assets/asset 22.jpeg", artist: "Jack Harlow", sNo: 1},

    {songName: "Sunflower - Spider-Man: Into the Spider Verse", filepath: "./assets/overlay assets/Post Malone, Swae Lee - Sunflower.mp3", coverPath: "./assets/overlay assets/asset 23.jpeg", artist: "Post Malone, Swae Lee", sNo: 2},

    {songName: "INDUSTRY BABY (feat. Jack Harlow)", filepath: "./assets/overlay assets/Lil Nas X - Industry Baby (Lyrics) ft. Jack Harlow.mp3", coverPath: "./assets/overlay assets/asset 24.jpeg", artist: "Lil Nas X, Jack Harlow", sNo: 3}
]


//array to populate song details in the playlist table
songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[1].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    element.getElementsByClassName('artist')[0].innerText = songs[i].artist;
})

//handle play/pause click
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.innerHTML = '<img src="./assets/overlay assets/asset 69.svg" alt="Pause">';

        masterAlbumCover.setAttribute('src', songs[songIndex].coverPath)

        let currSong = document.getElementById(songIndex);
        currSong.getElementsByClassName('gifCell')[0].innerHTML = '<img id="gif" src="./assets/overlay assets/green eq.gif" alt="">'; //gif
        currSong.classList.add('rowSelect'); //adding the play button

    } else {
        audioElement.pause();
        makeAllUnselect();
        masterPlay.innerHTML = '<img src="./assets/overlay assets/asset 79.svg" alt="Play">';
    }
});

audioElement.addEventListener('timeupdate', () => {
    if (audioElement.currentTime >= audioElement.duration) {
        makeAllUnselect();
        masterPlay.innerHTML = '<img src="./assets/overlay assets/asset 79.svg" alt="Play">';
    }
})

//update the progress bar
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;

})

//two-way sync progress bar with song
progressBar.addEventListener('change', () => {
    audioElement.currentTime = progressBar.value * audioElement.duration/100;
})

//this is used to remove and reset all styling from all rows (when another song is played)
const makeAllUnselect = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {
        element.classList.remove('rowSelect');
        // element.getElementsByClassName('gifCell')[0].innerHTML = '<img id="gif" style="display: none;" src="./assets/overlay assets/green eq.gif" alt="">';
        element.getElementsByClassName('gifCell')[0].innerHTML = songs[i].sNo;
    })
}


// Adding event listeners to all the songs present in the playlist (what happens if we click on any of them) 
Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {
    element.addEventListener('click', (e) => {
        let clickedElement = e.target.closest('.songItem'); // Get the parent 'songItem' of the clicked element

        makeAllUnselect(); //resetting the play button from all the songs

        songIndex = parseInt(clickedElement.id); //we get the song ID that's in html

        clickedElement.classList.add('rowSelect'); //adding the play button

        audioElement.src = songs[songIndex].filepath; //changing the song, by editing the source (what's in argument)

        masterSongName.innerText = songs[songIndex].songName; //changing the song name in the dock

        masterArtistName.innerText = songs[songIndex].artist; //changing the artist name in the dock

        masterAlbumCover.setAttribute('src', songs[songIndex].coverPath) //changing the album cover in the dock

        audioElement.currentTime = 0; //making the song play from beginning

        audioElement.play(); //playing the song

        masterPlay.innerHTML = '<img src="./assets/overlay assets/asset 69.svg" alt="Pause">'; //changing the main CTA to pause

        clickedElement.getElementsByClassName('gifCell')[0].innerHTML = '<img id="gif" src="./assets/overlay assets/green eq.gif" alt="">'; //gif

    },)
})


//adding event listener to the next button, in the dock
document.getElementById('next').addEventListener('click', () => {
    if(songIndex >= 2) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }

    makeAllUnselect(); //resetting the play button from all the songs

    audioElement.src = songs[songIndex].filepath; //changing the song, by editing the source (what's in argument)

    masterSongName.innerText = songs[songIndex].songName; //changing the song name in the dock

    masterArtistName.innerText = songs[songIndex].artist; //changing the artist name in the dock

    masterAlbumCover.setAttribute('src', songs[songIndex].coverPath) //changing the album cover in the dock

    audioElement.currentTime = 0; //making the song play from beginning

    audioElement.play(); //playing the song

    masterPlay.innerHTML = '<img src="./assets/overlay assets/asset 69.svg" alt="Pause">'; //changing the main CTA to pause

    let currSong = document.getElementById(songIndex);
    currSong.getElementsByClassName('gifCell')[0].innerHTML = '<img id="gif" src="./assets/overlay assets/green eq.gif" alt="">'; //gif
    currSong.classList.add('rowSelect'); //adding the play button
})

//adding event listener to the previous button, in the dock
document.getElementById('previous').addEventListener('click', () => {
    if(songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }

    makeAllUnselect(); //resetting the play button from all the songs

    audioElement.src = songs[songIndex].filepath; //changing the song, by editing the source (what's in argument)

    masterSongName.innerText = songs[songIndex].songName; //changing the song name in the dock

    masterArtistName.innerText = songs[songIndex].artist; //changing the artist name in the dock

    masterAlbumCover.setAttribute('src', songs[songIndex].coverPath) //changing the album cover in the dock

    audioElement.currentTime = 0; //making the song play from beginning

    audioElement.play(); //playing the song

    masterPlay.innerHTML = '<img src="./assets/overlay assets/asset 69.svg" alt="Pause">'; //changing the main CTA to pause

    let currSong = document.getElementById(songIndex);
    currSong.getElementsByClassName('gifCell')[0].innerHTML = '<img id="gif" src="./assets/overlay assets/green eq.gif" alt="">'; //gif
    currSong.classList.add('rowSelect'); //adding the play button
})