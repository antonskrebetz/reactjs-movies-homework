import ActorList from '../../actor-list/actor-list';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import { Container, Button } from '@mui/material';
import './movie-page.scss';
import poster from './poster.jpg';
import { SpinnerCircularFixed } from 'spinners-react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovie, fetchMovieImages, fetchMovieCast, fetchMovieRecommend, toggleCastList } from '../../../redux/movieSlice';
import { img_300, notfound_300 } from '../../../services/media-service';

const MoviePage = () => {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.appReducer.lang);
  const {imagesStatus, castStatus, recommendStatus} = useSelector(state => state.movieReducer);
  const isShortListCast = useSelector(state => state.movieReducer.isShortListCast);
  const shortListCast = useSelector(state => state.movieReducer.shortListCast);
  const movieCast = useSelector(state => state.movieReducer.movieCast);
  const movieImages = useSelector(state => state.movieReducer.movieImages);
  const movieRecommend = useSelector(state => state.movieReducer.movieRecommend);

  useEffect(() => {
    dispatch(fetchMovieImages({id: 550}));
    dispatch(fetchMovieCast({id: 550, lang}));
    dispatch(fetchMovieRecommend({id: 550, lang}));
  }, [dispatch, lang]);

  const togglelCastItems = () => {
    dispatch(toggleCastList());
  }

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
                <Button variant="outlined" size="small" color="inherit" onClick={togglelCastItems}>{isShortListCast ? 'Show all' : 'Hide all'}</Button>
              </div>
              <ErrorBoundary>
                {castStatus === 'loading' && <SpinnerCircularFixed style={{display: 'block', margin: '40px auto'}}/>}
                <ActorList data={isShortListCast ? shortListCast : movieCast}/>
              </ErrorBoundary>
            </div>
            <div className="movie-images">
              <div className="movie-images_title">{lang === 'en' ? 'Images' : 'Кадры фильма'}</div>
              <div className="movie-images_list">
                {imagesStatus === 'loading' && <SpinnerCircularFixed style={{display: 'block', margin: '40px auto'}}/>}
                {
                  movieImages.slice(0,8).map((el, i) => 
                    <img src={el.file_path ? `${img_300}${el.file_path}` : notfound_300} alt={'cadr from movie'} key={i}/>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="movie-reccomend">{lang === 'en' ? 'Recommendations' : 'Рекомендации'}</div>
          <ErrorBoundary>
            {recommendStatus === 'loading' && <SpinnerCircularFixed style={{display: 'block', margin: '40px auto'}}/>}
            <MovieList data={movieRecommend.slice(0, 5)}/>
          </ErrorBoundary>
        </div>
      </Container>
    </>
  )
}

export default MoviePage;