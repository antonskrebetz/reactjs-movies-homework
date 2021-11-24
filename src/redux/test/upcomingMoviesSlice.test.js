import reducer, {fetchUpcomingMovies} from "../upcomingMoviesSlice";

describe('fetchUpcomingMovies reducer', () => {
  const initialState = {
    upcomingMovies: [],
    totalPages: 10,
    status: null,
    error: null
  };
  
  test('sets status loading when fetchUpcomingMovies is pending', () => {
    const action = { type: fetchUpcomingMovies.pending.type };
    const state = reducer(initialState, action);
    expect(state).toEqual({ 
      upcomingMovies: [],
      totalPages: 10,
      status: 'loading',
      error: null
      });
  });

  test('sets the status resolved and add array of results in upcomingMovies when fetchUpcomingMovies is fulfilled', () => {
    const action = { type: fetchUpcomingMovies.fulfilled.type, payload: { page: 1, results: [{'id': 819}, {'id': 812}, {'id': 123}, {'id': 546}, {'id': 55}, {'id': 3}, {'id': 167}], total_pages: 2} };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      upcomingMovies: [{'id': 819}, {'id': 812}, {'id': 123}, {'id': 546}, {'id': 55}, {'id': 3}, {'id': 167}],
      totalPages: 2,
      status: 'resolved',
      error: null
    });
  });

  test('sets status rejected when fetchUpcomingMovies is rejected', () => {
    const action = { type: fetchUpcomingMovies.rejected.type, payload: { error: 'some error' } };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      upcomingMovies: [],
      totalPages: 10,
      status: 'rejected',
      error: { error: 'some error' }
    });
  });
});
