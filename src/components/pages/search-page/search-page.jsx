import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import Spinner from '../../spinner/spinner';
import { useSearchPage } from './use-search-page';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import './search-page.scss';

const SearchPage = () => {
  let [searchParams] = useSearchParams();
  let queryText = searchParams.get("query");
  let queryPage = searchParams.get("page");

  const {status, totalPages, movies, genresStatus} = useSearchPage(queryText, queryPage);
  const { t } = useTranslation();
  
  return (
    <>
      <h2 className="search-results">
        {movies.length ? `${t('searchResl')}: «${queryText}»` : `NO RESULTS FOUND: «${queryText}»`}
      </h2>
      {status === 'loading' && <Spinner/>}
      <ErrorBoundary>
        {genresStatus === 'loading' ? <Spinner/> : <MovieList data={movies}/>}
      </ErrorBoundary>
      <BasicPagination actualPage={queryPage} query={queryText} countPages={totalPages}/>
    </>
  )
}

export default SearchPage;