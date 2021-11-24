import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { httpService } from '../services/http-service';

const {request} = httpService();
const _apiBase = 'https://api.themoviedb.org/3/';
const _apiKey = 'api_key=a60262500ac52b0699a0d49e7f802ffa';

export const fetchMovie = createAsyncThunk(
  'movie/fetchMovie',
  ({id, lang}) => {
    return request(`${_apiBase}movie/${id}?${_apiKey}&language=${lang}`);
  }
);

export const fetchMovieImages = createAsyncThunk(
  'movie/fetchMovieImages',
  ({id}) => {
    return request(`${_apiBase}movie/${id}/images?${_apiKey}`);
  }
);

export const fetchMovieCast = createAsyncThunk(
  'movie/fetchMovieCast',
  ({id, lang}) => {
    return request(`${_apiBase}movie/${id}/credits?${_apiKey}&language=${lang}`);
  }
);

export const fetchMovieRecommend = createAsyncThunk(
  'movie/fetchMovieRecommend',
  async ({id, lang}) => {
    return request(`${_apiBase}movie/${id}/recommendations?${_apiKey}&language=${lang}`);
  }
);

const initialState = {
  movieStatus: null,
  movieError: null,
  imagesStatus: null,
  imagesError: null,
  movieImages: [],
  castStatus: null,
  castError: null,
  movieCast: [],
  isShortListCast: true,
  shortListCast: [],
  recommendStatus: null,
  recommendError: null,
  movieRecommend: []
};

const movieSlice = createSlice({
  name: 'actor',
  initialState,
  reducers: {
    toggleCastList(state) {
      state.isShortListCast = !state.isShortListCast
    },
  },
  extraReducers: {
    [fetchMovie.pending]: (state) => {
      state.movieStatus = 'loading';
      state.movieError = null;
    },
    [fetchMovie.fulfilled]: (state, action) => {
      state.movieStatus = 'resolved';
      state.searchMovies = action.payload.results;
    },
    [fetchMovie.rejected]: (state, action) => {
      state.movieStatus = 'rejected';
      state.movieError = action.payload;
    },
    [fetchMovieImages.pending]: (state) => {
      state.imagesStatus = 'loading';
      state.imagesError = null;
    },
    [fetchMovieImages.fulfilled]: (state, action) => {
      state.imagesStatus = 'resolved';
      state.movieImages = action.payload.backdrops;
    },
    [fetchMovieImages.rejected]: (state, action) => {
      state.imagesStatus = 'rejected';
      state.imagesError = action.payload;
    },
    [fetchMovieCast.pending]: (state) => {
      state.castStatus = 'loading';
      state.castError = null;
    },
    [fetchMovieCast.fulfilled]: (state, action) => {
      state.castStatus = 'resolved';
      state.movieCast = action.payload.cast;
      state.shortListCast = action.payload.cast.slice(0, 6);
    },
    [fetchMovieCast.rejected]: (state, action) => {
      state.castStatus = 'rejected';
      state.castError = action.payload;
    },
    [fetchMovieRecommend.pending]: (state) => {
      state.recommendStatus = 'loading';
      state.recommendError = null;
    },
    [fetchMovieRecommend.fulfilled]: (state, action) => {
      state.recommendStatus = 'resolved';
      state.movieRecommend = action.payload.results;
    },
    [fetchMovieRecommend.rejected]: (state, action) => {
      state.recommendStatus = 'rejected';
      state.recommendError = action.payload;
    },
  }
});

const {actions, reducer} = movieSlice;
export default reducer;
export const {toggleCastList} = actions;