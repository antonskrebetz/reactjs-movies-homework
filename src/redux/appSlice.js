import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lang: 'en',
  query: 'search',
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