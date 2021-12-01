import { useState, useEffect } from "react";
import { useSelector, useDispatch} from 'react-redux';
import { fetchUpcomingMovies } from "../../../redux/upcomingMoviesSlice";

export const useUpcomingMovies = (initialPage) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(initialPage);
  const lang = useSelector(state => state.appReducer.lang);
  const { status } = useSelector(state => state.upcomingReducer);
  const movies = useSelector(state => state.upcomingReducer.upcomingMovies);
  const totalPages = useSelector(state => state.upcomingReducer.totalPages);

  useEffect(() => {
    dispatch(fetchUpcomingMovies({lang, page}))
  }, [dispatch, lang, page]);

  return {setPage, status, totalPages, movies};
}