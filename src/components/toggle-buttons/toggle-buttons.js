import {useState} from 'react';
import { ThemeProvider, ToggleButton, ToggleButtonGroup } from '@mui/material';
import DarkTheme from '../mui-theme/dark-theme';
import { useSelector } from 'react-redux';

const ToggleButtons = () => {
  const lang = useSelector(state => state.appReducer.lang);
  const [alignment, setAlignment] = useState('popular');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };


  return (
    <ThemeProvider theme={DarkTheme}>
      <ToggleButtonGroup 
        sx={{margin: '30px 0', display: 'flex', justifyContent: {xs: 'center', sm: 'end'}}}
        size="small"
        color="success"
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="popular">{lang === 'en' ? 'Popular' : 'Популярные'}</ToggleButton>
        <ToggleButton value="top">{lang === 'en' ? 'Top rated' : 'Топовые'}</ToggleButton>
        <ToggleButton value="upcoming">{lang === 'en' ? 'Upcoming' : 'Ожидаемые'}</ToggleButton>
      </ToggleButtonGroup>
    </ThemeProvider>
  );
}

export default ToggleButtons;