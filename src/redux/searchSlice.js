import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../services/http.hook';

const _apiBase = 'https://api.themoviedb.org/3/';
const _apiKey = 'api_key=a60262500ac52b0699a0d49e7f802ffa';

export const fetchSearchMovies = createAsyncThunk(
  'search/fetchSearchMovies',
  ({lang, query, page}) => {
    const {request} = useHttp();
    return request(`${_apiBase}search/movie?${_apiKey}&language=${lang}&query=${query}&page=${page}&include_adult=false`);
  }
);

const initialState = {
  searchMovies: [],
  totalPages: 10,
  allMovieGenres: [],
  status: null,
  error: null
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSearchMovies.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchSearchMovies.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.searchMovies = action.payload.results;
      state.totalPages = action.payload.total_pages;
    },
    [fetchSearchMovies.rejected]: (state, action) => {
      state.status = 'rejected';
      state.status = action.payload;
    },
  }
});

const {reducer} = searchSlice;
export default reducer;