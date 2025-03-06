import { Box, Grid2, MenuItem } from "@mui/material";
import ProjectCard from "./ProjectCard";

export const Projects = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid2
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
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
          <Grid2 size={3}>
            <MenuItem>
              <ProjectCard />
            </MenuItem>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};
