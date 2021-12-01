import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchPopularMovies } from '../../../redux/popularMoviesSlice';

export const usePopularMovies = (initialPage) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(initialPage);
  const lang = useSelector(state => state.appReducer.lang);
  const {status} = useSelector(state => state.popularReducer);
  const totalPages = useSelector(state => state.popularReducer.totalPages);
  const movies = useSelector(state => state.popularReducer.popularMovies);

  useEffect(() => {
    dispatch(fetchPopularMovies({lang, page}));
  }, [dispatch, page, lang]);

  return {setPage, status, totalPages, movies};
}