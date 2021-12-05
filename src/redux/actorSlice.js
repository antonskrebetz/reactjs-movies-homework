import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { httpService, _apiBase, _apiKey } from '../services/http-service';

const {request} = httpService();

export const fetchPerson = createAsyncThunk(
  'actor/fetchPerson',
  ({id, lang}) => {
    return request(`${_apiBase}person/${id}?${_apiKey}&language=${lang}`);
  }
);

export const fetchActorImages = createAsyncThunk(
  'actor/fetchActorImages',
  ({id}) => {
    return request(`${_apiBase}person/${id}/images?${_apiKey}`);
  }
);

export const fetchActorMovies = createAsyncThunk(
  'actor/fetchActorMovies',
  ({id, lang}) => {
    return request(`${_apiBase}person/${id}/movie_credits?${_apiKey}&language=${lang}`);
  }
);

const initialState = {
  personStatus: null,
  personError: null,
  imagesStatus: null,
  imagesError: null,
  actorImages: [],
  moviesStatus: null,
  moviesError: null,
  actorMovies: []
};

const actorSlice = createSlice({
  name: 'actor',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPerson.pending]: (state) => {
      state.personStatus = 'loading';
      state.personError = null;
    },
    [fetchPerson.fulfilled]: (state, action) => {
      state.personStatus = 'resolved';
      state.searchMovies = action.payload.results;
    },
    [fetchPerson.rejected]: (state, action) => {
      state.personStatus = 'rejected';
      state.personError = action.payload;
    },
    [fetchActorImages.pending]: (state) => {
      state.imagesStatus = 'loading';
      state.imagesError = null;
    },
    [fetchActorImages.fulfilled]: (state, action) => {
      state.imagesStatus = 'resolved';
      state.actorImages = action.payload.profiles.slice(0, 4);
    },
    [fetchActorImages.rejected]: (state, action) => {
      state.imagesStatus = 'rejected';
      state.imagesError = action.payload;
    },
    [fetchActorMovies.pending]: (state) => {
      state.moviesStatus = 'loading';
      state.moviesError = null;
    },
    [fetchActorMovies.fulfilled]: (state, action) => {
      state.moviesStatus = 'resolved';
      state.actorMovies = action.payload.cast;
    },
    [fetchActorMovies.rejected]: (state, action) => {
      state.moviesStatus = 'rejected';
      state.moviesError =  action.payload;
    },
  }
});

const {reducer} = actorSlice;
export default reducer;