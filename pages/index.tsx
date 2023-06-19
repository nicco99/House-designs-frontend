import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import illustration from "../public/illustration2.png";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import Box from "@mui/material/Box";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import Link from "next/link";
import contact from "../public/contacts.jpeg";
import { Chip, Button, Stack, TextField, Autocomplete } from "@mui/material";
import Header from "@/components/surfaces/Header";
import { TypeAnimation } from "react-type-animation";
import { Paper } from "@mui/material";
import { useRouter } from "next/router";
import construction from "../public/construction.jpeg";
import landing from "../public/landing.jpg";
import Footer from "../components/surfaces/Footer";
import ReusableCard from "@/components/surfaces/ReusableCard";
import styles from "./styles.module.css";
import home from "../public/home.png";
import machinery from "../public/machinery.jpeg";
import graduation from "../public/graduationhat.jpeg";
import person1 from "../public/person1.jpeg";
import person2 from "../public/person2.jpeg";
import OurServices from "@/modules/OurServices";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const contactSchema = yup.object({
  name: yup.string().required("Full names are required"),
  email: yup.string().email().trim().required("Email is required"),
  subject: yup.string().trim().required("Subject is required"),
  message: yup.string().required("Message is required"),
});
type Contact = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
export default function Index() {
  const [open, setOpen] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Contact>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit: any = (data: any) => {
    console.log(data);
    fetch("https://smart-designs-backend.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((data) => {
        setOpen(true);
        console.log("message sent");
        reset();
      });
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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
          backgroundColor: "#ffffff",
          // backgroundImage: `url(${landing.src})`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
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
            color="primary.dark"
            variant="h1">
            <TypeAnimation
              sequence={[
                "OUR QUALITY DESIGNS", // Types 'One'
                1000, // Waits 1s
                "We Design Appartments..",
                1000, // Waits 2s
                "We Design Bungalows..",
                1000,
                "We Design Massionates..",
                1000,
                //'Two Three', // Types 'Three' without deleting 'Two'
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </Typography>
          <Typography
            sx={{
              width: "70%",
              lineHeight: "30px",
              fontWeight: "800",
              letterSpacing: "2px",
            }}
            color="primary.dark"
            variant="subtitle1">
            At our core, we deliver good designs by combining creativity,
            research, collaboration, and attention to detail, resulting in
            visually appealing and functional solutions that exceed
            expectations.
          </Typography>
          <Button href="/designs" size="large" variant="contained">
            Browse Designs
          </Button>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}>
          <Image
            height={400}
            width={500}
            style={{ height: "60%", width: "70%" }}
            alt="illustration"
            src={illustration}
          />
        </Stack>
      </Stack>
      <div className={styles.welcomecontainer}>
        <div className={styles.welcomeholder}>
          <h2 className={styles.welcomeheader}>WELCOME TO SMART HOMES</h2>
          <h3 className={styles.welcometopic}>
            {" "}
            WE ARE A CONSTRUCTION COMPANY SERVING THE COMMUNITY PROUDLY{" "}
          </h3>
          <div className={styles.welcomehr}> &#10084;</div>
          <p className={styles.welcomep}>
            Our construction company is known for delivering excellence, with a
            skilled team and extensive experience. From residential homes to
            commercial complexes, our diverse portfolio showcases successful
            projects.
          </p>
        </div>
        <div className={styles.welcomephotocontainer}>
          {/* <img
            className={styles.welcomephoto}
            src="https://i.pinimg.com/564x/25/30/20/25302048256deae4716eb26c5d50aed8.jpg"></img> */}
        </div>
      </div>
      <div className={styles.maincontainer}>
        <div className={styles.container}>
          <h1 className={styles.number}>1</h1>
          <h3 className={styles.heading}>Architecture</h3>
          <p className={styles.paragraph}>
            We address requirements and constraints with the right mix of
            analytical thinking, creativity and artistry — designing buildings
            that make a statement, conserve natural resources and enrich our
            experience.
          </p>
          <hr className={styles.hr}></hr>
        </div>
        <div className={styles.container}>
          <h1 className={styles.number}>2</h1>
          <h3 className={styles.heading}>CONSTRUCTION</h3>
          <p className={styles.paragraph}>
            We address requirements and constraints with the right mix of
            analytical thinking, creativity and artistry — designing buildings
            that make a statement, conserve natural resources and enrich our
            experience.
          </p>
          <hr className={styles.hr}></hr>
        </div>
        <div className={styles.container}>
          <h1 className={styles.number}>3</h1>
          <h3 className={styles.heading}>COST ACCOUNTING</h3>
          <p className={styles.paragraph}>
            We address requirements and constraints with the right mix of
            analytical thinking, creativity and artistry — designing buildings
            that make a statement, conserve natural resources and enrich our
            experience.
          </p>
          <hr className={styles.hr}></hr>
        </div>
      </div>
      <div className={styles.projectscontainer}>
        <div className={styles.griditem}>
          <Image
            src={contact}
            alt="picture"
            className={styles.projectimage}></Image>
          <h3 className={styles.projectsnumber}> 200</h3>
          <p className={styles.projectsdef}>Client Services</p>
        </div>
        <div className={styles.griditem}>
          <Image
            src={graduation}
            alt="picture"
            className={styles.projectimage}></Image>
          <h3 className={styles.projectsnumber}>65+</h3>
          <p className={styles.projectsdef}>Machinery</p>
        </div>
        <div className={styles.griditem}>
          <Image
            src={machinery}
            alt="picture"
            className={styles.projectimage}></Image>
          <h3 className={styles.projectsnumber}>50</h3>
          <p className={styles.projectsdef}>Qualified Staff</p>
        </div>
        <div className={styles.griditem}>
          <Image
            src={home}
            alt="picture"
            className={styles.projectimage}></Image>
          <h3 className={styles.projectsnumber}>6522</h3>
          <p className={styles.projectsdef}>Projects Completed</p>
        </div>
      </div>
      <div>
        <h3 className={styles.testimonialheader}>TESTIMONIALS</h3>
        <hr className={styles.hr}></hr>
        <div className={styles.uuxdd}>
          <div className={styles.testimony}>
            <p className={styles.testimonialcontent}>
              I am thoroughly impressed with the exceptional quality of work
              delivered by your construction business. From start to finish, the
              attention to detail and professionalism exhibited by your team
              made the construction process a breeze.
            </p>
            <div className={styles.cage}>
              <Image
                src={person1}
                alt="someone"
                className={styles.personprofile}></Image>
              <p className={styles.profilename}>JANE DOE</p>
            </div>
          </div>
          <div className={styles.testimony}>
            <p className={styles.testimonialcontent}>
              I am thoroughly impressed with the exceptional quality of work
              delivered by your construction business. From start to finish, the
              attention to detail and professionalism exhibited by your team
              made the construction process a breeze.
            </p>
            <div className={styles.cage}>
              <Image
                src={person2}
                alt="someone"
                className={styles.personprofile}></Image>
              <p className={styles.profilename}>JOHN DOE</p>
            </div>
          </div>
        </div>
      </div>
      <Stack>
        <Stack
          sx={{
            alignItems: "center",
            padding: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          }}
          gap={2}>
          <Typography variant="subtitle1">GET IN TOUCH</Typography>
          <Stack
            sx={{
              "@media (min-width: 600px)": {
                width: "60%",
              },
            }}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            gap={3}>
            <TextField
              sx={{ width: "90%" }}
              label="Full Name"
              {...register("name")}
              // className={styles.contactinputs}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <TextField
              sx={{ width: "90%" }}
              label="Email"
              {...register("email")}
              // className={styles.contactinputs}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              sx={{ width: "90%" }}
              label="Subject"
              {...register("subject")}
              // className={styles.contactinputs}
              error={!!errors.subject}
              helperText={errors.subject?.message}
            />
            <TextField
              sx={{ width: "90%" }}
              label="Message"
              {...register("message")}
              // className={styles.contactinputs}
              error={!!errors.message}
              helperText={errors.message?.message}
            />
            <Button
              sx={{ marginBottom: "20px", width: "90%" }}
              variant="contained"
              type="submit">
              {" "}
              SEND
            </Button>
          </Stack>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            message="Message sent"
          />
        </Stack>
      </Stack>
      {/* <OurServices /> */}
      <Footer />
    </Stack>
  );
}
