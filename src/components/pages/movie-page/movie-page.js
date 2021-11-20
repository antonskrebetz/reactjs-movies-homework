import ActorList from '../../actor-list/actor-list';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import { Container, Button } from '@mui/material';
import './movie-page.scss';
import poster from './poster.jpg';
import useTheMovieDB from '../../../services/TMDb-service';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


const MoviePage = () => {
  const [recommend, setRecommend] = useState([]);
  const [genres, setGenres] = useState([]);
  const [cast, setCast] = useState([]);
  const [images, setImages] = useState([]);
  const lang = useSelector(state => state.appReducer.lang)
  const movies = new useTheMovieDB();

  const recommendMovies = async () => {
    const result = await movies.getMovieRecommendations(550, lang);
    setRecommend(result.results);
  }

  const genresMovie = async () => {
    const result = await movies.getMovieGenres();
    setGenres(result.genres);
  }

  const castMovie = async () => {
    const result = await movies.getMovieCast(550, lang);
    setCast(result.cast);
  }

  const imagesMovie = async () => {
    const result = await movies.getMovieImages(550);
    setImages(result.backdrops);
  }

  useEffect(() => {
    recommendMovies();
    genresMovie();
    castMovie();
    imagesMovie();
  }, [lang]);

  return (
    <>
      <Container maxWidth={"xl"}>
        <div className="movie">
          <div className="movie-avatar">
            <img src={poster} alt="movie avatar" />
          </div>
          <div className="movie-info">
            <div className="movie-blocktitle">{lang === 'en' ? 'Title:' : 'Название:'}</div>
            <h1 className="movie-name">Movie Title</h1>
            <div className="movie-blocktitle">{lang === 'en' ? 'Overview:' : 'Описание:'}</div>
            <div className="movie-overview">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quas impedit at, perferendis unde, sequi recusandae odio quod accusantium, quisquam eveniet ducimus rerum deleniti! Asperiores quia possimus exercitationem nulla? Blanditiis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto deleniti voluptates saepe libero adipisci cumque totam, qui provident a necessitatibus ipsam quia illum minima eius dolorum quibusdam quod, magni tenetur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis reprehenderit facilis excepturi rerum quod voluptate placeat repudiandae non optio? Illum libero quos magni pariatur necessitatibus similique alias modi laborum quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laboriosam ducimus cum consequuntur pariatur, optio dolorem ex alias dolorum enim, delectus officia voluptate. Veritatis, consequatur numquam ipsum quae dolore voluptatum?
            </div>
            <div className="movie-blocktitle">{lang === 'en' ? 'Release date:' : 'Дата релиза:'}</div>
            <div className="movie-release">2021-04-15</div>
            <div className="movie-blocktitle">{lang === 'en' ? 'Revenue:' : 'Бюджет:'}</div>
            <div className="movie-revenue">$ 42 600 000</div>
            <div className="movie-blocktitle">{lang === 'en' ? 'Duration:' : 'Продолжительность:'}</div>
            <div className="movie-duration">02:14</div>
            <div className="movie-genres">
              <div>Genre - 1</div>
              <div>Genre - 2</div>
              <div>Genre - 2</div>
            </div>
            <div className="movie-cast">
              <div className="movie-cast_header">
                <div className="movie-cast_title">{lang === 'en' ? 'Top Billed Cast' : 'Популярные актёры'}</div>
                <Button variant="outlined" size="small" color="inherit">Show all</Button>
              </div>
              <ErrorBoundary>
                <ActorList data={cast.slice(0, 6)}/>
              </ErrorBoundary>
            </div>
            <div className="movie-images">
              <div className="movie-images_title">{lang === 'en' ? 'Images' : 'Кадры фильма'}</div>
              <div className="movie-images_list">
                {
                  images.slice(0,8).map((el, i) => 
                    <img src={`https://image.tmdb.org/t/p/w300${el.file_path}`} alt={'cadr from movie'} key={i}/>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="movie-reccomend">{lang === 'en' ? 'Recommendations' : 'Рекомендации'}</div>
          <ErrorBoundary>
            <MovieList data={recommend.slice(0, 5)}/>
          </ErrorBoundary>
        </div>
      </Container>
    </>
  )
}

export default MoviePage;