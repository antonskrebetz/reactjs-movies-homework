import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { httpService, _apiBase, _apiKey } from '../services/http-service';

export const fetchSearchMovies = createAsyncThunk(
  'search/fetchSearchMovies',
  ({lang, query, page}) => {
    const {request} = httpService();
    return request(`${_apiBase}search/movie?${_apiKey}&language=${lang}&query=${query}&page=${page}&include_adult=false`);
  }
);

const initialState = {
  searchMovies: [],
  totalPages: 10,
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
      state.error = action.payload;
    },
  }
});

const {reducer} = searchSlice;
export default reducer;