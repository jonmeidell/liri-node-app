require("dotenv").config();
const fs = require("fs");
const moment = require("moment");
const Spotify = new Spotify(keys.spotify);
const keys = require("./keys.js");

let artistName = function (artist) {
    return artist.name;
};
// bandsintown
let concertThis = function (artist) {
    let query = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(query).then(
        function (response) {
            const json = response.data;
            if (!json.length) {
                console.log("Could not find any upcoming shows for " + artist);
                return;
            }
            console.log("Shows coming soon for " + artist + " are: ");
            for (var i = 0; i < json.length; i++) {
                let show = json[i];
                console.log("Show in: " + show.venue.city + ", "(show.venue.region || show.venue.country) + "at " + show.venue.name + " starting at " + moment(show.datetime).format("MM/DD/YYYY")
                );
            }
        }
    );
};
// spotify-this-song
let spotifyThis = function (songName) {
    if (songName === undefined) {
        songName = "Let it Be";
    };

    spotify.search(
        {
            type: 'track',
            query: songName,
        },
        function (err, data) {
            if (err) {
                console.log("Error!");
                return;
            }

            let songSelected = data.tracks.items;
            for (var i = 0; i < songSelected.length; i++) {
                console.log("Artist: " + songSelected[i].artist.map(artistName), "Song name: " + songSelected[i].name, "Album: " + songSelected[i].album.name);
            };
        }
    );
};
// movie-this
let movieThis = function (movieName) {
    if (movieName === undefined) {
        movieName = "Dark City";
    };

    let urlMovie = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy";

    axios.get(urlMovie).then(
        function (response) {
            let jsonData = response.data;
            console.log("Title: " + jsonData.Title);
            console.log("Year: " + jsonData.Year);
            console.log("Rated: " + jsonData.Rated);
            console.log("IMDB Rating: " + jsonData.imdbRating);
            console.log("Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
            console.log("Plot: " + jsonData.Plot);
            console.log("Actors: " + jsonData.Actors);
        }
    );
};
// do-what-it-says
