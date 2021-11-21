import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const _apiBase = 'https://api.themoviedb.org/3/';
const _apiKey = 'api_key=a60262500ac52b0699a0d49e7f802ffa';

export const fetchPerson = createAsyncThunk(
  'actor/fetchPerson',
  async function({id, lang}, {rejectWithValue}) {
    try {
      const response = await fetch(`${_apiBase}person/${id}?${_apiKey}&language=${lang}`);

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

export const fetchActorImages = createAsyncThunk(
  'actor/fetchActorImages',
  async function({id}, {rejectWithValue}) {
    try {
      const response = await fetch(`${_apiBase}person/${id}/images?${_apiKey}`);

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

export const fetchActorMovies = createAsyncThunk(
  'actor/fetchActorMovies',
  async function({id, lang}, {rejectWithValue}) {
    try {
      const response = await fetch(`${_apiBase}person/${id}/movie_credits?${_apiKey}&language=${lang}`);

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
  reducers: {
    actorChangePages(state, action) {
      state.page = action.payload.value
    },
  },
  extraReducers: {
    [fetchPerson.pending]: (state) => {
      state.personStatus = 'loading';
      state.personError = null;
    },
    [fetchPerson.fulfilled]: (state, action) => {
      state.personStatus = 'resolved';
      state.searchMovies = action.payload.results;
    },
    [fetchPerson.rejected]: (state) => {
      state.personError = 'error';
    },
    [fetchActorImages.pending]: (state) => {
      state.imagesStatus = 'loading';
      state.imagesError = null;
    },
    [fetchActorImages.fulfilled]: (state, action) => {
      state.imagesStatus = 'resolved';
      state.actorImages = action.payload.profiles;
    },
    [fetchActorImages.rejected]: (state) => {
      state.imagesError = 'error';
    },
    [fetchActorMovies.pending]: (state) => {
      state.moviesStatus = 'loading';
      state.moviesError = null;
    },
    [fetchActorMovies.fulfilled]: (state, action) => {
      state.moviesStatus = 'resolved';
      state.actorMovies = action.payload.cast;
    },
    [fetchActorMovies.rejected]: (state) => {
      state.moviesError = 'error';
    },
  }
});

const {actions, reducer} = actorSlice;
export default reducer;
export const {actorChangePages} = actions;