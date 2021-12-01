import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import {img_300, notfound_300} from '../../../services/media-service';
import { Container } from '@mui/material';
import { SpinnerCircularFixed } from 'spinners-react';
import { nanoid } from '@reduxjs/toolkit';
import { useActorPage } from './use-actor-page';
import { useTranslation } from 'react-i18next';
import avatar from './actor-avatar.jpg';
import './actor-page.scss';


const ActorPage = () => {

  const {lang, imagesStatus, moviesStatus, movies, images} = useActorPage(287);
  const { t } = useTranslation();

  const actorImages = images.map(item => {
    return (
      <img key={nanoid()} 
        src={item.file_path ? `${img_300}${item.file_path}` : notfound_300} 
        alt={2324}
      />
    )
  });

  return (
    <Container maxWidth="xl">
      <div className="actor">
        <div className="actor-avatar">
          <img src={avatar} alt="actor avatar" />
        </div>
        <div className="actor-info">
          <h1 className="actor-name">Actor Name</h1>
          <div className="actor-blocktitle">{t('actor.birth')}</div>
          <div className="actor-birth">1959-04-15</div>
          <div className="actor-blocktitle">{t('actor.place')}</div>
          <div className="actor-birthplace">Los Angeles, California</div>
          <div className="actor-blocktitle">{t('actor.bio')}</div>
          <div className="actor-biography">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quas impedit at, perferendis unde, sequi recusandae odio quod accusantium, quisquam eveniet ducimus rerum deleniti! Asperiores quia possimus exercitationem nulla? Blanditiis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto deleniti voluptates saepe libero adipisci cumque totam, qui provident a necessitatibus ipsam quia illum minima eius dolorum quibusdam quod, magni tenetur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis reprehenderit facilis excepturi rerum quod voluptate placeat repudiandae non optio? Illum libero quos magni pariatur necessitatibus similique alias modi laborum quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laboriosam ducimus cum consequuntur pariatur, optio dolorem ex alias dolorum enim, delectus officia voluptate. Veritatis, consequatur numquam ipsum quae dolore voluptatum?
          </div>
          <div className="actor-blocktitle">{t('actor.photos')}</div>
          <div className="actor-photos">
            {imagesStatus === 'loading' && <SpinnerCircularFixed style={{display: 'block', margin: '40px auto'}}/>}
            {actorImages}
          </div>
        </div>
      </div>
      <div className="actor-works">
        <ErrorBoundary>
          <div className="actor-known">{t('actor.known')}</div>
          {moviesStatus === 'loading' && <SpinnerCircularFixed style={{display: 'block', margin: '40px auto'}}/>}
          <MovieList data={movies.slice(0, 10)}/>
        </ErrorBoundary>
      </div>
    </Container>
  )
}

export default ActorPage;