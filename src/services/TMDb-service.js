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

  getPopularMovies = async (lang, page) => {
    return await this.getResource(`${this._apiBase}movie/popular?${this._apiKey}&language=${lang}&page=${page}`);
  }

  getTopRatedMovies = async (lang, page) => {
    return await this.getResource(`${this._apiBase}movie/top_rated?${this._apiKey}&language=${lang}&page=${page}`);
  }

  getUpcomingMovies = (lang, page) => {
    return this.getResource(`${this._apiBase}movie/upcoming?${this._apiKey}&language=${lang}&page=${page}`);
  }

  getMovie = (id, lang) => {
    return this.getResource(`${this._apiBase}movie/${id}?${this._apiKey}&language=${lang}`);
  }
  
  getMovieGenres = (lang) => {
    return this.getResource(`${this._apiBase}genre/movie/list?${this._apiKey}&language=${lang}`);
  }

  getMovieCast = (id, lang) => {
    return this.getResource(`${this._apiBase}movie/${id}/credits?${this._apiKey}&language=${lang}`);
  }

  getMovieImages = (id) => {
    return this.getResource(`${this._apiBase}movie/${id}/images?${this._apiKey}`);
  }

  getMovieRecommendations = (id, lang) => {
    return this.getResource(`${this._apiBase}movie/${id}/recommendations?${this._apiKey}&language=${lang}`);
  }

  getPerson = (id, lang) => {
    return this.getResource(`${this._apiBase}person/${id}?${this._apiKey}&language=${lang}`);
  }

  getPersonImages = (id, lang) => {
    return this.getResource(`${this._apiBase}person/${id}/images?${this._apiKey}&language=${lang}`);
  }

  getPersonMovies = (id, lang) => {
    return this.getResource(`${this._apiBase}person/${id}/movie_credits?${this._apiKey}&language=${lang}`);
  }

  getSearchMovies = (query, language, page) => {
    return this.getResource(`${this._apiBase}search/movie?${this._apiKey}&language=${language}&query=${query}&page=${page}&include_adult=false`);
  }
}