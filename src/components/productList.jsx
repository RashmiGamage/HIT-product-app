import { Grid, Card, Box } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

import SearchIcon from "@mui/icons-material/Search";

import Product from "./product";

import axios from "axios";
import Scrollbars from "react-custom-scrollbars";
const API_URL = " https://dummyjson.com/";

function ProductList() {
  const [productsData, setProductsData] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredRecords, setFilteredRecords] = useState([]);

  const fetchProductsData = async () => {
    try {
      const res = await axios.get(API_URL + "products");
      setProductsData(res.data.products);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // Trigger the API Call
    fetchProductsData();
  }, []);

  useEffect(() => {
    setFilteredRecords(
      productsData &&
        productsData.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        )
    );
  }, [search, productsData]);
  return (
    <div>
      <form position="static" >
        <Grid container sx={{ 
		paddingTop:1,
		paddingBottom:1,
		marginTop: 1,
		marginBo: 1,
	   }}>
          {/* <Container maxWidth="xl"> */}
          <Grid item sm={10}>
            <TextField
              id="search-bar"
              className="text"
              label="Enter a product name"
              variant="outlined"
              placeholder="Search..."
              size="small"
              fullWidth
              onChange={(e) => setSearch(e.target.value)}
            />
          </Grid>

          <Grid item sm={2}>
            <IconButton type="submit" aria-label="search">
              <SearchIcon style={{ fill: "blue" }} />
            </IconButton>
          </Grid>
          {/* </Container> */}
        </Grid>
      </form>

      <Box sx={{ display: "flex", alignItems: "center", pb: 1.5, gap: 5 }}>
        <Scrollbars style={{ height: 600 }}>
          {
            // If the productsData is not null, display the quote.
            filteredRecords &&
              filteredRecords.map((product) => (
                <Product productData={product} />
              ))
          }
        </Scrollbars>
      </Box>
    </div>
  );
}
export default ProductList;
