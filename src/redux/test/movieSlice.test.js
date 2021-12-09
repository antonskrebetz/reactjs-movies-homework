import reducer, {fetchMovieImages, fetchMovieCast, fetchMovieRecommend, toggleCastList} from "../movieSlice";

describe('MovieSlice reducer', () => {

  describe('fetchMovieImages reducer', () => {
    const initialState = {
      imagesStatus: null,
      imagesError: null,
      movieImages: [],
    };
    
    test('sets imagesStatus loading when fetchMovieImages is pending', () => {
      const action = { type: fetchMovieImages.pending.type };
      const state = reducer(initialState, action);
      expect(state).toEqual({ 
        imagesStatus: 'loading',
        imagesError: null,
        movieImages: [],
       });
    });

    test('sets the imagesStatus resolved and add array of results in movieImages when fetchMovieImages is fulfilled', () => {
      const action = { type: fetchMovieImages.fulfilled.type, payload: { id: 550, backdrops: [{'file_path': '/fCay.jpg'}, {'file_path': '/fCsdfgay.jpg'}]} };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        imagesStatus: 'resolved',
        imagesError: null,
        movieImages: [{'file_path': '/fCay.jpg'}, {'file_path': '/fCsdfgay.jpg'}],
      });
    });

    test('sets imagesStatus rejected when fetchMovieImages is rejected', () => {
      const action = { type: fetchMovieImages.rejected.type, payload: { error: 'some error' } };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        imagesStatus: 'rejected',
        imagesError: { error: 'some error' },
        movieImages: [],
      });
    });
  });

  describe('fetchMovieCast reducer', () => {
    const initialState = {
      castStatus: null,
      castError: null,
      movieCast: [],
      isShortListCast: true,
      shortListCast: []
    };
    
    test('sets castStatus loading when fetchMovieCast is pending', () => {
      const action = { type: fetchMovieCast.pending.type };
      const state = reducer(initialState, action);
      expect(state).toEqual({ 
        castStatus: 'loading',
        castError: null,
        movieCast: [],
        isShortListCast: true,
        shortListCast: [],
       });
    });

    test('sets the castStatus resolved and add arrays of results in movieCast & shortListCast (max lenght = 6 items) when fetchMovieCast is fulfilled', () => {
      const action = { type: fetchMovieCast.fulfilled.type, payload: { id: 550, cast: [{'id': 819}, {'id': 812}, {'id': 123}, {'id': 546}, {'id': 55}, {'id': 3}, {'id': 167}, {'id': 88}, {'id': 33}, {'id': 12}]} };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        castStatus: 'resolved',
        castError: null,
        movieCast: [{'id': 819}, {'id': 812}, {'id': 123}, {'id': 546}, {'id': 55}, {'id': 3}, {'id': 167}, {'id': 88}, {'id': 33}, {'id': 12}],
        isShortListCast: true,
        shortListCast: [{'id': 819}, {'id': 812}, {'id': 123}, {'id': 546}, {'id': 55}, {'id': 3}],
      });
    });

    test('sets castStatus rejected when fetchMovieCast is rejected', () => {
      const action = { type: fetchMovieCast.rejected.type, payload: { error: 'some error' } };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        castStatus: 'rejected',
        castError: { error: 'some error' },
        movieCast: [],
        isShortListCast: true,
        shortListCast: [],
      });
    });
  });

  describe('fetchMovieRecommend reducer', () => {
    const initialState = {
      recommendStatus: null,
      recommendError: null,
      movieRecommend: []
    };
    
    test('sets recommendStatus loading when fetchMovieRecommend is pending', () => {
      const action = { type: fetchMovieRecommend.pending.type };
      const state = reducer(initialState, action);
      expect(state).toEqual({ 
        recommendStatus: 'loading',
        recommendError: null,
        movieRecommend: []
       });
    });

    test('sets the recommendStatus resolved and add array of results in movieRecommend when fetchMovieRecommend is fulfilled', () => {
      const action = { type: fetchMovieRecommend.fulfilled.type, payload: { page: 1, results: [{'id': 819}, {'id': 812}, {'id': 123}, {'id': 546}, {'id': 55}, {'id': 3}, {'id': 7}]} };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        recommendStatus: 'resolved',
        recommendError: null,
        movieRecommend: [{'id': 819}, {'id': 812}, {'id': 123}, {'id': 546}, {'id': 55}]
      });
    });

    test('sets recommendStatus rejected when fetchMovieRecommend is rejected', () => {
      const action = { type: fetchMovieRecommend.rejected.type, payload: { error: 'some error' } };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        recommendStatus: 'rejected',
        recommendError: { error: 'some error' },
        movieRecommend: []
      });
    });
  });

  describe('toggleCastList reducer', () => {
    const initialState = {
      isShortListCast: true
    };
    
    test('sets false when toggleCastList clicked', () => {
      const action = { type: toggleCastList };
      const state = reducer(initialState, action);
      expect(state).toEqual({ 
        isShortListCast: false
       });
    });
  });

});