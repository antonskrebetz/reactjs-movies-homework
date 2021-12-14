import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ToggleButtons from '../../toggle-buttons/toggle-buttons';
import ErrorBoundary from '../../error-boundary/error-boundary';
import Spinner from '../../spinner/spinner';
import { useTopratedMovies } from './use-toprated-movies';
import { useSearchParams } from 'react-router-dom';

const TopRatedMovies = () => {
  let [searchParams] = useSearchParams();
  const { status, movies, totalPages, genresStatus } = useTopratedMovies(searchParams.get("page"));
  
  return (
    <>
      <ToggleButtons />
      {status === 'loading' && <Spinner/>}
      <ErrorBoundary>
        {genresStatus === 'loading' ? <Spinner/> : <MovieList data={movies}/>}
      </ErrorBoundary>
      <BasicPagination actualPage={searchParams.get("page")} countPages={totalPages}/>
    </>
  )
}

export default TopRatedMovies;