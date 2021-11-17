import ToggleButtons from '../../toggle-buttons/toggle-buttons';
import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import { Container } from '@mui/material';
import useTheMovieDB from '../../../services/TMDb-service';
import { useState, useEffect } from 'react';

const TopRatedMovies = () => {
  const [topRated, setTopRated] = useState([]);
  const [genres, setGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [countPages, setCountPages] = useState();
  const movies = new useTheMovieDB();

  const topRatedMovies = async () => {
    const result = await movies.getTopRatedMovies(page);
    setTopRated(result.results);
    setCountPages(result.total_pages);
  }

  const genresMovie = async () => {
    const result = await movies.getMovieGenres();
    setGenres(result.genres);
  }

  useEffect(() => {
    topRatedMovies();
    genresMovie();
  }, [page]);

  return (
    <Container maxWidth="xl">
      <ToggleButtons/>
      <ErrorBoundary>
        <MovieList data={topRated}/>
      </ErrorBoundary>
      <BasicPagination setPage={setPage} countPages={countPages}/>
    </Container>
  )
}

export default TopRatedMovies;