import ToggleButtons from '../../toggle-buttons/toggle-buttons';
import BasicPagination from '../../pagination/pagination';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import { Container } from '@mui/material';
import './main-page.scss';

const MainPage = () => {
  return (
    <Container maxWidth="xl">
      <ToggleButtons/>
      <ErrorBoundary>
        <MovieList/>
      </ErrorBoundary>
      <BasicPagination/>
    </Container>
  )
}

export default MainPage;