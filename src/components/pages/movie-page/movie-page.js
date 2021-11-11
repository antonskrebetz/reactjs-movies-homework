import ActorList from '../../actor-list/actor-list';
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import { Container, Button } from '@mui/material';
import './movie-page.scss';
import poster from './poster.jpg';
import image from './image.jpg';



const MoviePage = () => {
  return (
    <>
      <Container maxWidth={"xl"}>
        <div className="movie">
          <div className="movie-avatar">
            <img src={poster} alt="movie avatar" />
          </div>
          <div className="movie-info">
            <div className="movie-blocktitle">Title:</div>
            <h1 className="movie-name">Movie Title</h1>
            <div className="movie-blocktitle">Overview:</div>
            <div className="movie-overview">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quas impedit at, perferendis unde, sequi recusandae odio quod accusantium, quisquam eveniet ducimus rerum deleniti! Asperiores quia possimus exercitationem nulla? Blanditiis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto deleniti voluptates saepe libero adipisci cumque totam, qui provident a necessitatibus ipsam quia illum minima eius dolorum quibusdam quod, magni tenetur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis reprehenderit facilis excepturi rerum quod voluptate placeat repudiandae non optio? Illum libero quos magni pariatur necessitatibus similique alias modi laborum quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laboriosam ducimus cum consequuntur pariatur, optio dolorem ex alias dolorum enim, delectus officia voluptate. Veritatis, consequatur numquam ipsum quae dolore voluptatum?
            </div>
            <div className="movie-blocktitle">Release date:</div>
            <div className="movie-release">2021-04-15</div>
            <div className="movie-blocktitle">Revenue:</div>
            <div className="movie-revenue">$ 42 600 000</div>
            <div className="movie-blocktitle">Duration:</div>
            <div className="movie-duration">02:14</div>
            <div className="movie-genres">
              <div>Genre - 1</div>
              <div>Genre - 2</div>
              <div>Genre - 2</div>
            </div>
            <div className="movie-cast">
              <div className="movie-cast_header">
                <div className="movie-cast_title">Top Billed Cast</div>
                <Button variant="outlined" size="small" color="inherit">Show all</Button>
              </div>
              <ErrorBoundary>
                <ActorList />
              </ErrorBoundary>
            </div>
            <div className="movie-images">
              <div className="movie-images_title">Images</div>
              <div className="movie-images_list">
                <img src={image} alt="cadr from movie" />
                <img src={image} alt="cadr from movie" />
                <img src={image} alt="cadr from movie" />
                <img src={image} alt="cadr from movie" />
                <img src={image} alt="cadr from movie" />
                <img src={image} alt="cadr from movie" />
                <img src={image} alt="cadr from movie" />
                <img src={image} alt="cadr from movie" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="movie-reccomend">Recommendations</div>
          <ErrorBoundary>
            <MovieList />
          </ErrorBoundary>
        </div>
      </Container>
    </>
  )
}

export default MoviePage;