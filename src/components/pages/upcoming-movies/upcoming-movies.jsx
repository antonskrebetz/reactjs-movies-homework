import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import Spinner from '../../spinner/spinner';
import { useUpcomingMovies } from './use-upcoming-movies';

const UpcomingMovies = () => {

  const {setPage, status, totalPages, movies} = useUpcomingMovies(1);

  return (
    <>
      <ErrorBoundary>
      {status === 'loading' && <Spinner/>}
        <MovieList data={movies}/>
      </ErrorBoundary>
      <BasicPagination setPage={setPage} countPages={totalPages}/>
    </>
  )
}

export default UpcomingMovies;