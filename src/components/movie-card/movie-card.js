import { Card, CardContent, CardMedia, Typography, CardActionArea, Chip } from "@mui/material";
import { img_300, notfound_300 } from "../../services/media-service";

export default function MovieCard({id, vote, title, alt, poster, genres}) {
  return (
    <Card sx={{width: 270, marginBottom: 4,position: 'relative', backgroundColor: '#151515'}} key={id}>
      <Chip 
        label={vote.toFixed(1)} 
        color={vote >= 7 ? 'success' : vote < 4 ? 'error' : 'warning'}
        sx={{position: 'absolute', zIndex: 1000, borderRadius: 1}}
      />
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={poster ? `${img_300}${poster}` : notfound_300}
          alt={alt}
        />
        <CardContent sx={{color: '#e5e5e5'}}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="#777">
            {genres.join(', ')}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}