import DarkTheme from '../mui-theme/dark-theme';
import { useCallback } from 'react';
import { Pagination, ThemeProvider } from '@mui/material';

const BasicPagination = ({setPage, countPages = 10}) => {

  const handlePageChange = useCallback((page) => {
    setPage(page);
    window.scroll(0, 0);
  }, [setPage]);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Pagination 
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