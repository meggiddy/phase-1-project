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
