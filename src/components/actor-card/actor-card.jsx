import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import {img_300, notfound_300} from '../../services/media-service';

const ActorCard = ({image, name, character, alt}) => {
  return (
    <Card sx={{ backgroundColor: '#151515', marginBottom: 2, width: 150 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="170"
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