import { Fab } from "@mui/material";
import {
  IconBrandGithubFilled,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandVite,
} from "@tabler/icons-react";
export const FloatingDock = () => {
  return (
    <>
      <Fab variant="extended" color="primary" aria-label="add">
        <IconBrandReact />
        React
      </Fab>
      <Fab variant="extended" color="secondary" aria-label="edit">
        <IconBrandVite />
        Vite
      </Fab>
      <Fab variant="extended">
        <IconBrandGithubFilled sx={{ mr: 1 }} />
        gitHub
      </Fab>
      <Fab variant="extended" aria-label="like" color="success">
        <IconBrandNodejs />
        Node js
      </Fab>
    </>
  );
};
