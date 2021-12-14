import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ToggleButtons from '../../toggle-buttons/toggle-buttons';
import ErrorBoundary from '../../error-boundary/error-boundary';
import Spinner from '../../spinner/spinner';
import { usePopularMovies } from './use-popular-movies';
import { useSearchParams } from 'react-router-dom';

const PopularMovies = () => {
  let [searchParams] = useSearchParams();
  const { status, totalPages, movies, genresStatus } = usePopularMovies(searchParams.get("page")); 
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

export default PopularMovies;