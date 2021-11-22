import ToggleButtons from '../../toggle-buttons/toggle-buttons';
import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import { Container } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUpcomingMovies } from '../../../redux/upcomingMoviesSlice';

const UpcomingMovies = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const lang = useSelector(state => state.appReducer.lang);
  const { status } = useSelector(state => state.upcomingReducer);
  const movies = useSelector(state => state.upcomingReducer.upcomingMovies);
  const totalPages = useSelector(state => state.upcomingReducer.totalPages);

  useEffect(() => {
    dispatch(fetchUpcomingMovies({lang, page}))
  }, [dispatch, lang, page]);

  return (
    <Container maxWidth="xl">
      <ToggleButtons/>
      <ErrorBoundary>
        {status === 'loading' && <div className="loading">Loading...</div>}
        <MovieList data={movies}/>
      </ErrorBoundary>
      <BasicPagination setPage={setPage} countPages={totalPages}/>
    </Container>
  )
}

export default UpcomingMovies;