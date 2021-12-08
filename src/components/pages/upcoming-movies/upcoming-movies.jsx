import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import Spinner from '../../spinner/spinner';
import { useUpcomingMovies } from './use-upcoming-movies';
import useQuery from '../../../services/use-query';

const UpcomingMovies = () => {
  let query = useQuery();
  const {status, totalPages, movies} = useUpcomingMovies(query.get("page"));

  return (
    <>
      <ErrorBoundary>
      {status === 'loading' && <Spinner/>}
        <MovieList data={movies}/>
      </ErrorBoundary>
      <BasicPagination actualPage={query.get("page")} countPages={totalPages}/>
    </>
  )
}

export default UpcomingMovies;