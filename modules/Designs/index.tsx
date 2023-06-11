import React from "react";
import { Stack } from "@mui/material";
import Header from "@/components/surfaces/Header";
import Footer from "@/components/surfaces/Footer";
import Main from "./Main";

const Designs: React.FC<{ designs: any }> = ({designs}) => {
  // console.log(designs)
  return (
    <Stack
      sx={{
        backgroundColor: "secondary.light",
        height: "100%",
        width: "100%",
        flexGrow: 1,
      }}>
      <Header />
      <Main designs={designs}/>
      <Footer />
    </Stack>
  );
};

export default Designs;
