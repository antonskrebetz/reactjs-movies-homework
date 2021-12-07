import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import Spinner from '../../spinner/spinner';
import { useTopratedMovies } from './use-toprated-movies';

const TopRatedMovies = () => {
  
  const { setPage, status, movies, totalPages } = useTopratedMovies(1);

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

export default TopRatedMovies;