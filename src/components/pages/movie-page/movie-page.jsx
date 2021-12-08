import ActorList from '../../actor-list/actor-list';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import { Button } from '@mui/material';
import Spinner from '../../spinner/spinner';
import { img_300, notfound_300 } from '../../../services/media-service';
import { useMoviePage } from './use-movie-page';
import { useTranslation } from 'react-i18next';
import './movie-page.scss';
import { useParams } from 'react-router-dom';

const MoviePage = () => {

  const {movieId} = useParams();
  const {movieStatus, imagesStatus, castStatus, recommendStatus, movieData, isShortListCast, shortListCast, movieCast, movieImages, movieRecommend, togglelCastItems} = useMoviePage(movieId);
  const movieDuration = Math.floor(movieData.runtime / 60) + ':' + (movieData.runtime % 60);
  const { t } = useTranslation();

  const PageContent = () => {
    return (
      <>
        <div className="movie">
          <div className="movie-avatar">
            <img src={`${img_300}${movieData.poster_path}`} alt="movie avatar" />
          </div>
          <div className="movie-info">
            <div className="movie-blocktitle">{t('movie.title')}</div>
            <h1 className="movie-name">{movieData.title}</h1>
            <div className="movie-blocktitle">{t('movie.overview')}</div>
            <div className="movie-overview">{movieData.overview}</div>
            <div className="movie-blocktitle">{t('movie.release')}</div>
            <div className="movie-release">{movieData.release_date}</div>
            <div className="movie-blocktitle">{t('movie.revenue')}</div>
            <div className="movie-revenue">{movieData.budget}</div>
            <div className="movie-blocktitle">{t('movie.duration')}</div>
            <div className="movie-duration">{movieDuration}</div>
            <div className="movie-genres">
              {movieData.genres.map(genre => <div key={genre.id}>{genre.name}</div>)}
            </div>
            <div className="movie-cast">
              <div className="movie-cast_header">
                <div className="movie-cast_title">{t('movie.cast')}</div>
                <Button variant="outlined" size="small" color="inherit" 
                  onClick={togglelCastItems}>{isShortListCast ? t('movie.showAllCast') : t('movie.hideAllCast')}
                </Button>
              </div>
              <ErrorBoundary>
                {castStatus === 'loading' && <Spinner/>}
                <ActorList data={isShortListCast ? shortListCast : movieCast}/>
              </ErrorBoundary>
            </div>
            <div className="movie-images">
              <div className="movie-images_title">{t('movie.images')}</div>
              <div className="movie-images_list">
                {imagesStatus === 'loading' && <Spinner/>}
                {
                  movieImages.map((el, i) => 
                    <img src={el.file_path ? `${img_300}${el.file_path}` : notfound_300} alt={'frame from movie'} key={i}/>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="movie-reccomend">{t('movie.recommend')}</div>
          <ErrorBoundary>
            {recommendStatus === 'loading' && <Spinner/>}
            <MovieList data={movieRecommend}/>
          </ErrorBoundary>
        </div>
      </>
    )
  }

  const spinner = movieStatus === 'loading' ? <Spinner/> : null;
  const content = movieStatus === 'resolved' ? <PageContent/> : null;

  return (
    <>
      {spinner}
      {content}
    </>
  )
}

export default MoviePage;