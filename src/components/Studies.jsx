import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
export const Studies = () => {
  return (
    <>
      <Typography variant="h4" component="h2">
        Studies
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <SchoolIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Profesional Developer"
            secondary="digital house 2022 - 2023"
          />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <SchoolIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="React Js" secondary="coderhouse 2023" />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <SchoolIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Higher Technician in Programming"
            secondary="UTN 2025-today"
          />
        </ListItem>
      </Box>
    </>
  );
};
