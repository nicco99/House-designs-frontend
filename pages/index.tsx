import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Box from "@mui/material/Box";
import Link from "next/link";
import { Chip, Button, Stack } from "@mui/material";
import Header from "@/components/surfaces/Header";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import c1 from "../public/c1.jpeg";
import c2 from "../public/c2.jpeg";

function Item(props: any) {
  return (
    <Paper sx={{height: "100vh"}}>
      <h2>{props.item.name}</h2>
      <Image height={400} width={500} style={{minHeight: "100px"}} src={props.item.image} alt="design" />
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
      image: c2,
      name: "3 Bedrooms",
      description: "Hello World!",
    },
  ];
  return (
    <Container maxWidth="xl">
      <Header />
      <Stack
        sx={{
          display: "grid",
          zIndex: -1,
          marginTop: "70px",
          gridTemplateColumns: "auto auto",
          height: "80vh",
        }}>
        <Stack>words</Stack>
        <Stack sx={{ height: "70%", zIndex: -1 }}>
          <Carousel>
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
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
    </Container>
  );
}
