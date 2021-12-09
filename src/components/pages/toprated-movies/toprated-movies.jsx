import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import Spinner from '../../spinner/spinner';
import { useTopratedMovies } from './use-toprated-movies';
import useQuery from '../../../services/use-query';


const TopRatedMovies = () => {
  let query = useQuery();
  const { status, movies, totalPages, genresStatus } = useTopratedMovies(query.get("page"));
  
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

export default TopRatedMovies;