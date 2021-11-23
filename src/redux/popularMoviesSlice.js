import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../services/http.hook';

const _apiBase = 'https://api.themoviedb.org/3/';
const _apiKey = 'api_key=a60262500ac52b0699a0d49e7f802ffa';

export const fetchPopularMovies = createAsyncThunk(
  'popular/fetchPopularMovies',
  ({lang, page}) => {
    const {request} = useHttp();
    return request(`${_apiBase}movie/popular?${_apiKey}&language=${lang}&page=${page}`);
  }
);

const initialState = {
  popularMovies: [],
  totalPages: 10,
  allMovieGenres: [],
  status: null,
  error: null
};

const popularSlice = createSlice({
  name: 'popular',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPopularMovies.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchPopularMovies.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.popularMovies = action.payload.results;
      state.totalPages = action.payload.total_pages;
    },
    [fetchPopularMovies.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  }
});

const {reducer} = popularSlice;
export default reducer;