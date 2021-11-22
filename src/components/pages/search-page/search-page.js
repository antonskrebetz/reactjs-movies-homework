import ToggleButtons from '../../toggle-buttons/toggle-buttons';
import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import { Container } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSearchMovies } from '../../../redux/searchSlice';
import './search-page.scss';

const SearchPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const lang = useSelector(state => state.appReducer.lang);
  const query = useSelector(state => state.appReducer.query);
  const { status } = useSelector(state => state.searchReducer);
  const movies = useSelector(state => state.searchReducer.searchMovies);
  const totalPages = useSelector(state => state.searchReducer.totalPages);

  useEffect(() => {
    dispatch(fetchSearchMovies({lang, query, page}))
  }, [dispatch, query, lang, page]);
  
  return (
    <Container maxWidth="xl">
      <ToggleButtons/>
      <ErrorBoundary>
        <h2 className="search-results">
          {movies.length ? `SEARCH RESULTS: «${query}»` : `NO RESULTS FOUND: «${query}»`}
        </h2>
        {status === 'loading' && <div className="loading">Loading...</div>}
        <MovieList data={movies}/>
      </ErrorBoundary>
      <BasicPagination setPage={setPage} countPages={totalPages}/>
    </Container>
  )
}

export default SearchPage;