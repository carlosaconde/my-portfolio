import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function ProjectCard() {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardContent>
        <video width="350" autoPlay loop>
          <source src="src\assets\buildhub.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
