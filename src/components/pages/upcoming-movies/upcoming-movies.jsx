import ToggleButtons from '../../toggle-buttons/toggle-buttons';
import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import { SpinnerCircularFixed } from 'spinners-react';
import { Container } from '@mui/material';
import { useUpcomingMovies } from './use-upcoming-movies';

const UpcomingMovies = () => {

  const {setPage, status, totalPages, movies} = useUpcomingMovies(1);

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

export default UpcomingMovies;