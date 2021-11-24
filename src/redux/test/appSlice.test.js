import reducer, {fetchMovieGenres, changeLanguage, changeSearchText} from "../appSlice";

describe('AppSlice reducer', () => {

  describe('fetchMovieGenres reducer', () => {
    const initialState = {
      genresStatus: null,
      genresError: null,
      movieGenres: []
    };
    
    test('sets status loading when fetchMovieGenres is pending', () => {
      const action = { type: fetchMovieGenres.pending.type };
      const state = reducer(initialState, action);
      expect(state).toEqual({ 
        genresStatus: 'loading',
        genresError: null,
        movieGenres: []
        });
    });
  
    test('sets the status resolved and add array of results in movieGenres when fetchMovieGenres is fulfilled', () => {
      const action = { type: fetchMovieGenres.fulfilled.type, payload: { genres: [{'id': 819}, {'id': 812}, {'id': 123}, {'id': 546}, {'id': 55}, {'id': 3}, {'id': 167}] } };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        genresStatus: 'resolved',
        genresError: null,
        movieGenres: [{'id': 819}, {'id': 812}, {'id': 123}, {'id': 546}, {'id': 55}, {'id': 3}, {'id': 167}]
      });
    });
  
    test('sets genresStatus rejected when fetchMovieGenres is rejected', () => {
      const action = { type: fetchMovieGenres.rejected.type, payload: { error: 'some error' } };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        genresStatus: 'rejected',
        genresError: { error: 'some error' },
        movieGenres: []
      });
    });
  });

  describe('changeLanguage reducer', () => {
    const initialState = {
      lang: 'en'
    };
    
    test('sets lang when changeLanguage changed', () => {
      const action = { type: changeLanguage, payload: {value: 'ru'} };
      const state = reducer(initialState, action);
      expect(state).toEqual({ 
        lang: 'ru'
      });
    });
  });

  describe('changeSearchText reducer', () => {
    const initialState = {
      query: 'search'
    };
    
    test('sets query when changeSearchText changed', () => {
      const action = { type: changeSearchText, payload: {text: 'pirates'} };
      const state = reducer(initialState, action);
      expect(state).toEqual({ 
        query: 'pirates'
      });
    });
  });

});