import {useSelector} from 'react-redux';

export const useLang = () => {
  const lang = useSelector(state => state.appReducer.lang);
  return {lang};
}