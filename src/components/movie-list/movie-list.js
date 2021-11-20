import MovieCard from '../movie-card/movie-card';
import './movie-list.scss';

const MovieList = ({data, genres}) => {
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
            genres={el.genre_ids}
          />)
      }
    </div>
  )
}

export default MovieList;