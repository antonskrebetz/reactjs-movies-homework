import * as React from 'react';
import { ThemeProvider, ToggleButton, ToggleButtonGroup } from '@mui/material';
import DarkTheme from '../mui-theme/dark-theme';

const ToggleButtons = () => {
  const [alignment, setAlignment] = React.useState('popular');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };


  return (
    <ThemeProvider theme={DarkTheme}>
      <ToggleButtonGroup 
        sx={{margin: '30px 0', display: 'flex', justifyContent: 'end'}}
        size="small"
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="popular">Popular</ToggleButton>
        <ToggleButton value="top">Top rated</ToggleButton>
        <ToggleButton value="upcoming">Upcoming</ToggleButton>
      </ToggleButtonGroup>
    </ThemeProvider>
  );
}

export default ToggleButtons;