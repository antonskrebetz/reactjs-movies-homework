import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { httpService, _apiBase, _apiKey } from '../services/http-service';

export const fetchUpcomingMovies = createAsyncThunk(
  'upcoming/fetchUpcomingMovies',
  ({lang, page}) => {
    const {request} = httpService()
    return request(`${_apiBase}movie/upcoming?${_apiKey}&language=${lang}&page=${page}`);
  }
);

const initialState = {
  upcomingMovies: [],
  totalPages: 10,
  status: null,
  error: null
};

const upcomingSlice = createSlice({
  name: 'upcoming',
  initialState,
  reducers: {},
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

const {reducer} = upcomingSlice;
export default reducer;