import ToggleButtons from '../../toggle-buttons/toggle-buttons';
import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import { SpinnerCircularFixed } from 'spinners-react';
import { Container } from '@mui/material';
import { useSearchPage } from './use-search-page';
import { useTranslation } from 'react-i18next';
import './search-page.scss';

const SearchPage = () => {

  const {setPage, status, query, totalPages, movies} = useSearchPage(1);
  const { t } = useTranslation();
  
  return (
    <Container maxWidth="xl">
      <ToggleButtons/>
      <ErrorBoundary>
        <h2 className="search-results">
          {movies.length ? `${t('searchResl')}: «${query}»` : `NO RESULTS FOUND: «${query}»`}
        </h2>
        {status === 'loading' && <SpinnerCircularFixed style={{display: 'block', margin: '40px auto'}}/>}
        <MovieList data={movies}/>
      </ErrorBoundary>
      <BasicPagination setPage={setPage} countPages={totalPages}/>
    </Container>
  )
}

export default SearchPage;