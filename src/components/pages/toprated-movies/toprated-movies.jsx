import ToggleButtons from '../../toggle-buttons/toggle-buttons';
import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import { SpinnerCircularFixed } from 'spinners-react';
import { Container } from '@mui/material';
import { useTopratedMovies } from './use-toprated-movies';

const TopRatedMovies = () => {
  
  const { setPage, status, movies, totalPages } = useTopratedMovies(1);

  return (
    <Container maxWidth="xl">
      <ToggleButtons/>
      <ErrorBoundary>
      {status === 'loading' && <SpinnerCircularFixed style={{display: 'block', margin: '40px auto'}}/>}
        <MovieList data={movies}/>
      </ErrorBoundary>
      <BasicPagination setPage={setPage} countPages={totalPages}/>
    </Container>
  )
}

export default TopRatedMovies;