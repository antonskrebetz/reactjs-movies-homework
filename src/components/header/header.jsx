import { Link } from 'react-router-dom';
import {Search, SearchIconWrapper, StyledInputBase, styles} from './styles';
import SearchIcon from '@mui/icons-material/Search';
import { Container, Toolbar, Box, AppBar, Select, MenuItem, FormControl, ThemeProvider } from '@mui/material';
import DarkTheme from '../mui-theme/dark-theme';
import { useHeader } from './use-header';
import { useTranslation } from 'react-i18next';
import './header.scss';

const Header = () => {
  const {searchText, lang, handleChangeLang, hadleChangeInput, submitSearchForm} = useHeader();
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={DarkTheme}>
      <AppBar position="static" sx={styles.bar}>
        <Container maxWidth="xl">
          <Toolbar>
            <Link to="/" className="header-logo">
                movie app
            </Link>
            <Box sx={{flexGrow: 1}} />
            <Search sx={styles.search}>
              <SearchIconWrapper>
                <SearchIcon/>
              </SearchIconWrapper>
              <StyledInputBase
                placeholder={t('inputPlaceholder')}
                inputProps={{ 'aria-label': 'search' }}
                value={searchText}
                onChange={hadleChangeInput}
                onKeyDown={submitSearchForm}
              />
            </Search>
            <Box sx={styles.box}>
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select"
                  size={"small"}
                  color={'success'}
                  value={lang}
                  onChange={handleChangeLang}
                >
                  <MenuItem value='en'>EN</MenuItem>
                  <MenuItem value='ru'>RU</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;