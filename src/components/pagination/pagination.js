import DarkTheme from '../mui-theme/dark-theme';
import { Pagination, ThemeProvider } from '@mui/material';


const BasicPagination = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Pagination 
        count={10} 
        color="primary"
        sx={{marginBottom: '20px', display: 'flex', justifyContent: 'center'}}
      />
    </ThemeProvider>
  );
}

export default BasicPagination;