import { Theme, styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import HotelIcon from "@mui/icons-material/Hotel";
import { Grid, Typography } from "@mui/material";
import BathtubIcon from "@mui/icons-material/Bathtub";
import React from "react";
import Image from "next/image";

const ReusableImageCard: React.FC<{
  price: number;
  propertyType: string;
  propertyCategory: string;
  numberOfBathrooms: number;
  numberOfBedrooms: number;
  image1: any;
}> = ({
  price,
  propertyType,
  propertyCategory,
  numberOfBathrooms,
  numberOfBedrooms,
  image1,
}) => {
  return (
    <Grid sx={{}} item xs={12} sm={12} md={6} lg={4}>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          height: "400px",
          width: "100%",
          borderRadius: "10px",
          "@media (min-width: 400px)": {
            height: "600px",
          },
        }}>
        <Box sx={{ width: "100%", height: "60%" }}>
          <Image
            style={{ width: "100%", height: "100%", borderRadius: "15px" }}
            src={image1}
            alt={propertyCategory}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            padding: 3,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Typography variant="body1">Build Cost</Typography>
            <Typography fontWeight={700} variant="subtitle2">
              {price}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Typography
              sx={{
                color: "primary.dark",
                alignItems: "center",
                display: "flex",
                gap: 1,
              }}
              variant="subtitle2">
              {" "}
              <Typography variant="subtitle2" component="span">
                {" "}
                <HotelIcon />
              </Typography>
              <Typography variant="subtitle2" component="span">
                {numberOfBedrooms}
              </Typography>
            </Typography>
            <Typography
              sx={{
                color: "primary.dark",
                alignItems: "center",
                display: "flex",
                gap: 1,
              }}
              variant="subtitle2">
              {" "}
              <Typography variant="subtitle2" component="span">
                {" "}
                <BathtubIcon />
              </Typography>
              <Typography variant="subtitle2" component="span">
                {numberOfBathrooms}
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 2, marginLeft: "10px" }}>
          <Typography component="span" variant="subtitle1">
            {propertyType}
          </Typography>
          <Typography component="span" variant="subtitle1">
            {propertyCategory}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default ReusableImageCard;
