import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from "next/link"
import { Chip, Button } from '@mui/material';
export default function Index() {
  return (
    <Container maxWidth="sm" >
      <Box sx={{ my: 4, }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI - Next.js example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
       <Chip label="hello mui" />
      s
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