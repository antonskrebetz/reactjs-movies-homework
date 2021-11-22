import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const _apiBase = 'https://api.themoviedb.org/3/';
const _apiKey = 'api_key=a60262500ac52b0699a0d49e7f802ffa';

export const fetchUpcomingMovies = createAsyncThunk(
  'upcoming/fetchUpcomingMovies',
  async function({lang, page}, {rejectWithValue}) {
    try {
      const response = await fetch(`${_apiBase}movie/upcoming?${_apiKey}&language=${lang}&page=${page}`);

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
  upcomingMovies: [],
  totalPages: 10,
  allMovieGenres: [],
  status: null,
  error: null
};

const upcomingSlice = createSlice({
  name: 'upcoming',
  initialState,
  reducers: {
    upcomingChangePages(state, action) {
      state.page = action.payload.value
    },
  },
  extraReducers: {
    [fetchUpcomingMovies.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchUpcomingMovies.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.upcomingMovies = action.payload.results;
      state.totalPages = action.payload.total_pages;
    },
    [fetchUpcomingMovies.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  }
});

const {actions, reducer} = upcomingSlice;
export default reducer;
export const {upcomingChangePages} = actions;