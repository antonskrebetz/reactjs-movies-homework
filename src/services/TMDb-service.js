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

  getPopularMovies = async (page) => {
    return await this.getResource(`${this._apiBase}movie/popular?${this._apiKey}&language=en-US&page=${page}`);
  }

  getTopRatedMovies = async (page) => {
    return await this.getResource(`${this._apiBase}movie/top_rated?${this._apiKey}&language=en-US&page=${page}`);
  }

  getUpcomingMovies = (page) => {
    return this.getResource(`${this._apiBase}movie/upcoming?${this._apiKey}&language=en-US&page=${page}`);
  }

  getMovie = (id) => {
    return this.getResource(`${this._apiBase}movie/${id}?${this._apiKey}`);
  }
  
  getMovieGenres = () => {
    return this.getResource(`${this._apiBase}genre/movie/list?${this._apiKey}`);
  }

  getMovieCast = (id) => {
    return this.getResource(`${this._apiBase}movie/${id}/credits?${this._apiKey}`);
  }

  getMovieImages = (id) => {
    return this.getResource(`${this._apiBase}movie/${id}/images?${this._apiKey}`);
  }

  getMovieRecommendations = (id) => {
    return this.getResource(`${this._apiBase}movie/${id}/recommendations?${this._apiKey}&language=en-US&page=1`);
  }

  getPerson = (id) => {
    return this.getResource(`${this._apiBase}person/${id}?${this._apiKey}&language=en-US`);
  }

  getPersonImages = (id) => {
    return this.getResource(`${this._apiBase}person/${id}/images?${this._apiKey}&language=en-US`);
  }

  getPersonMovies = (id) => {
    return this.getResource(`${this._apiBase}person/${id}/movie_credits?${this._apiKey}&language=en-US`);
  }

  getSearchMovies = (query, page) => {
    return this.getResource(`${this._apiBase}search/movie?${this._apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`);
  }
}