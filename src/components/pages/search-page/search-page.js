import ToggleButtons from '../../toggle-buttons/toggle-buttons';
import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import { Container } from '@mui/material';
import useTheMovieDB from '../../../services/TMDb-service';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './search-page.scss';

const SearchPage = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [countPages, setCountPages] = useState();
  const lang = useSelector(state => state.appReducer.lang);
  const query = useSelector(state => state.appReducer.query);

  const movies = new useTheMovieDB();
  
  const search = async () => {
    const result = await movies.getSearchMovies(query, lang, page);
    setSearchMovies(result.results);
    setCountPages(result.total_pages);
  }

  const genresMovie = async () => {
    const result = await movies.getMovieGenres();
    setGenres(result.genres);
  }

  useEffect(() => {
    search();
    genresMovie();
  }, [query, lang, page]);
  
  return (
    <Container maxWidth="xl">
      <ToggleButtons/>
      <ErrorBoundary>
        <h2 className="search-results">
          {searchMovies.length ? `SEARCH RESULTS: «${query}»` : `NO RESULTS FOUND: «${query}»`}
        </h2>
        <MovieList data={searchMovies}/>
      </ErrorBoundary>
      <BasicPagination setPage={setPage} countPages={countPages}/>
    </Container>
  )
}

export default SearchPage;