import React from "react";
import { Stack, Typography, Divider, Chip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <Stack
      sx={{ width: "100%", backgroundColor: "primary.dark", padding: "20px" }}>
      <Stack
        sx={{
          marginBottom: "20px",
          display: "grid",
          gridTemplateColumns: "1fr  1fr 1fr",
          gap: 4,
          "@media (max-width: 600px)": {
            display: "grid",
            gridTemplateColumns: "auto",
          },
        }}>
        <Stack gap={2} sx={{ display: "flex" }}>
          <Typography
            letterSpacing={6}
            align="center"
            variant="h4"
            color="#25D366">
            SMART | DESIGNS
          </Typography>
          <Stack alignSelf="center" gap={3}>
            <Typography variant="subtitle1" color="secondary.light">
              We build
            </Typography>
            <Typography variant="body1" color="secondary.light">
              Bungalow
            </Typography>
            <Typography variant="body1" color="secondary.light">
              Maisonnette
            </Typography>
            <Typography variant="body1" color="secondary.light">
              Appartments
            </Typography>
            <Typography variant="body1" color="secondary.light">
              Office
            </Typography>
            <Typography variant="body1" color="secondary.light">
              Church
            </Typography>
          </Stack>
        </Stack>
        <Divider color="#25D366" orientation="vertical" flexItem>
          <Chip
            sx={{
              backgroundColor: "secondary.light",
              "& .MuiChip-icon": {
                color: "#25D366",
              },
              color: "primary.dark",
            }}
            label="Browse Designs"
          />
        </Divider>
        <Stack gap={2} sx={{ display: "flex", alignItems: "center" }}>
          <Typography color="secondary.light" variant="subtitle1">
            Quick links
          </Typography>
          <Stack alignSelf="center" gap={3}>
            <Typography color="secondary.light">Designs</Typography>
            <Typography color="secondary.light">About</Typography>
            <Typography color="secondary.light">Contact</Typography>
            <Typography color="secondary.light">Home</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Divider sx={{ color: "secondary.light" }}>
        <Chip
          sx={{
            marginRight: "10px",
            backgroundColor: "#0077B5",
            "& .MuiChip-icon": {
              color: "secondary.light",
            },
            color: "secondary.light",
          }}
          icon={<LinkedInIcon sx={{}} />}
          label="LinkedIn"
        />
        <Chip
          sx={{
            backgroundColor: "secondary.light",
            "& .MuiChip-icon": {
              color: "#25D366",
            },
            color: "#25D366",
          }}
          icon={<WhatsAppIcon />}
          label="Whatsapp"
        />
      </Divider>
      <Typography marginTop={5} align="center" variant="body2" color="secondary.light">
      Copyright (c) 2023 NICHOLAS GICHOBI
      </Typography>
    </Stack>
  );
};

export default Footer;
