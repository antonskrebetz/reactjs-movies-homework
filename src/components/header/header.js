import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Container, InputBase, Typography, Toolbar, Box, AppBar, Select, MenuItem, FormControl, ThemeProvider } from '@mui/material';
import DarkTheme from '../mui-theme/dark-theme';
import './header.scss';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.25),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
  },
  color: '#fff',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  color: '#151515',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
  },
}));


const Header = () => {

  const [lang, setLang] = useState('en');
  const handleChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <ThemeProvider theme={DarkTheme}>
      <AppBar position="static" sx={{background: '#202020'}}>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1, textTransform: 'uppercase' }}
            >
              movie app
            </Typography>
            <Search sx={{ display: { xs: 'none', sm: 'flex'} }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Movies, person..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select"
                  size={"small"}
                  value={lang}
                  onChange={handleChange}
                >
                  <MenuItem value={'en'}>EN</MenuItem>
                  <MenuItem value={'ru'}>RU</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;