import ToggleButtons from '../../toggle-buttons/toggle-buttons';
import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import { Container } from '@mui/material';
import useTheMovieDB from '../../../services/TMDb-service';
import { useState, useEffect } from 'react';

const PopularMovies = () => {
  const [popular, setPopular] = useState([]);
  const [genres, setGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [countPages, setCountPages] = useState();
  const movies = new useTheMovieDB();

  const popularMovies = async () => {
    const result = await movies.getPopularMovies(page);
    setPopular(result.results);
    setCountPages(result.total_pages);
  }

  const genresMovie = async () => {
    const result = await movies.getMovieGenres();
    setGenres(result.genres);
  }

  useEffect(() => {
    popularMovies();
    genresMovie();
  }, [page]);
  
  return (
    <Container maxWidth="xl">
      <ToggleButtons/>
      <ErrorBoundary>
        <MovieList data={popular}/>
      </ErrorBoundary>
      <BasicPagination setPage={setPage} countPages={countPages}/>
    </Container>
  )
}

export default PopularMovies;