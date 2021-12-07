import MovieCard from '../movie-card/movie-card';
import './movie-list.scss';
import { useSelector } from 'react-redux';

const MovieList = ({data}) => {
  const movieGenres = useSelector(state => state.appReducer.movieGenres);
  
  return (
    <div className="movies">
      {
        data.map(el => 
          <MovieCard
            key={el.id} 
            id={el.id}
            vote={el.vote_average} 
            title={el.title}
            alt={el.title} 
            poster={el.poster_path}
            genres={el.genre_ids.map((item) => movieGenres.find((genre) => genre.id === item).name)}
          />)
      }
    </div>
  )
}

export default MovieList;