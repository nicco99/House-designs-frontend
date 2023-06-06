import React from "react";
import Stack from "@mui/material/Stack";
import { Typography, Box } from "@mui/material";

const OurServices = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        // minHeight: "600px",
        padding: "20px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backdropFilter: "blur(8px)",
        gap: 2,
        display: "flex",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        // backgroundImage: `url(https://media.gettyimages.com/id/1336014851/vector/modern-farm-house-floor-plan-sketch.jpg?s=612x612&w=0&k=20&c=phkCqUo_YvbGj8rIb81n5rVUNJ-pAX8wHEIPor49SCw=)`,
      }}>
      <Box>
        <Typography
          align="center"
          sx={{
            zIndex: 2,
            textAlign: "center",
            fontWeight: 800,
            marginTop: "10px",
          }}
          variant="h5"
          color="primary.dark">
          Our Services
        </Typography>
        <Typography
          alignSelf="center"
          variant="h4"
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "90%",
            lineHeight: 1.8,
          }}>
          We pride ourselves on our attention to detail and commitment to
          delivering high-quality results. Whether you have a residential or
          commercial project, our architects will apply their expertise and
          creativity to ensure that every aspect of the design is carefully
          considered and executed.
        </Typography>
      </Box>
    </Stack>
  );
};

export default OurServices;
