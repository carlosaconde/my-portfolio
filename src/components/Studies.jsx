import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
export const Studies = () => {
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
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
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>
    </>
  );
};
