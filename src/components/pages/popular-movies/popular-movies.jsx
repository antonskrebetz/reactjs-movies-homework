import ToggleButtons from '../../toggle-buttons/toggle-buttons';
import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import { SpinnerCircularFixed } from 'spinners-react';
import { Container } from '@mui/material';
import { usePopularMovies } from './use-popular-movies';

const PopularMovies = () => {

  const {setPage, status, totalPages, movies} = usePopularMovies(1); 
  return (
    <Container maxWidth="xl">
      <ToggleButtons/>
      {status === 'loading' && <SpinnerCircularFixed style={{margin: '40px auto', display: 'block'}}/>}
      <ErrorBoundary>
        <MovieList data={movies}/>
      </ErrorBoundary>
      <BasicPagination setPage={setPage} countPages={totalPages}/>
    </Container>
  )
}

export default PopularMovies;