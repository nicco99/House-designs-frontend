import * as React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Box from "@mui/material/Box";
import Link from "next/link";
import { Chip, Button, Stack } from "@mui/material";
import Header from "@/components/surfaces/Header";
import { TypeAnimation } from "react-type-animation";
import { Paper } from "@mui/material";
import c1 from "../public/c1.jpeg";
import c3 from "../public/c3.png";
import landing from "../public/landing.jpg"
import Footer from "../components/surfaces/Footer"
function Item(props: any) {
  return (
    <Paper sx={{ height: "100vh" }}>
      <h2>{props.item.name}</h2>
      <Image
        height={400}
        width={500}
        style={{ minHeight: "100px" }}
        src={props.item.image}
        alt="design"
      />
      <p>{props.item.description}</p>
    </Paper>
  );
}

export default function Index() {
  const items = [
    {
      image: c1,
      name: "bungalo",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      image: c3,
      name: "3 Bedrooms",
      description: "Hello World!",
    },
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
          "@media (max-width: 600px)" : {
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
        <Stack sx={{display: "flex", justifyContent: 'center',alignItems: "center" }}>
          <Paper sx={{backgroundColor: "secondary.light",width: "60%", height: "20%"}}></Paper>
        </Stack>
      </Stack>
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          h1
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          subtitle1
        </Typography>
        <Typography variant="subtitle2" component="h1" gutterBottom>
          subtitle2
        </Typography>
        <Typography variant="body1" component="h1" gutterBottom>
          bady1
        </Typography>
        <Typography variant="body2" component="h1" gutterBottom>
          body2
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
      </Box>
      <Typography variant="subtitle1">primary</Typography>
      <Button sx={{ backgroundColor: "primary.main", color: "#ffff" }}>
        main
      </Button>
      <Button sx={{ backgroundColor: "primary.dark", color: "#ffff" }}>
        dark
      </Button>
      <Button sx={{ backgroundColor: "primary.light", color: "#ffff" }}>
        light
      </Button>

      <Typography variant="subtitle1">secondary</Typography>
      <Button sx={{ backgroundColor: "secondary.main", color: "#ffff" }}>
        main
      </Button>
      <Button sx={{ backgroundColor: "secondary.dark", color: "#ffff" }}>
        dark
      </Button>
      <Button sx={{ backgroundColor: "secondary.light", color: "red" }}>
        light
      </Button>
      <Footer />
    </Stack>
  );
}
