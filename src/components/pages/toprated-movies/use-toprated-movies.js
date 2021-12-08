import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTopMovies } from '../../../redux/topMoviesSlice';
import { useLang } from "../../../services/use-lang";

export const useTopratedMovies = (page) => {
  const dispatch = useDispatch();
  const {lang} = useLang();
  const {status} = useSelector(state => state.topReducer)
  const movies = useSelector(state => state.topReducer.topMovies);
  const totalPages = useSelector(state => state.topReducer.totalPages);

  useEffect(() => {
    dispatch(
      fetchTopMovies({lang, page}))
  }, [dispatch, lang, page]);

  return {status, movies, totalPages};
}