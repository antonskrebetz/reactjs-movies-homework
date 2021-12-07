import {Button, ThemeProvider} from '@mui/material';
import DarkTheme from '../../mui-theme/dark-theme';
import { Link } from 'react-router-dom';
import img404 from './404.png';
import './404.scss';

const Page404 = () => {
  return (
    <div className="page404">
      <h1>Oh... sorry, page not found</h1>
      <img src={img404} alt="page 404"/>
      <ThemeProvider theme={DarkTheme}>
        <Button variant="outlined" size='large' component={Link} to="/">Go home</Button>
      </ThemeProvider>
    </div>
  )
}

export default Page404;
