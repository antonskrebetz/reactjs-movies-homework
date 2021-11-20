
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import { Container } from '@mui/material';
import './actor-page.scss';
import avatar from './actor-avatar.jpg'
import useTheMovieDB from '../../../services/TMDb-service';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';


const ActorPage = () => {
  const [actorMovies, setActorMovies] = useState([]);
  const [actorImages, setActorImages] = useState([]);
  const [genres, setGenres] = useState([]);
  const lang = useSelector(state => state.appReducer.lang)
  const movies = new useTheMovieDB();

  const actorMoviesCredits = async () => {
    const result = await movies.getPersonMovies(287, lang);
    setActorMovies(result.cast);
  }

  const actorImagesCredits = async () => {
    const result = await movies.getPersonImages(287);
    setActorImages(result.profiles);
  }

  const genresMovie = async () => {
    const result = await movies.getMovieGenres();
    setGenres(result.genres);
  }

  useEffect(() => {
    actorImagesCredits();
    actorMoviesCredits();
    genresMovie();
  }, [lang]);

  const viewActorImages = actorImages.slice(0, 4).map((item, i) => {
    return (
      <img key={nanoid()} src={`https://image.tmdb.org/t/p/w300${item.file_path}`} alt={2324}/>
    )
  })

  return (
    <Container maxWidth="xl">
      <div className="actor">
        <div className="actor-avatar">
          <img src={avatar} alt="actor avatar" />
        </div>
        <div className="actor-info">
          <h1 className="actor-name">Actor Name</h1>
          <div className="actor-blocktitle">{lang === 'en' ? 'Birthday:' : 'Дата рождения:'}:</div>
          <div className="actor-birth">1959-04-15</div>
          <div className="actor-blocktitle">{lang === 'en' ? 'Place of birth:' : 'Место рождения:'}</div>
          <div className="actor-birthplace">Los Angeles, California</div>
          <div className="actor-blocktitle">{lang === 'en' ? 'Biography:' : 'Биография:'}</div>
          <div className="actor-biography">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quas impedit at, perferendis unde, sequi recusandae odio quod accusantium, quisquam eveniet ducimus rerum deleniti! Asperiores quia possimus exercitationem nulla? Blanditiis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto deleniti voluptates saepe libero adipisci cumque totam, qui provident a necessitatibus ipsam quia illum minima eius dolorum quibusdam quod, magni tenetur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis reprehenderit facilis excepturi rerum quod voluptate placeat repudiandae non optio? Illum libero quos magni pariatur necessitatibus similique alias modi laborum quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laboriosam ducimus cum consequuntur pariatur, optio dolorem ex alias dolorum enim, delectus officia voluptate. Veritatis, consequatur numquam ipsum quae dolore voluptatum?
          </div>
          <div className="actor-blocktitle">{lang === 'en' ? 'Photos:' : 'Фотографии:'}</div>
          <div className="actor-photos">
            {viewActorImages}
          </div>
        </div>
      </div>
      <div className="actor-works">
        <ErrorBoundary>
          <div className="actor-known">
          {lang === 'en' ? 'Known by' : 'Роли в фильмах:'}
          </div>
          <MovieList data={actorMovies.slice(0, 10)}/>
        </ErrorBoundary>
      </div>
    </Container>
  )
}

export default ActorPage;