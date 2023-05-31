import React from "react";
import { Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Stack
      sx={{ width: "100%", backgroundColor: "primary.main", padding: "20px" }}>
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gap: 4,
          "@media (max-width: 600px)": {
            display: "grid",
            gridTemplateColumns: "auto",
          },
        }}>
        <Stack sx={{ display: "flex", alignItems: "center" }}>
          <Typography color="secondary.light" variant="subtitle1">
            Quick links
          </Typography>
          <Typography color="secondary.light">Designs</Typography>
          <Typography color="secondary.light">About</Typography>
          <Typography color="secondary.light">Contact</Typography>
          <Typography color="secondary.light">Home</Typography>
        </Stack>
        <Stack sx={{ display: "flex", alignItems: "center" }}>
          <Typography color="secondary.light" variant="subtitle1">
            Quick links
          </Typography>
          <Typography color="secondary.light">Designs</Typography>
          <Typography color="secondary.light">About</Typography>
          <Typography color="secondary.light">Contact</Typography>
          <Typography color="secondary.light">Home</Typography>
        </Stack>
        <Stack sx={{ display: "flex", alignItems: "center" }}>
          <Typography color="secondary.light" variant="subtitle1">
            Quick links
          </Typography>
          <Typography color="secondary.light">Designs</Typography>
          <Typography color="secondary.light">About</Typography>
          <Typography color="secondary.light">Contact</Typography>
          <Typography color="secondary.light">Home</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
