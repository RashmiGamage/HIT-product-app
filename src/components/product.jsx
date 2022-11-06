import {
  Avatar,
  Card,
  Grid,
  Divider,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CardOverflow from "@mui/joy/CardOverflow";
import Link from "@mui/joy/Link";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Product = (data) => {
  const product = data.productData;
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 200,
        borderRadius: "20px",
        padding: 2,
        marginTop: 2,
        marginRight: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", pb: 1.5, gap: 1 }}>
        <Box
          sx={{
            position: "relative",
            "&:before": {
              content: '""',
              position: "absolute",
              top: 5,
              left: 5,
              bottom: 5,
              right: 5,
              m: "-2px",
              borderRadius: "50%",
              background:
                "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
            },
          }}
        >
          <Avatar
            alt="product image"
            src={product.images[0]}
            sx={{ height: 80, width: 80, border: "0.5px solid gray" }}
          ></Avatar>
        </Box>
        <Typography fontWeight="lg" sx={{ marginLeft: 4, marginTop: -5 }}>
          {product.title}
        </Typography>
      </Box>

      <Box>
        <Typography
          fontWeight="sm"
          sx={{ marginLeft: 15, marginTop: -6, marginBottom: 5 }}
        >
          {product.description}
        </Typography>
      </Box>
      <Divider>*</Divider>
      <CardOverflow>
        <Grid
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            overflow: "hidden",
          }}
        >
          <ImageList
            sx={{
              display: "flex",
              alignContent: "center",
              flexDirection: "row",
              flexWrap: "nowrap",
              justifyContent: "center",
              minHeight: 300,
              // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
              transform: "translateZ(0)",
            }}
            cols={1.3}
          >
            {product.images.map((imageURL, index) => (
              <ImageListItem>
                <Popup
                  trigger={
                    <img
                      key={index}
                      //className="demo-item"
                      src={imageURL}
                      margin={0}
                      alt="product image"
                      loading="lazy"
                    ></img>
                  }
                  position="center"
                >
                  <Card
                    variant="outlined"
                    sx={{
                      minWidth: 800,
                      minHeight: 400,
                      justify: 'center',
                      alignContent:'center',
                      alignItems: "center",
                    }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <img
                          key={index}
                          //className="demo-item"
                          src={imageURL}
                          margin={30}
                          alt="product image"
                          height={400}
                          width={600}
                        ></img>
                        <Typography gutterBottom variant="h5" component="div">
                          {product.title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Popup>
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Divider>*</Divider>
      </CardOverflow>

      <CardOverflow sx={{ p: "var(--Card-padding)", display: "flex" }}>
        <IconButton
          size="sm"
          variant="plain"
          color="neutral"
          sx={{
            ml: -1,
            margin: 1,
          }}
        >
          <Link disabled underline="none" role="button">
            <ThumbUpIcon />
          </Link>
        </IconButton>
        <Divider orientation="vertical" flexItem />
        <IconButton
          size="sm"
          variant="plain"
          color="inherit"
          sx={{
            margin: 1,
            marginLeft: 3,
          }}
        >
          <ChatBubbleIcon />
        </IconButton>
        <Divider orientation="vertical" flexItem />
        <Input
          variant="plain"
          size="sm"
          placeholder="Add a comment…"
          sx={{
            flexGrow: 1,
            mr: 1,
            marginLeft: 3,
            "--Input-focusedThickness": "0px",
          }}
        />
        ,
        <Divider orientation="vertical" flexItem />
        <IconButton
          size="sm"
          variant="plain"
          color="neutral"
          sx={{
            ml: -1,
            margin: 1,
          }}
        >
          <Link disabled underline="none" role="button">
            <ShortcutIcon />
          </Link>
        </IconButton>
      </CardOverflow>
    </Card>
  );
};

export default Product;
