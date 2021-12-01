import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovie, fetchMovieImages, fetchMovieCast, fetchMovieRecommend, toggleCastList } from '../../../redux/movieSlice';


export const useMoviePage = (id) => {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.appReducer.lang);
  const {imagesStatus, castStatus, recommendStatus} = useSelector(state => state.movieReducer);
  const isShortListCast = useSelector(state => state.movieReducer.isShortListCast);
  const shortListCast = useSelector(state => state.movieReducer.shortListCast);
  const movieCast = useSelector(state => state.movieReducer.movieCast);
  const movieImages = useSelector(state => state.movieReducer.movieImages);
  const movieRecommend = useSelector(state => state.movieReducer.movieRecommend);

  useEffect(() => {
    dispatch(fetchMovieImages({id}));
    dispatch(fetchMovieCast({id, lang}));
    dispatch(fetchMovieRecommend({id, lang}));
  }, [id, dispatch, lang]);

  const togglelCastItems = () => {
    dispatch(toggleCastList());
  }

  return {lang, imagesStatus, castStatus, recommendStatus, isShortListCast, shortListCast, movieCast, movieImages, movieRecommend, togglelCastItems};
}