import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../services/http.hook';

const _apiBase = 'https://api.themoviedb.org/3/';
const _apiKey = 'api_key=a60262500ac52b0699a0d49e7f802ffa';

export const fetchTopMovies = createAsyncThunk(
  'top/fetchTopMovies',
  ({lang, page}) => {
    const {request} = useHttp();
    return request(`${_apiBase}movie/top_rated?${_apiKey}&language=${lang}&page=${page}`);
  }
);

const initialState = {
  topMovies: [],
  totalPages: 10,
  allMovieGenres: [],
  status: null,
  error: null
};

const topSlice = createSlice({
  name: 'top',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTopMovies.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchTopMovies.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.topMovies = action.payload.results;
      state.totalPages = action.payload.total_pages;
    },
    [fetchTopMovies.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  }
});

const {reducer} = topSlice;
export default reducer;