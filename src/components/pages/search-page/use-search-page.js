import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchMovies } from "../../../redux/searchSlice";
import { useLang } from "../../../services/use-lang";

export const useSearchPage = (initialPage) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(initialPage);
  const {lang} = useLang();
  const query = useSelector(state => state.appReducer.query);
  const { status } = useSelector(state => state.searchReducer);
  const movies = useSelector(state => state.searchReducer.searchMovies);
  const totalPages = useSelector(state => state.searchReducer.totalPages);

  useEffect(() => {
    dispatch(fetchSearchMovies({lang, query, page}))
  }, [dispatch, query, lang, page]);

  return {setPage, status, query, totalPages, movies};
}