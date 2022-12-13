const auth_url =
//this encases the user details for log in and playlist libraries
  "https://accounts.spotify.com/authorize?client_id=d77a612fe4bb426591fb2db65947cb74&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
//search bar
const searchBtn = document.getElementById("search");
searchBtn.addEventListener("click", search);
const form = document.querySelector(".searchform");
function search(event) {
  event.preventDefault();
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();

  fetch("http://localhost:3000/movies/")
    .then((response) => response.json())
    .then((data) => {
      const foundMovie = data.find((searchedMovie) => {
        if (searchedMovie.title.toLowerCase().includes(input.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });
      if (foundMovie) {
        return showDetails(foundMovie);
      }
    });
}
