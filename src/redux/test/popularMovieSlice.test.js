import reducer, {fetchPopularMovies} from "../popularMoviesSlice";

describe('fetchPopularMovies reducer', () => {
  const initialState = {
    popularMovies: [],
    totalPages: 10,
    status: null,
    error: null
  };
  
  test('sets status loading when fetchPopularMovies is pending', () => {
    const action = { type: fetchPopularMovies.pending.type };
    const state = reducer(initialState, action);
    expect(state).toEqual({ 
      popularMovies: [],
      totalPages: 10,
      status: 'loading',
      error: null
      });
  });

  test('sets the status resolved and add array of results in popularMovies when fetchPopularMovies is fulfilled', () => {
    const action = { type: fetchPopularMovies.fulfilled.type, payload: { page: 1, results: [{'id': 819}, {'id': 812}, {'id': 123}, {'id': 546}, {'id': 55}, {'id': 3}, {'id': 167}], total_pages: 2} };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      popularMovies: [{'id': 819}, {'id': 812}, {'id': 123}, {'id': 546}, {'id': 55}, {'id': 3}, {'id': 167}],
      totalPages: 2,
      status: 'resolved',
      error: null
    });
  });

  test('sets status rejected when fetchPopularMovies is rejected', () => {
    const action = { type: fetchPopularMovies.rejected.type, payload: { error: 'some error' } };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      popularMovies: [],
      totalPages: 10,
      status: 'rejected',
      error: { error: 'some error' }
    });
  });
});
