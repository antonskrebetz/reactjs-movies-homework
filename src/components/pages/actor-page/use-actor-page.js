import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPerson, fetchActorImages, fetchActorMovies } from '../../../redux/actorSlice';

export const useActorPage = (id) => {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.appReducer.lang);
  const {imagesStatus, moviesStatus} = useSelector(state => state.actorReducer)
  const movies = useSelector(state => state.actorReducer.actorMovies);
  const images = useSelector(state => state.actorReducer.actorImages);

  useEffect(() => {
    dispatch(fetchActorImages({id}));
    dispatch(fetchActorMovies({id, lang}));
  }, [id, dispatch, lang]);

  return {lang, imagesStatus, moviesStatus, movies, images};
}