import ToggleButtons from '../../toggle-buttons/toggle-buttons';
import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import { SpinnerCircularFixed } from 'spinners-react';
import { Container } from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { fetchPopularMovies } from '../../../redux/popularMoviesSlice';

const PopularMovies = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const lang = useSelector(state => state.appReducer.lang);
  const {status, error} = useSelector(state => state.popularReducer);
  const totalPages = useSelector(state => state.popularReducer.totalPages);
  const movies = useSelector(state => state.popularReducer.popularMovies);

  useEffect(() => {
    dispatch(fetchPopularMovies({lang, page}));
  }, [dispatch, page, lang]);

  return (
    <Container maxWidth="xl">
      <ToggleButtons/>
      {status === 'loading' && <SpinnerCircularFixed style={{display: 'block', margin: '40px auto'}}/>}
      <ErrorBoundary>
        <MovieList data={movies}/>
      </ErrorBoundary>
      <BasicPagination setPage={setPage} countPages={totalPages}/>
    </Container>
  )
}

export default PopularMovies;