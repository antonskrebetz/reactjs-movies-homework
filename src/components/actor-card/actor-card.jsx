import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import {img_300, notfound_300} from '../../services/media-service';
import { Link } from 'react-router-dom';
import styles from './styles';

const ActorCard = ({id, image, name, character, alt}) => {

  const clickOnActorCard = () => {
    window.scroll(0, 0);
  }

  return (
    <Card component={Link} to={`/actor/${id}`} onClick={clickOnActorCard} sx={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="150px"
          image={ image ? `${img_300}${image}` : notfound_300}
          alt={alt}
        />
        <CardContent sx={{color: '#e5e5e5'}}>
          <Typography variant="body1" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="#777">
            {character}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ActorCard;