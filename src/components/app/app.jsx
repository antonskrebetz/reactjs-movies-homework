import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from '@mui/material';
import Header from '../header/header';
import PopularMovies from '../pages/popular-movies/popular-movies';
import TopRatedMovies from '../pages/toprated-movies/toprated-movies';
import UpcomingMovies from '../pages/upcoming-movies/upcoming-movies';
import ActorPage from '../pages/actor-page/actor-page';
import MoviePage from '../pages/movie-page/movie-page';
import SearchPage from '../pages/search-page/search-page';
import Page404 from "../pages/404/404";
import './app.scss';

const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={ <PopularMovies /> }/>
            <Route path="/toprated" element={ <TopRatedMovies /> }/>
            <Route path="/upcoming" element={ <UpcomingMovies /> }/>
            <Route path="/search" element={ <SearchPage/> }/>
            <Route path="actor/:actorId" element={ <ActorPage/> }/>
            <Route path="movie/:movieId" element={ <MoviePage/> }/>
            <Route path="*" element={ <Page404/> }/>
          </Routes>
        </Container>
      </Router>
    </>
  )
}

export default App;