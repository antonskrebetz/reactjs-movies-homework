import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const _apiBase = 'https://api.themoviedb.org/3/';
const _apiKey = 'api_key=a60262500ac52b0699a0d49e7f802ffa';

export const fetchTopMovies = createAsyncThunk(
  'top/fetchTopMovies',
  async function({lang, page}, {rejectWithValue}) {
    try {
      const response = await fetch(`${_apiBase}movie/top_rated?${_apiKey}&language=${lang}&page=${page}`);

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
  topMovies: [],
  totalPages: 10,
  allMovieGenres: [],
  status: null,
  error: null
};

const topSlice = createSlice({
  name: 'top',
  initialState,
  reducers: {
    topChangePages(state, action) {
      state.page = action.payload.value
    },
  },
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
    [fetchTopMovies.rejected]: (state) => {
      state.status = 'error';
    },
  }
});

const {actions, reducer} = topSlice;
export default reducer;
export const {topChangePages} = actions;