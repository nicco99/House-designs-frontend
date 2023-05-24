import React from "react";

import { AppBar, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Main from "../../../public/main.png";
const Desktop = () => {
  return (
    <Stack
      sx={{
        "@media (max-width: 600px)": {
          display: "none",
        },
        position: "fixed",
        width: "100%",
      }}>
      <AppBar
        sx={{
          height: "70px",
          width: "100%",
          left: 0,
          top: 0,
          display: "grid",
          gridTemplateColumns: "repeat(7,1fr)",
          justifyContent: "center",
        }}>
        <Stack
          direction="row"
          sx={{
            marginLeft: "10px",
            gridColumn: "span 3",
            marginTop: "auto",
            marginBottom: "auto",
          }}>
          <Image
            src={Main}
            style={{ background: "transparent" }}
            alt="logo"
            height={40}
          />
          <Typography
            sx={{ marginTop: "auto", marginBottom: "auto", marginLeft: "10px" }}
            variant="h4">
            DEN-TECH
          </Typography>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            height: "100",
            gap: 5,
            marginTop: "auto",
            marginBottom: "auto",
            gridColumn: "span 4",
            justifyContent: "end",
            paddingRight: "40px",
          }}
          direction="row">
          <Typography sx={{ flexGrow: "1fr" }} variant="subtitle2">
            Home
          </Typography>
          <Typography sx={{ flexGrow: "1fr" }} variant="subtitle2">
            Contact
          </Typography>
          <Typography sx={{ flexGrow: "1fr" }} variant="subtitle2">
            About
          </Typography>
          <Typography sx={{ flexGrow: "1fr" }} variant="subtitle2">
            Designs
          </Typography>
        </Stack>
      </AppBar>
    </Stack>
  );
};

export default Desktop;
