import DarkTheme from '../mui-theme/dark-theme';
import { useCallback } from 'react';
import { Pagination, ThemeProvider } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const BasicPagination = ({actualPage, query, countPages = 10}) => {
  const DEFAULT_PAGE = 1;
  let url = useLocation();
  let navigate = useNavigate();

  const handlePageChange = useCallback((page) => {
    if (query) {
      navigate(`${url.pathname}?query=${query}&page=${page}`)
    } else {
      navigate(`${url.pathname}?page=${page}`)
    }
    window.scroll(0, 0);
  }, [navigate, query, url.pathname]);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Pagination 
        page={+actualPage || DEFAULT_PAGE}
        count={countPages} 
        color="success"
        hideNextButton
        hidePrevButton
        sx={{marginBottom: '20px', display: 'flex', justifyContent: 'center'}}
        onChange={e => handlePageChange(e.target.textContent)}
      />
    </ThemeProvider>
  );
}

export default BasicPagination;