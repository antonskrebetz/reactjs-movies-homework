import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import Spinner from '../../spinner/spinner';
import { useTopratedMovies } from './use-toprated-movies';
import { useParams } from 'react-router-dom';

const TopRatedMovies = () => {
  let {moviePage} = useParams();
  const { status, movies, totalPages } = useTopratedMovies(moviePage);

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

export default TopRatedMovies;