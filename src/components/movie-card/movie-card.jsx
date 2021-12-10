import { Card, CardContent, CardMedia, Typography, CardActionArea, Chip } from "@mui/material";
import { img_300, notfound_300 } from "../../services/media-service";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import styles from './styles';

export default function MovieCard({id, vote, title, alt, poster, genres}) {

  const movieRate = useMemo(() => {
    if (vote >= 7) return 'success';
    if (vote > 4) return 'warning';
    return 'error';
  }, [vote])

  const clickOnMovieCard = () => {
    window.scroll(0, 0);
  }

  return (
    <Card sx={styles.card} key={id} component={Link} to={`/movie/${id}`} onClick={clickOnMovieCard}>
      <Chip 
        label={vote.toFixed(1)} 
        color={movieRate}
        sx={styles.chip}
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
            {genres.join(' ')}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}