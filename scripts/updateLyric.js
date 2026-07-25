import {writeFile} from "fs/promises";

const API_KEY = process.env.LASTFM_API_KEY;
const USER = process.env.LASTFM_USERNAME;

if (!API_KEY || !USER) {
  throw new Error("Missing api key or username");
}

const lastfmUrl = 
  `https://ws.audioscrobbler.com/2.0/` +
  `?method=user.gettoptracks` +
  `&user=${encodeURIComponent(USER)}` +
  `&period=7day` +
  `&limit=10` +
  `&api_key=${API_KEY}` +
  `&format=json`;

const lastfmRes = await fetch(lastfmUrl);
const lastfmData = await lastfmRes.json();

const tracks = lastfmData.toptracks?.track;

console.log(JSON.stringify(lastfmData, null, 2));

if (!tracks || tracks.length === 0) {
  throw new Error("no tracks :(");
}

const track =
  tracks[Math.floor(Math.random() * tracks.length)];

const artist = track.artist.name;
const song = track.name;
const plays = Number(track.playcount);

console.log(`Selected: ${artist}\'s ${song}`);

let lyric = "lyrics unaviable 3:";

const lyricsUrl =
  `https://lrclib.net/api/get` +
  `?artist_name=${encodeURIComponent(artist)}` +
  `&track_name=${encodeURIComponent(song)}`;

const lyricsRes = await fetch(lyricsUrl);

if (lyricsRes.ok) {
  const lyricsData = await lyricsRes.json();

  const rawLyrics =
    lyricsData.plainLyrics ||
    lyricsData.syncedLyrics ||
    "";

  const lines = rawLyrics
    .split("\n")
    .map(line => line.trim())
    .filter(line => {
      return (
        line.length > 0 &&
        !line.startsWith("[")
      );
    });

  if (lines.length > 0) {
    lyric =
      lines[Math.floor(Math.random() * lines.length)];
  }
}

const output = {
  date: new Date().toISOString().slice(0,10),
  artist,
  song,
  plays,
  lyric
};

await writeFile(
  "today.json",
  JSON.stringify(output, null, 2)
);

console.log("today.json updated");
