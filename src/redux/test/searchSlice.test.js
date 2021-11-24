import reducer, {fetchSearchMovies} from "../searchSlice";

describe('fetchSearchMovies reducer', () => {
  const initialState = {
    searchMovies: [],
    totalPages: 10,
    status: null,
    error: null
  };
  
  test('sets status loading when fetchSearchMovies is pending', () => {
    const action = { type: fetchSearchMovies.pending.type };
    const state = reducer(initialState, action);
    expect(state).toEqual({ 
      searchMovies: [],
      totalPages: 10,
      status: 'loading',
      error: null
      });
  });

  test('sets the status resolved and add array of results in searchMovies when fetchSearchMovies is fulfilled', () => {
    const action = { type: fetchSearchMovies.fulfilled.type, payload: { page: 1, results: [{'id': 819}, {'id': 812}, {'id': 123}, {'id': 546}, {'id': 55}, {'id': 3}, {'id': 167}], total_pages: 2} };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      searchMovies: [{'id': 819}, {'id': 812}, {'id': 123}, {'id': 546}, {'id': 55}, {'id': 3}, {'id': 167}],
      totalPages: 2,
      status: 'resolved',
      error: null
    });
  });

  test('sets status rejected when fetchSearchMovies is rejected', () => {
    const action = { type: fetchSearchMovies.rejected.type, payload: { error: 'some error' } };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      searchMovies: [],
      totalPages: 10,
      status: 'rejected',
      error: { error: 'some error' }
    });
  });
});