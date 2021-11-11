import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import actor from './actor.jpg';

const ActorCard = () => {
  return (
    <Card sx={{ backgroundColor: '#151515', marginBottom: 2, minWidth: 150 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={actor}
          alt="green iguana"
        />
        <CardContent sx={{color: '#e5e5e5'}}>
          <Typography variant="body1" component="div">
            Actor Name
          </Typography>
          <Typography variant="body2" color="#777">
            Played character
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ActorCard;