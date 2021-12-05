import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage, changeSearchText } from '../../redux/appSlice';
import { fetchMovieGenres } from '../../redux/appSlice';
import i18n from "../../i18n/i18n";

export const useHeader = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const lang = useSelector(state => state.appReducer.lang);

  const handleChangeLang = (e) => {
    dispatch(changeLanguage({value: e.target.value}));
    i18n.changeLanguage(e.target.value);
  };

  const hadleChangeInput = (e) => {
    setSearchText((e.target.value));
  };

  const submitSearchForm = (e) => {
    if (e.key === 'Enter') {
      dispatch(changeSearchText({text: searchText}));
      setSearchText('');
    }
  }

  useEffect(() => {
    dispatch(fetchMovieGenres({lang}));
  }, [dispatch, lang])

  return {searchText, setSearchText, lang, handleChangeLang, hadleChangeInput, submitSearchForm};
}