import { useEffect } from "react";
import { useSelector, useDispatch} from 'react-redux';
import { fetchUpcomingMovies } from "../../../redux/upcomingMoviesSlice";
import { useLang } from "../../../services/use-lang";

export const useUpcomingMovies = (page) => {
  const dispatch = useDispatch();
  const {lang} = useLang();
  const { status } = useSelector(state => state.upcomingReducer);
  const movies = useSelector(state => state.upcomingReducer.upcomingMovies);
  const totalPages = useSelector(state => state.upcomingReducer.totalPages);

  useEffect(() => {
    dispatch(fetchUpcomingMovies({lang, page}))
  }, [dispatch, lang, page]);

  return {status, totalPages, movies};
}