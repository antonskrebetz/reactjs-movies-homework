import appReducer from './appSlice';
import popularReducer from './popularMoviesSlice';
import topReducer from './topMoviesSlice';
import upcomingReducer from './upcomingMoviesSlice';
import searchReducer from './searchSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    appReducer, 
    popularReducer,
    topReducer, 
    upcomingReducer,
    searchReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;