import React from "react";
import { AppBar, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Main from "../../../public/main.png";
const Mobile = () => {
  return (
    <Stack
      sx={{
        "@media (min-width: 600px)": {
          display: "none",
        },
      }}>
      <AppBar sx={{ height: "50px", display: "flex", justifyContent: "space-between" }}>
        <Stack>
          <Image
            src={Main}
            style={{ background: "transparent" }}
            alt="logo"
            height={40}
          />
        </Stack>
        <Stack direction="row">
          <Typography variant="subtitle1">Contact</Typography>
          <Typography variant="subtitle1">About</Typography>
          <Typography variant="subtitle1">Designs</Typography>
          <Typography variant="subtitle1">Home</Typography>
        </Stack>
      </AppBar>
    </Stack>
  );
};

export default Mobile;
