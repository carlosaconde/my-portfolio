import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function ProjectCard() {
  return (
    <Card sx={{ width: 400, backgroundColor: "transparent" }}>
      <CardContent>
        <iframe
          width="300"
          height="300"
          src="https://www.youtube.com/embed/O2gE5eiw20c?si=5Y1n-LN-nUB4ROvw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>

        <Typography color="#fafafa" variant="body2">
          well meaning and kindly.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <GitHubIcon />
          github
        </Button>
      </CardActions>
    </Card>
  );
}
