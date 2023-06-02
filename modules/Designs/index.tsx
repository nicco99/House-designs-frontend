import React from "react";
import { Stack } from "@mui/material";
import Header from "@/components/surfaces/Header";
import Footer from "@/components/surfaces/Footer";
import Main from "./Main";

const Designs = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "secondary.light",
        height: "100%",
        width: "100%",
        flexGrow: 1,
      }}>
      <Header />
      <Main />
      <Footer />
    </Stack>
  );
};

export default Designs;
