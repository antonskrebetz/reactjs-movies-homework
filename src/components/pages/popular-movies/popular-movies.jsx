import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import Spinner from '../../spinner/spinner';
import { usePopularMovies } from './use-popular-movies';
import useQuery from '../../../services/use-query';

const PopularMovies = () => {
  let query = useQuery();
  const { status, totalPages, movies, genresStatus } = usePopularMovies(query.get("page")); 
  return (
    <>
      {status === 'loading' && <Spinner/>}
      <ErrorBoundary>
        {genresStatus === 'loading' ? <Spinner/> : <MovieList data={movies}/>}
      </ErrorBoundary>
      <BasicPagination actualPage={query.get("page")} countPages={totalPages}/>
    </>
  )
}

export default PopularMovies;