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
        position: "relative",
        borderRadius: "10px",
        boxShadow: "0px 10px 6px -6px hsl(100, 35%, 28%)",
        gap: 1,
      }}>
      <Image
        alt={image}
        src={image}
        style={{
          height: "45%",
          width: "100%",
          borderRadius: "10px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",

          marginLeft: "10px",
          gap: 1,
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
          }}>
          <Typography variant="body1">
            Build cost{" "}
            <Typography variant="subtitle2" component="span">
              Ksh {"123,000"}
            </Typography>
          </Typography>
          <Stack
            sx={{
              gap: 3,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <LocalHotelIcon /> <Typography variant="subtitle2">3</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <BathtubIcon /> <Typography variant="subtitle2">2</Typography>
            </Box>
          </Stack>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 1,
            "@media(max-width: 600px": {
              gap: 1,
            },
          }}>
          <Stack sx={{ display: "grid", gridTemplateColumns: "1fr", gap: 1 }}>
            <Typography component="span" variant="subtitle1">
              {name}
            </Typography>
          </Stack>
        </Box>
      </Box>

      <Box
        sx={{
          width: "90%",

          display: "grid",
          position: "absolute",
          bottom: 4,
          marginLeft: "auto",
          marginRight: "auto",
          gridTemplateColumns: "1fr 1fr",
        }}>
        <Button variant="text">
          Save plan <BookmarkIcon />
        </Button>
        <Button variant="outlined">{"More>>"}</Button>
      </Box>
    </Paper>
  );
};

export default ReusableCard;
