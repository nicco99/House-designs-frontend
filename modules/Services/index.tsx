import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Typography } from "@mui/material";
import services from "../../public/services.jpg";
const Services = () => {
  return (
    <Box
      sx={{
        display: "grid",
        backgroundColor: "primary.main",
        minHeight: "300px",
        gridTemplateColumns: "1fr 1fr",
        "@media (max-width: 600px)": {
          display: "grid",
          gridTemplateColumns: "1fr",
        },
      }}>
      <Box sx={{ width: "100%" }}>
        <Image
          alt="services"
          src={services}
          style={{ width: "100%",  borderRadius: "50%" }}
        />
      </Box>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "auto",
          marginBottom: "auto",
          marginRight: "10px",
          marginLeft: "10px",
          gap: 5,
        }}>
        <Typography color="secondary.light" variant="h4" align="center">
          Architectural work
        </Typography>
        <Typography
          color="secondary.light"
          variant="h5"
          sx={{ lineHeight: 1.5, marginTop: "10px" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
          reiciendis obcaecati ullam hic illum totam? Blanditiis numquam
          adipisci commodi harum possimus sed fugit. Veniam soluta repellat
          ipsum quos quidem exercitationem.
        </Typography>
      </Box>
    </Box>
  );
};

export default Services;
