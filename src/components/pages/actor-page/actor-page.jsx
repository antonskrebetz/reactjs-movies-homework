import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import {img_300, notfound_300} from '../../../services/media-service';
import Spinner from '../../spinner/spinner';
import { nanoid } from '@reduxjs/toolkit';
import { useActorPage } from './use-actor-page';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import './actor-page.scss';


const ActorPage = () => {

  const {actorId} = useParams();
  const {personData, personStatus, imagesStatus, moviesStatus, movies, images} = useActorPage(actorId);
  const { t } = useTranslation();

  const actorImages = images.map(item => {
    return (
      <img key={nanoid()} 
        src={item.file_path ? `${img_300}${item.file_path}` : notfound_300} 
        alt={'actor'}
      />
    )
  });

  const PageContent = () => {
    return (
      <>
        <div className="actor">
          <div className="actor-avatar">
            <img src={`${img_300}${personData.profile_path}`} alt="actor avatar" />
          </div>
          <div className="actor-info">
            <h1 className="actor-name" title="actor-name">{personData.name}</h1>
            <div className="actor-blocktitle">{t('actor.birth')}</div>
            <div className="actor-birth">{personData.birthday}</div>
            <div className="actor-blocktitle">{t('actor.place')}</div>
            <div className="actor-birthplace">{personData.place_of_birth}</div>
            <div className="actor-blocktitle">{t('actor.bio')}</div>
            <div className="actor-biography">{personData.biography}</div>
            <div className="actor-blocktitle">{t('actor.photos')}</div>
            <div className="actor-photos">
              {imagesStatus === 'loading' && <Spinner/>}
              {actorImages}
            </div>
          </div>
        </div>
        <div className="actor-works">
          <ErrorBoundary>
            <div className="actor-known">{t('actor.known')}</div>
            {moviesStatus === 'loading' && <Spinner/>}
            <MovieList data={movies.slice(0, 10)}/>
          </ErrorBoundary>
        </div>
      </>
    )
  }

  const spinner = personStatus === 'loading' ? <Spinner/> : null;
  const content = personStatus === 'resolved' ? <PageContent/> : null;

  return (
    <>
      {spinner}
      {content}
    </>
  )
}

export default ActorPage;