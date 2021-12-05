import {useState} from 'react';
import { ThemeProvider, ToggleButton, ToggleButtonGroup } from '@mui/material';
import DarkTheme from '../mui-theme/dark-theme';
import { useTranslation } from 'react-i18next';

const ToggleButtons = () => {
  const { t } = useTranslation();
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
        <ToggleButton value="popular">{t('toggleBtnsPopMovies')}</ToggleButton>
        <ToggleButton value="top">{t('toggleBtnsTopMovies')}</ToggleButton>
        <ToggleButton value="upcoming">{t('toggleBtnsUpMovies')}</ToggleButton>
      </ToggleButtonGroup>
    </ThemeProvider>
  );
}

export default ToggleButtons;