import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ToggleButtons from '../../toggle-buttons/toggle-buttons';
import ErrorBoundary from '../../error-boundary/error-boundary';
import Spinner from '../../spinner/spinner';
import { useUpcomingMovies } from './use-upcoming-movies';
import { useSearchParams } from 'react-router-dom';

const UpcomingMovies = () => {
  let [searchParams] = useSearchParams();
  const {status, totalPages, movies, genresStatus} = useUpcomingMovies(searchParams.get("page"));

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

export default UpcomingMovies;