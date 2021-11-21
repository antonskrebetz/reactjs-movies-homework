import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const _apiBase = 'https://api.themoviedb.org/3/';
const _apiKey = 'api_key=a60262500ac52b0699a0d49e7f802ffa';

export const fetchPopularMovies = createAsyncThunk(
  'popular/fetchPopularMovies',
  async function({lang, page}, {rejectWithValue}) {
    try {
      const response = await fetch(`${_apiBase}movie/popular?${_apiKey}&language=${lang}&page=${page}`);

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
  popularMovies: [],
  totalPages: 10,
  allMovieGenres: [],
  status: null,
  error: null
};

const popularSlice = createSlice({
  name: 'popular',
  initialState,
  reducers: {
    popularChangePages(state, action) {
      state.page = action.payload.value
    },
  },
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
    [fetchPopularMovies.rejected]: (state) => {
      state.status = 'error';
    },
  }
});

const {actions, reducer} = popularSlice;
export default reducer;
export const {popularChangePages} = actions;