import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchMovies } from "../../../redux/searchSlice";
import { useLang } from "../../../services/use-lang";

export const useSearchPage = (query, page) => {
  const dispatch = useDispatch();
  const {lang} = useLang();
  const { status } = useSelector(state => state.searchReducer);
  const movies = useSelector(state => state.searchReducer.searchMovies);
  const totalPages = useSelector(state => state.searchReducer.totalPages);
  const genresStatus = useSelector(state => state.appReducer.genresStatus);

  useEffect(() => {
    dispatch(fetchSearchMovies({lang, query, page}))
  }, [dispatch, query, lang, page]);

  return {status, totalPages, movies, genresStatus};
}