import appReducer from './appSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {appReducer},
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;