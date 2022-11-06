import { Box, Grid } from "@mui/material";
import React from "react";
import ProductList from "../components/productList";
import User from "../components/user";

const MainPage = () => {
  return (
    <Box>
      <Grid container
      sx={{ 
        paddingTop:3,
        paddingLeft:20,
        paddingRight:20
         }}>
        <Grid item md={9}>
          <ProductList />
        </Grid>
        <Grid item md={3}>
          <User />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainPage;
