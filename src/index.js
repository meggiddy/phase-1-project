window.onload = ()=> {
  const song_img_el = document.getElementById("song-image")
  const song_title_el = document.getElementById("song-title")
  const song_artist_el = document.getElementById("song-artist")
  const song_next_up_el = document.getElementById("song-next-up")
  
  const play_btn = document.getElementById("play-btn")
  const play_btn_icon = document.getElementById("play-icon")
  const prev_btn = document.getElementById("prev-btn")
  const next_btn = document.getElementById("next-btn")

  const audio_player = document.getElementById("music-player")
  let current_song_index;
  let next_song_index;

  let songs = [
    {
      title: "Song 1",
      artist: "Artist 1",
      img_path: "image/",
      song_path: "/audio/"
    },
    {}
  ]

  InitPlayer()
  function InitPlayer() {
    current_song_index = 0;
    next_song_index = current_song_index + 1;
    updatePlayer();
  }

  function updatePlayer() {
    let song = songs[current_song_index];
  }
} 


/* const auth_url =
  //this encases the user details for log in and playlist libraries
  "https://accounts.spotify.com/authorize?client_id=d77a612fe4bb426591fb2db65947cb74&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
//search fetch
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
  method: "get",
  headers: myHeaders,
  redirect: "follow",
};

fetch(
  "https://v1.nocodeapi.com/meg/spotify/WxqfUgoapfCmlvIu/search?q=<q>",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
 */
/* const showDetails = function (element) {
  const image = document.getElementById("coverImg");
  image.src = element.poster;
  const name = document.getElementById("title");
  name.innerHTML = element.title;
  const details = document.getElementById("details");
  details.innerHTML = element.capacity;
};
//browse categories
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
  method: "get",
  headers: myHeaders,
  redirect: "follow",
};

fetch(
  "https://v1.nocodeapi.com/meg/spotify/WxqfUgoapfCmlvIu/browse/categories",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
 */
/* //browse featured
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
  method: "get",
  headers: myHeaders,
  redirect: "follow",
};

fetch(
  "https://v1.nocodeapi.com/meg/spotify/WxqfUgoapfCmlvIu/browse/featured",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
//new releases
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
  method: "get",
  headers: myHeaders,
  redirect: "follow",
};

fetch(
  "https://v1.nocodeapi.com/meg/spotify/WxqfUgoapfCmlvIu/browse/new",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));

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
