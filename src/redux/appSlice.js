import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../services/http.hook';

const _apiBase = 'https://api.themoviedb.org/3/';
const _apiKey = 'api_key=a60262500ac52b0699a0d49e7f802ffa';

export const fetchMovieGenres = createAsyncThunk(
  'app/fetchMovieGenres',
  ({lang}) => {
    const {request} = useHttp()
    return request(`${_apiBase}genre/movie/list?${_apiKey}&language=${lang}`);
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