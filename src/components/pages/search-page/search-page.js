import ToggleButtons from '../../toggle-buttons/toggle-buttons';
import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import { Container } from '@mui/material';
import useTheMovieDB from '../../../services/TMDb-service';
import { useState, useEffect } from 'react';

const SearchPage = () => {
  const [popular, setPopular] = useState([]);
  const [genres, setGenres] = useState([]);
  const movies = new useTheMovieDB();

  const popularMovies = async () => {
    const result = await movies.getPopularMovies();
    setPopular(result.results);
  }

  const genresMovie = async () => {
    const result = await movies.getMovieGenres();
    setGenres(result.genres);
  }

  useEffect(() => {
    popularMovies();
    genresMovie();
  }, []);
  
  return (
    <Container maxWidth="xl">
      <ToggleButtons/>
      <ErrorBoundary>
        <MovieList data={popular}/>
      </ErrorBoundary>
      <BasicPagination/>
    </Container>
  )
}

export default SearchPage;