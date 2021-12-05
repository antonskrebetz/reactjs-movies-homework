import { useState, useEffect } from "react";
import { useSelector, useDispatch} from 'react-redux';
import { fetchUpcomingMovies } from "../../../redux/upcomingMoviesSlice";
import { useLang } from "../../../services/use-lang";

export const useUpcomingMovies = (initialPage) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(initialPage);
  const {lang} = useLang();
  const { status } = useSelector(state => state.upcomingReducer);
  const movies = useSelector(state => state.upcomingReducer.upcomingMovies);
  const totalPages = useSelector(state => state.upcomingReducer.totalPages);

  useEffect(() => {
    dispatch(fetchUpcomingMovies({lang, page}))
  }, [dispatch, lang, page]);

  return {setPage, status, totalPages, movies};
}