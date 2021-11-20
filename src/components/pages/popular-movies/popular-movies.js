import ToggleButtons from '../../toggle-buttons/toggle-buttons';
import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import { Container } from '@mui/material';
import useTheMovieDB from '../../../services/TMDb-service';
import { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';

const PopularMovies = () => {
  const [popular, setPopular] = useState([]);
  const [genres, setGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [countPages, setCountPages] = useState();
  const movies = new useTheMovieDB();
  const lang = useSelector(state => state.appReducer.lang);

  const popularMovies = async () => {
    const result = await movies.getPopularMovies(lang, page);
    setPopular(result.results);
    setCountPages(result.total_pages);
  }

  const AllGenresMovie = async () => {
    const result = await movies.getMovieGenres();
    setGenres(result.genres);
  }

  useEffect(() => {
    popularMovies();
    AllGenresMovie();
  }, [lang, page]);

  return (
    <Container maxWidth="xl">
      <ToggleButtons/>
      <ErrorBoundary>
        <MovieList data={popular} genres={genres}/>
      </ErrorBoundary>
      <BasicPagination setPage={setPage} countPages={countPages}/>
    </Container>
  )
}

export default PopularMovies;