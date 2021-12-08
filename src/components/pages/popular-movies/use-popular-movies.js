import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPopularMovies } from '../../../redux/popularMoviesSlice';
import { useLang } from "../../../services/use-lang";

export const usePopularMovies = (page) => {
  const dispatch = useDispatch();
  const {lang} = useLang();
  const {status} = useSelector(state => state.popularReducer);
  const totalPages = useSelector(state => state.popularReducer.totalPages);
  const movies = useSelector(state => state.popularReducer.popularMovies);

  useEffect(() => {
    dispatch(fetchPopularMovies({lang, page}));
  }, [dispatch, page, lang]);

  return {status, totalPages, movies};
}