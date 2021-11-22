import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const _apiBase = 'https://api.themoviedb.org/3/';
const _apiKey = 'api_key=a60262500ac52b0699a0d49e7f802ffa';

export const fetchMovieGenres = createAsyncThunk(
  'app/fetchMovieGenres',
  async function({lang}, {rejectWithValue}) {
    try {
      const response = await fetch(`${_apiBase}genre/movie/list?${_apiKey}&language=${lang}`);

      if (!response.ok) {
        throw new Error('Server Error!');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

const initialState = {
  lang: 'en',
  query: 'search',
  genresStatus: null,
  genresError: null,
  movieGenres: []
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeLanguage(state, action) {
      state.lang = action.payload.value
    },
    changeSearchText(state, action) {
      state.query = action.payload.text
    }
  },
  extraReducers: {
    [fetchMovieGenres.pending]: (state) => {
      state.genresStatus = 'loading';
      state.genresError = null;
    },
    [fetchMovieGenres.fulfilled]: (state, action) => {
      state.genresStatus = 'resolved';
      state.movieGenres = action.payload.genres;
    },
    [fetchMovieGenres.rejected]: (state, action) => {
      state.genresStatus = 'rejected';
      state.genresError = action.payload;
    },
  }
});

const {actions, reducer} = appSlice;
export default reducer;
export const {
  changeLanguage,
  changeSearchText
} = actions;