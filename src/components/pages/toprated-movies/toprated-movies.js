import ToggleButtons from '../../toggle-buttons/toggle-buttons';
import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import { Container } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopMovies } from '../../../redux/topMoviesSlice';

const TopRatedMovies = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const lang = useSelector(state => state.appReducer.lang);
  const { status } = useSelector(state => state.topReducer)
  const movies = useSelector(state => state.topReducer.topMovies);
  const totalPages = useSelector(state => state.topReducer.totalPages);


  useEffect(() => {
    dispatch(fetchTopMovies({lang, page}))
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

export default TopRatedMovies;