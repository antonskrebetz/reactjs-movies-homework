import DarkTheme from '../mui-theme/dark-theme';
import { useCallback } from 'react';
import { Pagination, ThemeProvider } from '@mui/material';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

const BasicPagination = ({countPages = 10}) => {
  let url = useLocation();
  let navigate = useNavigate();
  let {moviePage} = useParams();

  const handlePageChange = useCallback((page) => {
    navigate(`${url.pathname.match(/\D/g).join('')}${page}`)
    window.scroll(0, 0);
  }, [navigate, url.pathname]);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Pagination 
        page={+moviePage}
        count={countPages} 
        color="success"
        hideNextButton
        hidePrevButton
        sx={{marginBottom: '20px', display: 'flex', justifyContent: 'center'}}
        onChange={e => handlePageChange(e.target.textContent)}
        component={Link}
      />
    </ThemeProvider>
  );
}

export default BasicPagination;