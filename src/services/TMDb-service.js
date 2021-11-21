export default class useTheMovieDB {
  _apiBase = 'https://api.themoviedb.org/3/';
  _apiKey = 'api_key=a60262500ac52b0699a0d49e7f802ffa';

  getResource = async (url) => {
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  }
}