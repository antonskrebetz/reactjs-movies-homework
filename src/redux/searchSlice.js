import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const _apiBase = 'https://api.themoviedb.org/3/';
const _apiKey = 'api_key=a60262500ac52b0699a0d49e7f802ffa';

export const fetchSearchMovies = createAsyncThunk(
  'search/fetchSearchMovies',
  async function({lang, query, page}, {rejectWithValue}) {
    try {
      const response = await fetch(`${_apiBase}search/movie?${_apiKey}&language=${lang}&query=${query}&page=${page}&include_adult=false`);;

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
  searchMovies: [],
  totalPages: 10,
  allMovieGenres: [],
  status: null,
  error: null
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchChangePages(state, action) {
      state.page = action.payload.value
    },
  },
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
    [fetchSearchMovies.rejected]: (state) => {
      state.status = 'error';
    },
  }
});

const {actions, reducer} = searchSlice;
export default reducer;
export const {searchChangePages} = actions;