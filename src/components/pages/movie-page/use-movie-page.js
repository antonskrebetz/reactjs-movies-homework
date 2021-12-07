import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovie, fetchMovieImages, fetchMovieCast, fetchMovieRecommend, toggleCastList } from '../../../redux/movieSlice';
import { useLang } from '../../../services/use-lang';

export const useMoviePage = (id) => {
  const dispatch = useDispatch();
  const {lang} = useLang();
  const {movieStatus, imagesStatus, castStatus, recommendStatus} = useSelector(state => state.movieReducer);
  const movieData = useSelector(state => state.movieReducer.movieData);
  const isShortListCast = useSelector(state => state.movieReducer.isShortListCast);
  const shortListCast = useSelector(state => state.movieReducer.shortListCast);
  const movieCast = useSelector(state => state.movieReducer.movieCast);
  const movieImages = useSelector(state => state.movieReducer.movieImages);
  const movieRecommend = useSelector(state => state.movieReducer.movieRecommend);

  useEffect(() => {
    dispatch(fetchMovie({id, lang}));
    dispatch(fetchMovieImages({id}));
    dispatch(fetchMovieCast({id, lang}));
    dispatch(fetchMovieRecommend({id, lang}));
  }, [dispatch, id, lang]);

  const togglelCastItems = () => {
    dispatch(toggleCastList());
  }

  return {movieStatus, imagesStatus, castStatus, recommendStatus, movieData,isShortListCast, shortListCast, movieCast, movieImages, movieRecommend, togglelCastItems};
}