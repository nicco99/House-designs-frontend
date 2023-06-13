import React, { useState } from "react";
import Stack from "@mui/material/Stack";

import { Grid, Typography, Box, Button } from "@mui/material";
import massionette1 from "../../public/massionette1.jpg";
import massionette2 from "../../public/massionette2.jpg";
import massionette3 from "../../public/massionette3.jpg";
import massionette4 from "../../public/massionette4.jpg";
import massionette5 from "../../public/massionette5.jpg";
import ReusableImageCard from "@/components/surfaces/ReusableImageCard";
import TuneIcon from "@mui/icons-material/Tune";


interface CardDetails {
  price: number;
  propertyType: string; //4 bedroom
  propertyCategory: string; //Bungelow massionnette
  numberOfBathrooms: number; //2
  numberOfBedrooms: number; //3
  id: number;
  image1: any;
}

const cardDetails: CardDetails[] = [
  {
    price: 128000,
    propertyType: "4 Bedrooms",
    propertyCategory: "maisonette",
    numberOfBathrooms: 3,
    numberOfBedrooms: 4,
    id: 1,
    image1: massionette1,
  },
  {
    price: 150000,
    propertyType: "6 Bedrooms",
    propertyCategory: "maisonette",
    numberOfBathrooms: 5,
    numberOfBedrooms: 6,
    id: 2,
    image1: massionette2,
  },
  {
    price: 200000,
    propertyType: "6 Bedrooms",
    propertyCategory: "maisonette",
    numberOfBathrooms: 5,
    numberOfBedrooms: 6,
    id: 3,
    image1: massionette3,
  },
  {
    price: 200000,
    propertyType: "7 Bedrooms",
    propertyCategory: "maisonette",
    numberOfBathrooms: 5,
    numberOfBedrooms: 7,
    id: 4,
    image1: massionette4,
  },
  {
    price: 170000,
    propertyType: "5 Bedrooms",
    propertyCategory: "maisonette",
    numberOfBathrooms: 5,
    numberOfBedrooms: 5,
    id: 5,
    image1: massionette5,
  },
  {
    price: 170000,
    propertyType: "5 Bedrooms",
    propertyCategory: "maisonette",
    numberOfBathrooms: 5,
    numberOfBedrooms: 5,
    id: 5,
    image1: massionette5,
  },
];
console.log(cardDetails);
const Main = () => {
  return (
    <Stack
      sx={{
        gap: 2,
        display: "flex",
        flexDirection: "column",
      }}>
      <Box
        sx={{
          width: "100%",

          backgroundColor: "secondary.light",
          gap: "5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography
          sx={{
            marginTop: "90px",
            marginBottom: "40px",
            "@media(max-width: 600px)": {
              marginRight: "30px",
              marginLeft: "30px",
            },
          }}
          align="center"
          variant="subtitle1">
          Innovative Solutions for Creating Beautiful Designs{" "}
        </Typography>
        <Typography align="center" sx={{ marginX: 4 }} variant="h6">
          Explore our extensive catalog to find the perfect house plan that
          matches your dreams, and let us transform it into a stunning reality.
        </Typography>
        <Button
          variant="outlined"
          sx={{ color: "primary.dark", marginBottom: "20px" }}>
          Filter Designs
          <TuneIcon />
        </Button>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          alignSelf: "center",
          "@media(min-width: 600px)": {
            width: "90%",
            alignSelf: "center",
          },
          width: "100%",
          borderRadius: "10px",
          marginBottom: "20px",
        }}>
        {cardDetails.map((house) => (
          <ReusableImageCard key={house.id} {...house} />
        ))}
      </Grid>
    </Stack>
  );
};

export default Main;
