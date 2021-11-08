import Header from '../header/header';
import MainPage from '../pages/main-page/main-page';
import ActorPage from '../pages/actor-page/actor-page';
import MoviePage from '../pages/movie-page/movie-page';
import './app.scss';

const App = () => {
  return (
    <>
      <Header />
      <MainPage />
      <ActorPage />
      <MoviePage />
    </>
  )
}

export default App;