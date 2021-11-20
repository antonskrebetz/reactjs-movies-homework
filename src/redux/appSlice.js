import useTheMovieDB from '../services/TMDb-service';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  lang: 'en',
  moviesLoadingStatus: 'none',
  query: '',
  allMovieGenres: []
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeLanguage(state, action) {
      state.lang = action.payload.value
    },
    changeSearchText(state, action) {
      state.query = action.payload.text
    }
  }
});

const {actions, reducer} = appSlice;
export default reducer;
export const {
  changeLanguage,
  changeSearchText
} = actions;