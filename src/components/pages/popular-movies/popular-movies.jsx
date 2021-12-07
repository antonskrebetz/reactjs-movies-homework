import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import Spinner from '../../spinner/spinner';
import { usePopularMovies } from './use-popular-movies';

const PopularMovies = () => {

  const {setPage, status, totalPages, movies} = usePopularMovies(1); 
  return (
    <>
      {status === 'loading' && <Spinner/>}
      <ErrorBoundary>
        <MovieList data={movies}/>
      </ErrorBoundary>
      <BasicPagination setPage={setPage} countPages={totalPages}/>
    </>
  )
}

export default PopularMovies;