window.onload = () => {
  const code = new URLSearchParams(window.location.search).get("code");
  if (code) {
    fetch("http://localhost:3001/login", {
      method: "POST",
      body: JSON.stringify({ code }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        window.sessionStorage.setItem("accessToken", data.accessToken);
        window.sessionStorage.setItem("refreshToken", data.refreshToken);
        window.sessionStorage.setItem("expiresIn", data.expiresIn);

        fetch("https://api.spotify.com/v1/me/albums", {
          method: "GET",
          headers: { Authorization: "Bearer " + data.accessToken },
        })
          .then((response) => response.json())
          .then((responseData) => {
            console.log(responseData);
          });
      });

    const song_img_el = document.getElementById("song-image");
    const song_title_el = document.getElementById("song-title");
    const song_artist_el = document.getElementById("song-artist");
    const song_next_up_el = document.getElementById("song-next-up");

    const song_img = document.getElementById("song-image1");
    const song_title = document.getElementById("song-title1");
    const song_artist = document.getElementById("song-artist1");

    const play_btn = document.getElementById("play-btn");
    const play_btn_icon = document.getElementById("play-icon");
    const prev_btn = document.getElementById("prev-btn");
    const next_btn = document.getElementById("next-btn");
    const like_btn = document.getElementById("like");
    const like_btn_icon = document.getElementById("like-btn-icon");

    const songList = document.getElementById("songList");
    songList.style.display = "none";
    const liked_Songs = document.getElementById("likedSongs");
    liked_Songs.addEventListener("click", () => {
      if (songList.style.display === "none") {
        songList.style.display = "block";
      } else {
        songList.style.display = "none";
      }
    });

    const audio_player = document.getElementById("music-player");
    let current_song_index;
    let next_song_index;

    let songs = [
      {
        title: "Nostalgia",
        artist: "Makaih Beats",
        img_path: "/images/img1.jpg",
        song_path: "/audio/Makaih Beats - Nostalgia.mp3",
      },
      {
        title: "Welcome",
        artist: "Audiorezout",
        img_path: "/images/img2.jpg",
        song_path: "/audio/Audiorezout - Welcome.mp3",
      },
      {
        title: "Oi Kompadri",
        artist: "Rocky Marsiano",
        img_path: "/images/img3.jpg",
        song_path: "/audio/Rocky Marsiano - Oi Kompadri (instrumental).mp3",
      },
      {
        title: "We Wish You a Merry Christmas",
        artist: "Dee Yan-Key",
        img_path: "/images/img4.jpg",
        song_path: "/audio/Dee Yan-Key - We Wish You a Merry Christmas.mp3",
      },
      {
        title: "From-Pillar-To-Post",
        artist: "Kesta",
        img_path: "/images/img5.jpg",
        song_path: "/audio/Ketsa - From-Pillar-To-Post.mp3",
      },
      {
        title: "Our Sunny Dance",
        artist: "Lobo Loco",
        img_path: "/images/img6.jpg",
        song_path: "/audio/Lobo Loco - Our Sunny Dance (ID 1857).mp3",
      },
      {
        title: "Makaih Beats",
        artist: "Vibration",
        img_path: "/images/",
        song_path: "/audio/Makaih Beats - Vibration.mp3",
      },
    ];

    play_btn.addEventListener("click", TogglePlaySong);

    next_btn.addEventListener("click", () => {
      ChangeSong();
      like_btn_icon.classList.toggle("fa-heart");
      like_btn_icon.classList.toggle("fa-heart-crack");
    });

    prev_btn.addEventListener("click", () => ChangeSong(false)); //passes false to next

    like_btn.addEventListener("click", () => {
      like_btn_icon.classList.toggle("fa-heart");
      like_btn_icon.classList.toggle("fa-heart-crack");

      let song = songs[current_song_index];
      const likeSongTitle = document.createElement("li");
      likeSongTitle.addEventListener("click", () => updatePlayer);
      //on click play song
      likeSongTitle.innerHTML = song.title;
      songList.append(likeSongTitle);

      song_img.style = "background-image: url('" + song.img_path + "')";
      song_title.innerHTML = song.title;
      song_artist.innerHTML = song.artist;
    });

    InitPlayer();
    function InitPlayer() {
      current_song_index = 0;
      next_song_index = current_song_index + 1;
      updatePlayer();
    }

    function updatePlayer() {
      let song = songs[current_song_index];

      song_img_el.style = "background-image: url('" + song.img_path + "')";
      song_title_el.innerHTML = song.title;
      song_artist_el.innerHTML = song.artist;
      song_next_up_el.innerHTML =
        songs[next_song_index].title + " by " + songs[next_song_index].artist;

      audio_player.src = song.song_path;
    }

    function TogglePlaySong() {
      if (audio_player.paused) {
        audio_player.play();
        play_btn_icon.classList.remove("fa-play");
        play_btn_icon.classList.add("fa-pause");
      } else {
        audio_player.pause();
        play_btn_icon.classList.remove("fa-pause");
        play_btn_icon.classList.add("fa-play");
      }
    }

    function ChangeSong(next = true) {
      //check if next songs are within the song limit
      if (next) {
        current_song_index++;
        next_song_index = current_song_index + 1;
        if (current_song_index > songs.length - 1) {
          current_song_index = 0;
          next_song_index = current_song_index + 1;
        }
        if (next_song_index > songs.length - 1) {
          next_song_index = 0;
        }
      } else {
        current_song_index--;
        next_song_index = current_song_index + 1;
        if (current_song_index < 0) {
          current_song_index = songs.length - 1;
          next_song_index = 0;
        }
      }

      updatePlayer();
      TogglePlaySong();
    }
  }
};

/*
//search bar
const searchBtn = document.getElementById("search");
searchBtn.addEventListener("click", search);
const form = document.querySelector(".searchform");
function search(event) {
  event.preventDefault();
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();

  fetch("http://localhost:3000/songs/")
    .then((response) => response.json())
    .then((data) => {
      const foundSong = data.find((searchedSong) => {
        if (searchedSong.title.toLowerCase().includes(input.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });
      if (foundSong) {
        return showDetails(foundSong);
      }
    });
}
 */
