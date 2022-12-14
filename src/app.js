var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var redirect_uri = "http://127.0.0.1:5500/index.html"

var client_id = "";
var client_secret = "";

const AUTHORIZE = "https://accounts.spotify.com/authorize";

function requestAuthorization(){
    client_id = "d77a612fe4bb426591fb2db65947cb74";
    client_secret = "9e547dd771f042088b4fe43cdc46465b";
    localStorage.setItem("client_id", client_id);//stores the client_id in localStorage
    localStorage.setItem("client_secret", client_secret);
}
let url = AUTHORIZE;
url += "?client_id" + client_id;
url += "&response_type=code";
url += "&redirect_uri" + encodeURI(redirect_uri);
url += "&show_dialog = true";
url += "&scope=streaming user-read-private-user-email user-modify-playback-state user-read-playback-position user-library-read user-library-modify user-read-playback-state user-modify-playback-state playlist-read-private playlist-read-collaborative playlist-modify"
window.location.href = url //shows spotify authorization screen