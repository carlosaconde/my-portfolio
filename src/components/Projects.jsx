import { Box, Grid2, MenuItem, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";

export const Projects = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" component="h2">
          Projects
        </Typography>
        <Grid2
          container
          spacing={{ xs: 3, md: 6 }}
          columns={{ xs: 3, sm: 6, md: 9 }}
        >
          <Grid2 size={3}>
            <MenuItem>
              <ProjectCard />
            </MenuItem>
          </Grid2>
          <Grid2 size={3}>
            <MenuItem>
              <ProjectCard />
            </MenuItem>
          </Grid2>
          <Grid2 size={3}>
            <MenuItem>
              <ProjectCard />
            </MenuItem>
          </Grid2>
          {/* <Grid2 size={3}>
            <MenuItem>
              <ProjectCard />
            </MenuItem>
          </Grid2> */}
        </Grid2>
      </Box>
    </>
  );
};
