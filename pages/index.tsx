import * as React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Box from "@mui/material/Box";
import illustration from "../public/illustration.jpg";
import Link from "next/link";
import { Chip, Button, Stack, TextField, Autocomplete } from "@mui/material";
import Header from "@/components/surfaces/Header";
import { TypeAnimation } from "react-type-animation";
import { Paper } from "@mui/material";
import c1 from "../public/c1.jpeg";
import c3 from "../public/c3.png";
import landing from "../public/landing.jpg";
import Footer from "../components/surfaces/Footer";
import ReusableCard from "@/components/surfaces/ReusableCard";

export default function Index() {
  const items = [
    {
      image: c1,
      name: "3 Bedroom Bungalo CDL",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      image: c3,
      name: "3 Bedroom Bungalo CDL",
      description: "Hello World!",
    },
    {
      image: c3,
      name: "3 Bedroom Bungalo CDL",
      description: "Hello World!",
    },
    {
      image: c1,
      name: "3 Bedroom Bungalo CDL",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      image: c3,
      name: "3 Bedroom Bungalo CDL",
      description: "Hello World!",
    },
    {
      image: c3,
      name: "3 Bedroom Bungalo CDL",
      description: "Hello World!",
    },
    {
      image: c1,
      name: "3 Bedroom Bungalo CDL",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      image: c3,
      name: "3 Bedroom Bungalo CDL",
      description: "Hello World!",
    },
    {
      image: c3,
      name: "3 Bedroom Bungalo CDL",
      description: "Hello World!",
    },
  ];

  const propertyTypes = [
    "Bungalow",
    "maisonnette",
    "Commercial/Residential",
    "Appartment",
    "Office",
    "Church",
    "Gazebo",
    "Land sale",
    "Container",
    "Perimeter wall",
    "FlatRoof",
    "School",
    "Godown",
    "Steel structure",
  ];
  const contractTypes = [
    "Completed",
    "Design(Architectural | Structured)",
    "Full(Construction)",
    "Handover",
    "In Progress",
    "Labour(Contstruction)",
    "Land(Installment | full Payment)",
    "Occupied",
    "Project Management(Supervision Construction)",
  ];

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "secondary.light",
      }}>
      <Header />
      <Stack
        sx={{
          width: "100%",
          backgroundImage: `url(${landing.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          marginTop: "30px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          "@media (max-width: 600px)": {
            display: "grid",
            gridTemplateColumns: "1fr",
          },
          height: "100vh",
        }}>
        <Stack
          direction="column"
          sx={{
            // zIndex: "2",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
          }}>
          <Typography
            sx={{ fontWeight: "800" }}
            color="secondary.light"
            variant="h1">
            <TypeAnimation
              sequence={[
                "We Build Quality DESIGNS", // Types 'One'
                1000, // Waits 1s
                "We Design Appartments",
                1000, // Waits 2s
                "We Design Bungalos",
                1000,
                "We Design Massionate",
                1000,
                //'Two Three', // Types 'Three' without deleting 'Two'
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </Typography>
          <Typography
            sx={{ width: "70%", lineHeight: "30px", fontWeight: "800" }}
            color="secondary.light"
            variant="body2">
            At our core, we deliver good designs by combining creativity,
            research, collaboration, and attention to detail, resulting in
            visually appealing and functional solutions that exceed
            expectations.
          </Typography>
          <Button size="large" variant="contained">
            Browse Designs
          </Button>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}></Stack>
      </Stack>
      <Stack sx={{ width: "100", backgroundColor: "secondary.light" }}>
        <Box
          sx={{ padding: 3, display: "flex", flexDirection: "column", gap: 4 }}>
          <Typography align="center" variant="subtitle1">
            Designs filter options{" "}
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              width: "90%",
              alignSelf: "center",
              gap: 5,
              "@media (max-width: 600px)": {
                display: "grid",
                gridTemplateColumns: "1fr",
              },

              "@media (max-width: 701px)": {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 1,
              },
            }}>
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{ marginBottom: "20px" }}
                align="center"
                variant="h6">
                Property Type
              </Typography>
              <Autocomplete
                id="combo-box-demo"
                options={propertyTypes}
                sx={{ width: "100%", alignSelf: "center" }}
                renderInput={(params) => (
                  <TextField {...params} label="Property Type" />
                )}
              />
            </Box>
            <Box
              sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{ marginBottom: "20px" }}
                align="center"
                variant="h6">
                Contract Type
              </Typography>
              <Autocomplete
                id="contract-type"
                options={contractTypes}
                sx={{ width: "100%", alignSelf: "center" }}
                renderInput={(params) => (
                  <TextField {...params} label="Contract Type" />
                )}
              />
            </Box>

            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{ marginBottom: "20px" }}
                align="center"
                variant="h6">
                Price Range
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 3,
                  "@media (max-width: 1000px)": {
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: 3,
                  },
                  "@media (max-width: 950px)": {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 3,
                  },
                }}>
                <Box>
                  <TextField type="number" label="from" />
                </Box>
                <Box>
                  <TextField type="number" label="to" />
                </Box>
              </Box>
            </Box>
          </Box>
          <Button
            sx={{
              width: "40%",
              alignSelf: "center",
              "@media (max-width: 600px": {
                alignSelf: "center",
              },
            }}
            variant="contained">
            Search
          </Button>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "auto auto auto",
              width: "90%",
              alignSelf: "center",
              gap: 3,
              "@media (max-width: 600px)": {
                display: "grid",
                gridTemplateColumns: "auto",
              },

              "@media (min-width: 601px)": {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 1,
              },
            }}>
            {items.map((item) => (
              <ReusableCard key={item.name} {...item} />
            ))}
          </Box>
        </Box>
      </Stack>
      <Footer />
    </Stack>
  );
}
