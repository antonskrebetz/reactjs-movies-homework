import Header from '../header/header';
import PopularMovies from '../pages/popular-movies/popular-movies';
import TopRatedMovies from '../pages/toprated-movies/toprated-movies';
import UpcomingMovies from '../pages/upcoming-movies/upcoming-movies';
import ActorPage from '../pages/actor-page/actor-page';
import MoviePage from '../pages/movie-page/movie-page';
import SearchPage from '../pages/search-page/search-page';
import './app.scss';

const App = () => {
  return (
    <>
      <Header />
      <PopularMovies />
      {/* <TopRatedMovies /> */}
      {/* <UpcomingMovies /> */}
      {/* <SearchPage /> */}
      {/* <ActorPage /> */}
      {/* <MoviePage /> */}
    </>
  )
}

export default App;