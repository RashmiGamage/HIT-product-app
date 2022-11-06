import { Avatar, Card, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import user1 from "../sampleUser";
import useStyles from "./userStyle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import userImage from "../images/rash.jpg";

const user = user1;

const User = () => {
  const classes = useStyles();

  return (
    <Box height="100%">
      <Paper elevation={5} className={classes.paper} sx={{mt:"75px"}}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar
            alt="rashmi"
            src={userImage}
            className={classes.image}
            sx={{ height: 180, width: 180 }}
          ></Avatar>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid sx={{ mb: 1 }}>
            <Typography
              fontFamily="Rubik"
              sx={{ fontSize: 25, fontWeight: "bold" }}
            >
              {user.firstName + " " + user.lastName}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Typography>{user.email}</Typography>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Card
            sx={{
              padding: 1,
              margin: 1,
              bgcolor: "#1976d2",
            }}
          >
            <Typography>{user.followers} followers</Typography>
          </Card>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Card sx={{
            padding:1,
            margin: 1,
            bgcolor: "#1976d2" }}>
            <Typography>{user.following} following</Typography>
          </Card>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <SettingsIcon />
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Typography>Settings</Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <LogoutIcon />
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Typography>Log out</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default User;
