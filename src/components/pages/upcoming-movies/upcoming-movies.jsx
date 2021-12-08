import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import Spinner from '../../spinner/spinner';
import { useUpcomingMovies } from './use-upcoming-movies';
import { useParams } from 'react-router-dom';

const UpcomingMovies = () => {
  let {moviePage} = useParams();
  const {status, totalPages, movies} = useUpcomingMovies(moviePage);

  return (
    <>
      <ErrorBoundary>
      {status === 'loading' && <Spinner/>}
        <MovieList data={movies}/>
      </ErrorBoundary>
      <BasicPagination countPages={totalPages}/>
    </>
  )
}

export default UpcomingMovies;