import { Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";
import poster from "./poster.jpg";

export default function ActionAreaCard() {
  return (
    <Card sx={{minWidth: 250, marginBottom: 4, backgroundColor: '#151515'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={poster}
          alt="green iguana"
        />
        <CardContent sx={{color: '#e5e5e5'}}>
          <Typography gutterBottom variant="h5" component="div">
            Movie Title
          </Typography>
          <Typography variant="body2" color="#777">
            Genre-1 Genre-2 Genre-3 Genre-3
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}