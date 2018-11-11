import config from './config'; // grab your api key and secret at https://last.fm/api

const { apiKey } = config;
const URL = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=${apiKey}&format=json`;

export default function getArtists(country) {
  const url = URL.replace(':country', country);
  return fetch(url)
    .then(res => res.json())
    .then(json => json.artist.similar.artist)
}
