import React from "react";
import Box from "@mui/material/Box";
import { Typography, Stack, Button, Paper, Divider } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Image from "next/image";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import BathtubIcon from "@mui/icons-material/Bathtub";

const ReusableCard: React.FC<{
  name: string;
  image: any;
  description: string;
}> = ({ name, image, description }) => {
  return (
    <Paper
      sx={{
        backgroundColor: "#f5f5f5",

        height: "100%",
        borderRadius: "10px",
        boxShadow: "2px 10px 6px -6px hsl(100, 35%, 28%)",
      }}>
      <Image
        alt={image}
        src={image}
        style={{ height: "50%", width: "100%", borderRadius: "10px" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          height: "50%",
          marginLeft: "10px",
          gap: 2,
        }}>
        <Typography variant="body1">
          Build cost{" "}
          <Typography variant="subtitle2" component="span">
            Ksh {"123,000"}
          </Typography>
        </Typography>
        <Box sx={{ height: "75%" }}>
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr", gap: 3 }}>
            <Typography variant="subtitle1">{name}</Typography>
            <Stack
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                width: "90%",
                alignSelf: "center",
              }}>
              <Box sx={{ display: "flex", gap: 1 }}>
                <LocalHotelIcon />{" "}
                <Typography variant="subtitle2">3</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <BathtubIcon /> <Typography variant="subtitle2">2</Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            paddingBottom: "10px",
          }}>
          <Button variant="text">
            Save plan <BookmarkIcon />
          </Button>
          <Button variant="outlined">{"More details>>"}</Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ReusableCard;
