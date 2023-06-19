import React from "react";
import Box from "@mui/material/Box";
import { Typography, Stack, Button, Paper, Divider } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import BathtubIcon from "@mui/icons-material/Bathtub";
import HotelIcon from "@mui/icons-material/Hotel";

const ReusableCard: React.FC<{
  design_id: number;
  total_price: number;
  property_type: string;
  property_name: string;
  no_of_bathrooms: number;
  no_of_bedrooms: number;
  image1: any;
  location: string;
  county: string;
  status: string;
  property_size: string;
}> = ({
  total_price,
  location,
  property_type,
  property_name,
  no_of_bathrooms,
  no_of_bedrooms,
  image1,
  design_id,
  county,
  status,
  property_size
}) => {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia sx={{ height: 250 }} image={image1} title={property_name} />
      <CardContent sx={{ gap: "20px" }}>
        <Typography gutterBottom variant="h5" component="div">
          {property_type}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography variant="body1">Build Cost</Typography>
          <Typography fontWeight={700} variant="subtitle2">
            {total_price}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            justifyContent: "right",
          }}>
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
              {no_of_bedrooms}
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
              {no_of_bathrooms}
            </Typography>
          </Typography>
        </Box>

        <Typography gutterBottom variant="subtitle1">{property_name}</Typography>
        <Typography variant="body1" gap={1} sx={{ display: "flex" }}>
          <LocationOnIcon
            sx={{
              fontSize: "20px",
              color: "primary.main",
              lineHeight: "22px",
            }}
          />

          <Typography variant="subtitle2">
            {location} , {county}
          </Typography>
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">{property_size}</Typography>
        <Button href={`designs/${design_id}`} variant="contained" size="small">
          Browse Plan
        </Button>
      </CardActions>
    </Card>
  );
};

export default ReusableCard;
