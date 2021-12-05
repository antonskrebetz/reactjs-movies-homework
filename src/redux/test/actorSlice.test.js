import reducer, {fetchActorImages, fetchActorMovies} from "../actorSlice";

describe('MovieSlice', () => {

  describe('fetchActorImages reducer', () => {
    const initialState = {
      imagesStatus: null,
      imagesError: null,
      actorImages: [],
    };
    
    test('sets imagesStatus loading when fetchActorImages is pending', () => {
      const action = { type: fetchActorImages.pending.type };
      const state = reducer(initialState, action);
      expect(state).toEqual({ 
        imagesStatus: 'loading',
        imagesError: null,
        actorImages: [],
       });
    });

    test('sets the imagesStatus resolved and add array of results in actorImages when fetchActorImages is fulfilled', () => {
      const action = { type: fetchActorImages.fulfilled.type, payload: { id: 550, profiles: [{'file_path': '/fCay.jpg'}, {'file_path': '/fCsdfgay.jpg'}]} };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        imagesStatus: 'resolved',
        imagesError: null,
        actorImages: [{'file_path': '/fCay.jpg'}, {'file_path': '/fCsdfgay.jpg'}],
      });
    });

    test('sets imagesStatus rejected when fetchActorImages is rejected', () => {
      const action = { type: fetchActorImages.rejected.type, payload: { error: 'some error' } };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        imagesStatus: 'rejected',
        imagesError: { error: 'some error' },
        actorImages: []
      });
    });
  });

  describe('fetchActorMovies reducer', () => {
    const initialState = {
      moviesStatus: null,
      moviesError: null,
      actorMovies: []
    };
    
    test('sets moviesStatus loading when fetchActorMovies is pending', () => {
      const action = { type: fetchActorMovies.pending.type };
      const state = reducer(initialState, action);
      expect(state).toEqual({ 
        moviesStatus: 'loading',
        moviesError: null,
        actorMovies: []
       });
    });

    test('sets moviesStatus resolved and add arrays of results in actorMovies when fetchActorMovies is fulfilled', () => {
      const action = { type: fetchActorMovies.fulfilled.type, payload: { id: 550, cast: [{'id': 819}, {'id': 812}, {'id': 123}, {'id': 546}, {'id': 55}]} };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        moviesStatus: 'resolved',
        moviesError: null,
        actorMovies: [{'id': 819}, {'id': 812}, {'id': 123}, {'id': 546}, {'id': 55}]
      });
    });

    test('sets moviesStatus rejected when fetchActorMovies is rejected', () => {
      const action = { type: fetchActorMovies.rejected.type, payload: { error: 'some error' } };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        moviesStatus: 'rejected',
        moviesError:  { error: 'some error' },
        actorMovies: []
      });
    });
  });

});