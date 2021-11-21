import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const _apiBase = 'https://api.themoviedb.org/3/';
const _apiKey = 'api_key=a60262500ac52b0699a0d49e7f802ffa';

export const fetchMovie = createAsyncThunk(
  'movie/fetchMovie',
  async function({id, lang}, {rejectWithValue}) {
    try {
      const response = await fetch(`${_apiBase}movie/${id}?${_apiKey}&language=${lang}`);

      if (!response.ok) {
        throw new Error('Server Error!');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchMovieImages = createAsyncThunk(
  'movie/fetchMovieImages',
  async function({id}, {rejectWithValue}) {
    try {
      const response = await fetch(`${_apiBase}movie/${id}/images?${_apiKey}`);

      if (!response.ok) {
        throw new Error('Server Error!');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchMovieCast = createAsyncThunk(
  'movie/fetchMovieCast',
  async function({id, lang}, {rejectWithValue}) {
    try {
      const response = await fetch(`${_apiBase}movie/${id}/credits?${_apiKey}&language=${lang}`);

      if (!response.ok) {
        throw new Error('Server Error!');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchMovieRecommend = createAsyncThunk(
  'movie/fetchMovieRecommend',
  async function({id, lang}, {rejectWithValue}) {
    try {
      const response = await fetch(`${_apiBase}movie/${id}/recommendations?${_apiKey}&language=${lang}`);

      if (!response.ok) {
        throw new Error('Server Error!');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
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
  recommendStatus: null,
  recommendError: null,
  movieRecommend: []
};

const movieSlice = createSlice({
  name: 'actor',
  initialState,
  reducers: {
    movieChangePages(state, action) {
      state.page = action.payload.value
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
    [fetchMovie.rejected]: (state) => {
      state.movieError = 'error';
    },
    [fetchMovieImages.pending]: (state) => {
      state.imagesStatus = 'loading';
      state.imagesError = null;
    },
    [fetchMovieImages.fulfilled]: (state, action) => {
      state.imagesStatus = 'resolved';
      state.movieImages = action.payload.backdrops;
    },
    [fetchMovieImages.rejected]: (state) => {
      state.imagesError = 'error';
    },
    [fetchMovieCast.pending]: (state) => {
      state.castStatus = 'loading';
      state.castError = null;
    },
    [fetchMovieCast.fulfilled]: (state, action) => {
      state.castStatus = 'resolved';
      state.movieCast = action.payload.cast;
    },
    [fetchMovieCast.rejected]: (state) => {
      state.castError = 'error';
    },
    [fetchMovieRecommend.pending]: (state) => {
      state.recommendStatus = 'loading';
      state.recommendError = null;
    },
    [fetchMovieRecommend.fulfilled]: (state, action) => {
      state.recommendStatus = 'resolved';
      state.movieRecommend = action.payload.results;
    },
    [fetchMovieRecommend.rejected]: (state) => {
      state.recommendError = 'error';
    },
  }
});

const {actions, reducer} = movieSlice;
export default reducer;
export const {movieChangePages} = actions;