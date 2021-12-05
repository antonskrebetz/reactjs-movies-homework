import ActorList from '../../actor-list/actor-list';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import { Container, Button } from '@mui/material';
import { SpinnerCircularFixed } from 'spinners-react';
import { img_300, notfound_300 } from '../../../services/media-service';
import { useMoviePage } from './use-movie-page';
import { useTranslation } from 'react-i18next';
import './movie-page.scss';
import poster from './poster.jpg';

const MoviePage = () => {

  const {imagesStatus, castStatus, recommendStatus, isShortListCast, shortListCast, movieCast, movieImages, movieRecommend, togglelCastItems} = useMoviePage(550);
  const { t } = useTranslation();

  return (
    <>
      <Container maxWidth={"xl"}>
        <div className="movie">
          <div className="movie-avatar">
            <img src={poster} alt="movie avatar" />
          </div>
          <div className="movie-info">
            <div className="movie-blocktitle">{t('movie.title')}</div>
            <h1 className="movie-name">Movie Title</h1>
            <div className="movie-blocktitle">{t('movie.overview')}</div>
            <div className="movie-overview">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quas impedit at, perferendis unde, sequi recusandae odio quod accusantium, quisquam eveniet ducimus rerum deleniti! Asperiores quia possimus exercitationem nulla? Blanditiis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto deleniti voluptates saepe libero adipisci cumque totam, qui provident a necessitatibus ipsam quia illum minima eius dolorum quibusdam quod, magni tenetur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis reprehenderit facilis excepturi rerum quod voluptate placeat repudiandae non optio? Illum libero quos magni pariatur necessitatibus similique alias modi laborum quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laboriosam ducimus cum consequuntur pariatur, optio dolorem ex alias dolorum enim, delectus officia voluptate. Veritatis, consequatur numquam ipsum quae dolore voluptatum?
            </div>
            <div className="movie-blocktitle">{t('movie.release')}</div>
            <div className="movie-release">2021-04-15</div>
            <div className="movie-blocktitle">{t('movie.revenue')}</div>
            <div className="movie-revenue">$ 42 600 000</div>
            <div className="movie-blocktitle">{t('movie.duration')}</div>
            <div className="movie-duration">02:14</div>
            <div className="movie-genres">
              <div>Genre - 1</div>
              <div>Genre - 2</div>
              <div>Genre - 2</div>
            </div>
            <div className="movie-cast">
              <div className="movie-cast_header">
                <div className="movie-cast_title">{t('movie.cast')}</div>
                <Button variant="outlined" size="small" color="inherit" onClick={togglelCastItems}>{isShortListCast ? t('movie.showAllCast') : t('movie.hideAllCast')}</Button>
              </div>
              <ErrorBoundary>
                {castStatus === 'loading' && <SpinnerCircularFixed style={{display: 'block', margin: '40px auto'}}/>}
                <ActorList data={isShortListCast ? shortListCast : movieCast}/>
              </ErrorBoundary>
            </div>
            <div className="movie-images">
              <div className="movie-images_title">{t('movie.images')}</div>
              <div className="movie-images_list">
                {imagesStatus === 'loading' && <SpinnerCircularFixed style={{display: 'block', margin: '40px auto'}}/>}
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
            {recommendStatus === 'loading' && <SpinnerCircularFixed style={{display: 'block', margin: '40px auto'}}/>}
            <MovieList data={movieRecommend}/>
          </ErrorBoundary>
        </div>
      </Container>
    </>
  )
}

export default MoviePage;