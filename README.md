# phase-1-project
This is a simple Spotify application that can play music without logging in or just log in to Spotify and play your own music.
It was a very tall order being a beginner however I'm still working on it.
# Technologies
Some of my dependencies on npm install are:-
    "body-parser": "^1.20.1",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "json-server": "^0.17.1",
    "querystring": "^0.2.1",
    "request": "^2.88.2",
    "spotify-web-api-node": "^5.0.2"

I also use :-
    -HTML
    -JS
    -CSS
# Installation
Here are the installation steps:
    $ open https://developer.spotify.com/ and create/ login to an account.
    $ on the dashboard you will see CLIENT_ID and CLIENT_SECRET.
    $ git clone git@github.com:meggiddy/phase-1-project.git
    $ cd ./phase-1-project
    $ npm install
    $ CLIENT_ID=<your-spotify-client-ID> CLIENT_SECRET=<your-spotify-client-secret> REDIRECT_URI=http://localhost:3001 node src/server.js 
    $ open http://localhost:3001 in browser, click login to connect to your spotify.
    $ after the authentication redirect click on my library to see your library

# Author
Code written by Maggie- Aka Meggiddy!

# License
GNU General Public License v3.0 Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.