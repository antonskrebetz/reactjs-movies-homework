
import MovieList from '../../movie-list/movie-list';
import ErrorBoundary from '../../error-boundary/error-boundary';
import { Container } from '@mui/material';
import './actor-page.scss';
import avatar from './actor-avatar.jpg'
import actor1 from './actor1.jpg';
import actor2 from './actor2.jpg';
import actor3 from './actor3.jpg';


const ActorPage = () => {
  return (
    <Container maxWidth="xl">
      <div className="actor">
        <div className="actor-avatar">
          <img src={avatar} alt="actor avatar" />
        </div>
        <div className="actor-info">
          <h1 className="actor-name">Actor Name</h1>
          <div className="actor-blocktitle">Birthday:</div>
          <div className="actor-birth">1959-04-15</div>
          <div className="actor-blocktitle">Place of birth:</div>
          <div className="actor-birthplace">Los Angeles, California</div>
          <div className="actor-blocktitle">Biography:</div>
          <div className="actor-biography">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quas impedit at, perferendis unde, sequi recusandae odio quod accusantium, quisquam eveniet ducimus rerum deleniti! Asperiores quia possimus exercitationem nulla? Blanditiis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto deleniti voluptates saepe libero adipisci cumque totam, qui provident a necessitatibus ipsam quia illum minima eius dolorum quibusdam quod, magni tenetur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis reprehenderit facilis excepturi rerum quod voluptate placeat repudiandae non optio? Illum libero quos magni pariatur necessitatibus similique alias modi laborum quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laboriosam ducimus cum consequuntur pariatur, optio dolorem ex alias dolorum enim, delectus officia voluptate. Veritatis, consequatur numquam ipsum quae dolore voluptatum?
          </div>
          <div className="actor-blocktitle">Photos:</div>
          <div className="actor-photos">
            <img src={actor1} alt="www" />
            <img src={actor2} alt="www" />
            <img src={actor3} alt="www" />
            <img src={avatar} alt="www" />
          </div>
        </div>
      </div>
      <div className="actor-works">
        <ErrorBoundary>
          <div className="actor-known">
            Known by
          </div>
          <MovieList/>
        </ErrorBoundary>
      </div>
    </Container>
  )
}

export default ActorPage;