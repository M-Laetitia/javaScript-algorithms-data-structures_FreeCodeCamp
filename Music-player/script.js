const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

const allSongs = [
    {
      id: 0,
      title: "Scratching The Surface",
      artist: "Quincy Larson",
      duration: "4:25",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/scratching-the-surface.mp3",
    },
    {
      id: 1,
      title: "Can't Stay Down",
      artist: "Quincy Larson",
      duration: "4:15",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stay-down.mp3",
    },
    {
      id: 2,
      title: "Still Learning",
      artist: "Quincy Larson",
      duration: "3:51",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/still-learning.mp3",
    },
    {
      id: 3,
      title: "Cruising for a Musing",
      artist: "Quincy Larson",
      duration: "3:34",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cruising-for-a-musing.mp3",
    },
    {
      id: 4,
      title: "Never Not Favored",
      artist: "Quincy Larson",
      duration: "3:35",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/never-not-favored.mp3",
    },
    {
      id: 5,
      title: "From the Ground Up",
      artist: "Quincy Larson",
      duration: "3:12",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/from-the-ground-up.mp3",
    },
    {
      id: 6,
      title: "Walking on Air",
      artist: "Quincy Larson",
      duration: "3:25",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/walking-on-air.mp3",
    },
    {
      id: 7,
      title: "Can't Stop Me. Can't Even Slow Me Down.",
      artist: "Quincy Larson",
      duration: "3:52",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stop-me-cant-even-slow-me-down.mp3",
    },
    {
      id: 8,
      title: "The Surest Way Out is Through",
      artist: "Quincy Larson",
      duration: "3:10",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/the-surest-way-out-is-through.mp3",
    },
    {
      id: 9,
      title: "Chasing That Feeling",
      artist: "Quincy Larson",
      duration: "2:43",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/chasing-that-feeling.mp3",
    },
];


// create a copy of the allSongs array without mutating the original. 
let userData = {
    songs: [...allSongs],
    currentSong: null,
    songCurrentTime: 0,
};

const playSong = (id) => {
  const song = userData?.songs.find((song) => song.id === id);
  audio.src = song.src; //  This tells the audio element where to find the audio data for the selected song.
  audio.title = song.title; // This tells the audio element what to display as the title of the song.

  // Ensure it starts from the beginning by the use of the currentTime property of the audio object.
  if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = userData?.songCurrentTime // Add an else block to handle the current song's position in the playlist.
  }
  userData.currentSong = song; // update the current song being played 
  playButton.classList.add("playing")// and the appearance of the playButton element.
  audio.play(); // play the song - play() is a method from the web audio API for playing an mp3 file    
};


const renderSongs = (array) => {
    const songsHTML = array
      .map((song)=> {      
        return `
      <li id="song-${song.id}" class="playlist-song">
      <button class="playlist-song-info" onclick="playSong(${song.id})">
          <span class="playlist-song-title">${song.title}</span>
          <span class="playlist-song-artist">${song.artist}</span>
          <span class="playlist-song-duration">${song.duration}</span>
      </button>
      <button class="playlist-song-delete" aria-label="Delete ${song.title}">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
      </button>
      </li>
      `;
    })
    .join("");

    playlistSongs.innerHTML = songsHTML;
};

// get the index of each song in the songs property of userData.
/*const getCurrentSongIndex = () => {
  return userData?.songs.indexOf(userData?.currentSong)
}*/
const getCurrentSongIndex = () => userData?.songs.indexOf(userData?.currentSong);

const pauseSong = () => {
  userData.songCurrentTime = audio.currentTime;
  playButton.classList.remove("playing")
  audio.pause()// pause() is a method of the Web Audio API for pausing music files.
};

const playNextSong = () => {
  if(userData?.currentSong === null) {
    playSong(userData?.songs[0].id)
  }
}

pauseButton.addEventListener("click",  pauseSong);

playButton.addEventListener("click", () => {
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  }else {
    playSong(userData?.currentSong.id);
  }
});

//sort songs in alphabetical order by title. 
//The sort() method converts elements of an array into strings and sorts them in place based on their values in the UTF-16 encoding.

// const sortSongs = () => {
//     userData?.songs.sort();
// };

const sortSongs = () => {
    userData?.songs.sort((a,b) => { //The sort() method accepts a compare callback function that defines the sort order.
    
    // the first condition (a.title < b.title) checks if the title of the first song is less than the title of the second song. If so, the first song is sorted before the second song.
      if (a.title < b.title) {
        return -1; // the sort() method is expecting a number to be returned
      }
  
      if (a.title > b.title) {
        return 1;
      }
  
      return 0;
    });

    return userData?.songs;
};

// renderSongs(sortSongs());

//Call the renderSongs function and pass in userData?.songs in order to finally display the songs in the UI.
//Optional chaining (?.) helps prevent errors when accessing nested properties that might be null or undefined.
renderSongs(userData?.songs);