import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from "next/link"
import { Chip, Button } from '@mui/material';
export default function Index() {
  return (
    <Container maxWidth="xl" >
      <Box sx={{ my: 4, }}>
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
      <Button sx={{backgroundColor: "primary.main", color: "#ffff"}}>main</Button>
      <Button sx={{backgroundColor: "primary.dark", color: "#ffff"}}>dark</Button>
      <Button sx={{backgroundColor: "primary.light", color: "#ffff"}}>light</Button>

      <Typography variant="subtitle1">secondary</Typography>
      <Button sx={{backgroundColor: "secondary.main", color: "#ffff"}}>main</Button>
      <Button sx={{backgroundColor: "secondary.dark", color: "#ffff"}}>dark</Button>
      <Button sx={{backgroundColor: "secondary.light", color: "red"}}>light</Button>
    </Container>
  );
}