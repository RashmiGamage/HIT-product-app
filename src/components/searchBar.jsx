import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Box, Grid } from "@mui/material";
import useStyles from "./userStyle";

const SearchBar = (productList) => {
  const classes = useStyles();
  


  return (
    <form  position="static">
       <Grid container>
      {/* <Container maxWidth="xl"> */}
      <Grid item sm={10}  className={classes.search}>
      <TextField
        id="search-bar"
        className="text"
        label="Enter a product name"
        variant="outlined"
        placeholder="Search..."
        size="small"
        fullWidth
        
      />
      </Grid>

      <Grid item sm={2} className={classes.search}>
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "blue" }} />
      </IconButton>
      </Grid>
      {/* </Container> */}
      </Grid>
    </form>
  );
};

export default SearchBar;