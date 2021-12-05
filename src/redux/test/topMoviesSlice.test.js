import reducer, {fetchTopMovies} from "../topMoviesSlice";

describe('fetchTopMovies reducer', () => {
  const initialState = {
    topMovies: [],
    totalPages: 10,
    status: null,
    error: null
  };
  
  test('sets status loading when fetchTopMovies is pending', () => {
    const action = { type: fetchTopMovies.pending.type };
    const state = reducer(initialState, action);
    expect(state).toEqual({ 
      topMovies: [],
      totalPages: 10,
      status: 'loading',
      error: null
      });
  });

  test('sets the status resolved and add array of results in topMovies when fetchTopMovies is fulfilled', () => {
    const action = { type: fetchTopMovies.fulfilled.type, payload: { page: 1, results: [{'id': 819}, {'id': 812}, {'id': 123}, {'id': 546}, {'id': 55}, {'id': 3}, {'id': 167}], total_pages: 2} };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      topMovies: [{'id': 819}, {'id': 812}, {'id': 123}, {'id': 546}, {'id': 55}, {'id': 3}, {'id': 167}],
      totalPages: 2,
      status: 'resolved',
      error: null
    });
  });

  test('sets status rejected when fetchTopMovies is rejected', () => {
    const action = { type: fetchTopMovies.rejected.type, payload: { error: 'some error' } };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      topMovies: [],
      totalPages: 10,
      status: 'rejected',
      error: { error: 'some error' }
    });
  });
});