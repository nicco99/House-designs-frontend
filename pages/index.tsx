import * as React from "react";
import Typography from "@mui/material/Typography";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from "next/image";
import Box from "@mui/material/Box";
import illustration from "../public/illustration.jpg";
import Link from "next/link";
import contact from "../public/contacts.jpeg"
import { Chip, Button, Stack, TextField, Autocomplete } from "@mui/material";
import Header from "@/components/surfaces/Header";
import { TypeAnimation } from "react-type-animation";
import { Paper } from "@mui/material";
import c1 from "../public/c1.jpeg";
import c3 from "../public/c3.png";
import construction from "../public/construction.jpeg"
import landing from "../public/landing.jpg";
import Footer from "../components/surfaces/Footer";
import ReusableCard from "@/components/surfaces/ReusableCard";
import styles from "./styles.module.css"
import home from "../public/home.png"
import machinery from "../public/machinery.jpeg"
import graduation from "../public/graduationhat.jpeg"
import person1 from "../public/person1.jpeg"
import person2 from "../public/person2.jpeg"
import OurServices from "@/modules/OurServices";
import Services from "@/modules/Services";

export default function Index() {
  const items = [
    {
      image: 1,
      name: "3 Bedroom Bungalo CDL",
      src: "https://i.pinimg.com/236x/f1/a8/3b/f1a83b6704e6d7e9d834256f8c27d1aa.jpg",
    },
    {
      image: 2,
      name: "3 Bedroom Bungalo CDL",
      src: "https://i.pinimg.com/236x/0b/0f/8c/0b0f8c683b017cfbb8d7d389f990c969.jpg",
    },
    {
      image: 3,
      name: "3 Bedroom Bungalo CDL",
      src: "https://i.pinimg.com/236x/2a/d0/79/2ad0793bf01453833bea39987e18b72f.jpg",
    },
    {
      image: 4,
      name: "3 Bedroom Bungalo CDL",
      src: "https://i.pinimg.com/236x/31/c6/24/31c6242eb176cfca7060d5425e9f27d0.jpg",
    },
    {
      image: 5,
      name: "3 Bedroom Bungalo CDL",
      src: "https://i.pinimg.com/236x/10/b7/be/10b7be1492975d8e711a4657f2197be9.jpg",
    },
    {
      image: 6,
      name: "3 Bedroom Bungalo CDL",
      src: "Hello World!",
    },
    {
      image: 7,
      name: "3 Bedroom Bungalo CDL",
      src: "Probably the most random thing you have ever seen!",
    },
    {
      image: 8,
      name: "3 Bedroom Bungalo CDL",
      src: "https://i.pinimg.com/236x/e9/8b/b7/e98bb74ddc0927cb176aae7b197ecfba.jpg",
    },
    {
      image: 9,
      name: "3 Bedroom Bungalo CDL",
      src: "https://i.pinimg.com/236x/1b/39/92/1b3992af40f8d76f34451a38f67cec81.jpg",
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
            variant="subtitle2">
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
      <div className={styles.welcomecontainer}>
        <div className={styles.welcomeholder}>
          <h2 className={styles.welcomeheader}>WELCOME TO SMART HOMES</h2>
          <h3 className={styles.welcometopic}> WE ARE A CONSTRUCTION COMPANY SERVING THE COMMUNITY PROUDLY </h3>
          <div className={styles.welcomehr}> &#10084;</div>
          <p className={styles.welcomep}>Our construction company is known for delivering excellence, with a skilled team and extensive experience. From residential homes to commercial complexes, our diverse portfolio showcases successful projects.</p>
        </div>
        <div className={styles.welcomephotocontainer}>
          <img className={styles.welcomephoto} src="https://i.pinimg.com/564x/25/30/20/25302048256deae4716eb26c5d50aed8.jpg"></img>
        </div>
      </div>
      <div className={styles.maincontainer}>
        <div className={styles.container}>
          <h1 className={styles.number}>1</h1>
          <h3 className={styles.heading}>Architecture</h3>
          <p className={styles.paragraph}>We address requirements and constraints with the right mix of analytical thinking, creativity and artistry — designing buildings that make a statement, conserve natural resources and enrich our experience.</p>
          <hr className={styles.hr}></hr>
        </div>
        <div className={styles.container}>
          <h1 className={styles.number}>2</h1>
          <h3 className={styles.heading}>CONSTRUCTION</h3>
          <p className={styles.paragraph}>We address requirements and constraints with the right mix of analytical thinking, creativity and artistry — designing buildings that make a statement, conserve natural resources and enrich our experience.</p>
          <hr className={styles.hr}></hr>
        </div>
        <div className={styles.container}>
          <h1 className={styles.number}>3</h1>
          <h3 className={styles.heading}>COST ACCOUNTING</h3>
          <p className={styles.paragraph}>We address requirements and constraints with the right mix of analytical thinking, creativity and artistry — designing buildings that make a statement, conserve natural resources and enrich our experience.</p>
          <hr className={styles.hr}></hr>
        </div>
      </div>
      <div className={styles.projectscontainer}>
        <div className={styles.griditem}>
          <Image src={contact} alt='picture' className={styles.projectimage}></Image>
          <h3 className={styles.projectsnumber}> 200</h3>
          <p className={styles.projectsdef}>Client Services</p>
        </div>
        <div className={styles.griditem}>
        <Image src={graduation} alt='picture' className={styles.projectimage}></Image>
          <h3 className={styles.projectsnumber}>65+</h3>
          <p className={styles.projectsdef}>Machinery</p>
        </div>
        <div className={styles.griditem}>
        <Image src={machinery} alt='picture' className={styles.projectimage}></Image>
        <h3 className={styles.projectsnumber}>50</h3>
          <p className={styles.projectsdef}>Qualified Staff</p>
        </div>
        <div className={styles.griditem}>
        <Image src={home} alt='picture' className={styles.projectimage}></Image>
        <h3 className={styles.projectsnumber}>6522</h3>
          <p className={styles.projectsdef}>Projects Completed</p>
        </div>
      </div>
      <div>
        <h3 className={styles.testimonialheader}>TESTIMONIALS</h3>
        <hr className={styles.hr}></hr>
        <div className={styles.uuxdd}>
          <div className={styles.testimony}>
            <p className={styles.testimonialcontent}>I am thoroughly impressed with the exceptional quality of work delivered by your construction business. From start to finish, the attention to detail and professionalism exhibited by your team made the construction process a breeze.</p>
            <div className={styles.cage}>
              <Image src={person1} alt="someone" className={styles.personprofile}></Image>
              <p className={styles.profilename}>JANE DOE</p>
            </div>
          </div>
          <div className={styles.testimony}>
            <p className={styles.testimonialcontent}>I am thoroughly impressed with the exceptional quality of work delivered by your construction business. From start to finish, the attention to detail and professionalism exhibited by your team made the construction process a breeze.</p>
            <div className={styles.cage}>
              <Image src={person2} alt="someone" className={styles.personprofile}></Image>
              <p className={styles.profilename}>JOHN DOE</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.maincontactcontainer}>
        <div className={styles.contactcontainer}>
          <h3 className={styles.getintouch}>GET IN TOUCH</h3>
          <form action="" className={styles.contactform}>
            <input type="text" placeholder="Name" className={styles.contactinputs}></input>
            <input type="text" placeholder="Email" className={styles.contactinputs}></input>
            <input type="text" placeholder="Subject"className={styles.contactinputs}></input>
            <input  type="text" placeholder="Message"className={styles.contactmessageinput}></input>
            <button type="submit" className={styles.contactsubmitbutton} > SEND</button>
          </form>
        </div>
      </div>
      {/* <Stack sx={{ width: "100", backgroundColor: "secondary.light" }}>
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
              gridTemplateColumns: "1fr 1fr",
              gridRowGap: "10px",
              width: "90%",
              alignSelf: "center",
              height: "100%",
              gap: 3,
              "@media (max-width: 800px)": {
                display: "grid",
                gridTemplateColumns: "1fr",
              },
            }}>
            {items.map((item) => (
              <ReusableCard key={item.name} {...item} />
            ))}
          </Box>
        </Box>
      </Stack> */}
      <OurServices />
      {/* <Services/> */}
      <Footer />
    </Stack>
  );
}
