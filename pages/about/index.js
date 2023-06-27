import React from "react";
import styles from "../styles.module.css";
import Footer from "../../components/surfaces/Footer";
import Header from "../../components/surfaces/Header";
import pdisplay from "../../public/pdisplay.jpeg";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
function About() {
  return (
    <div className={styles.about}>
      <Header />
      {/* <div className={styles.aboutbody}> */}
      {/* <h3 className={styles.abouttitle}> */}
      {/* ABOUT US */}
      {/* </h3> */}
      {/* </div> */}
      <Stack
        sx={{
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "secondary.light",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          "@media (max-width: 600px)": {
            display: "grid",
            gridTemplateColumns: "1fr",
            paddingTop: "50px",
          },
        }}
        gap={2}>
        <Stack
          sx={{
            marginTop: "auto",
            marginBottom: "auto",
            marginRight: "30px",
            marginLeft: "30px",
          }}>
          <Typography
            sx={{ marginLeft: "auto", marginRight: "auto" }}
            variant="h3">
            ABOUT US
          </Typography>
          <Typography
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: "40px",
            }}>
            Welcome to SMART DESIGNS, your ultimate destination for innovative
            house plans and comprehensive construction management services. With
            our team of experienced architects, designers, and construction
            experts, we are committed to transforming your dream home into a
            reality. At SMART DESIGNS, we understand that every client is
            unique, and our mission is to provide personalized solutions that
            exceed your expectations.
          </Typography>
        </Stack>
        <Stack>
          <Image
            width={400}
            height={500}
            src="https://cdni.iconscout.com/illustration/premium/thumb/building-construction-5753380-4805535.png"
            alt="illustration"
            style={{
              width: "100%",
              height: "80%",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          />
        </Stack>
      </Stack>
      <div className={styles.aboutdescriptionholder}>
        <h3 className={styles.aboutdescription}>
          Transforming visions into reality, designing spaces that inspire and
          delight, and crafting structures that stand the test of time
        </h3>
      </div>
      <div className={styles.xvddhr}>
        <div className={styles.dssvv}>
          <h2 className={styles.plors}>WHAT WE DO</h2>
          <p className={styles.yujnf}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In nibh
            mauris cursus mattis molestie a iaculis at. Libero justo laoreet sit
            amet cursus sit. Eros in cursus turpis massa tincidunt dui ut ornare
            lectus.
          </p>
        </div>
        <div className={styles.dssvv}>
          <h2 className={styles.plors}>HOW WE DO IT</h2>
          <p className={styles.yujnf}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In nibh
            mauris cursus mattis molestie a iaculis at. Libero justo laoreet sit
            amet cursus sit. Eros in cursus turpis massa tincidunt dui ut ornare
            lectus.
          </p>
        </div>
      </div>
      <div className={styles.plsjrnv}>
        <h2 className={styles.abouttitle2}>MEET OUR TEAM</h2>
      </div>
      <div className={styles.bdsfgew}>
        <div className={styles.edggf}>
          <Image
            src={pdisplay}
            alt={"john kadere"}
            className={styles.hvsbf}></Image>
          <h3 className={styles.vdsvd}>JOHN KADERE</h3>
          <h4 className={styles.shvbs}>MANAGING DIRECTOR</h4>
          <p className={styles.kkisf}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.edggf}>
          <Image
            src={pdisplay}
            alt={"john kadere"}
            className={styles.hvsbf}></Image>
          <h3 className={styles.vdsvd}>JOHN KADERE</h3>
          <h4 className={styles.shvbs}>MANAGING DIRECTOR</h4>
          <p className={styles.kkisf}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.edggf}>
          <Image
            src={pdisplay}
            alt={"john kadere"}
            className={styles.hvsbf}></Image>
          <h3 className={styles.vdsvd}>JOHN KADERE</h3>
          <h4 className={styles.shvbs}>MANAGING DIRECTOR</h4>
          <p className={styles.kkisf}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
