import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPerson, fetchActorImages, fetchActorMovies } from '../../../redux/actorSlice';
import { useLang } from "../../../services/use-lang";

export const useActorPage = (id) => {
  const dispatch = useDispatch();
  const {lang} = useLang();
  const personData = useSelector(state => state.actorReducer.personData);
  const {personStatus, imagesStatus, moviesStatus} = useSelector(state => state.actorReducer)
  const movies = useSelector(state => state.actorReducer.actorMovies);
  const images = useSelector(state => state.actorReducer.actorImages);

  useEffect(() => {
    dispatch(fetchPerson({id, lang}))
    dispatch(fetchActorImages({id}));
    dispatch(fetchActorMovies({id, lang}));
  }, [id, dispatch, lang]);

  return {personStatus, imagesStatus, moviesStatus, personData, movies, images};
}