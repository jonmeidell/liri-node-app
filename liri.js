require("dotenv").config();
const fs = require("fs");
const moment = require("moment");
const Spotify = new Spotify(keys.spotify);
const keys = require("./keys.js");

let artistName = function(artist) {
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
                console.log("Show in: " show.venue.city + ", "(show.venue.region || show.venue.country) + "at " + show.venue.name + " starting at " + moment(show.datetime).format("MM/DD/YYYY")
                );
            }
        }
    );
};
// spotify-this-song

// movie-this


// do-what-it-says