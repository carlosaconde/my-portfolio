import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, display: "flex", width: "100vw" }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}> Carlos Andres conde</Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Projects
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Studies
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tecnologies
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contact
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
