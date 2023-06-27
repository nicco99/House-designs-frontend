import React from "react";
import styles from "../styles.module.css";
import Footer from "../../components/surfaces/Footer";
import Header from "../../components/surfaces/Header";
import pdisplay from "../../public/pdisplay.jpeg";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://smart-designs-backend.onrender.com/designs/4"
  );
  const data = await res.json();
  return {
    props: { design: data.data },
  };
};

function About({ design }) {
  return (
    <div className={styles.about}>
      <Header />
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
          gap={3}
          sx={{
            marginTop: "auto",
            marginBottom: "auto",
            marginRight: "30px",
            marginLeft: "30px",
          }}>
          <Typography
            sx={{
              marginLeft: "auto",
              fontWeight: 900,
              marginRight: "auto",
              fontSize: "30px",
              color: "primary.dark",
            }}>
            ABOUT US
          </Typography>
          <Typography
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: "20px",
              lineHeight: "30px",
            }}>
            Welcome to{" "}
            <Typography
              component="span"
              sx={{ fontWeight: 600, fontSize: "21px" }}>
              SMART | DESIGNS
            </Typography>
            , your ultimate destination for innovative house plans and
            comprehensive construction management services. With our team of
            experienced{" "}
            <Typography
              component="span"
              sx={{ fontWeight: 700, fontSize: "22px" }}>
              architects, designers,
            </Typography>{" "}
            and{" "}
            <Typography
              component="span"
              sx={{ fontWeight: 700, fontSize: "22px" }}>
              {" "}
              construction experts
            </Typography>
            , we are committed to transforming your dream home into a reality.
          </Typography>
          <Typography
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: "20px",
              lineHeight: "30px",
            }}>
            At SMART DESIGNS, we understand that every client is unique, and our
            mission is to provide personalized solutions that exceed your
            expectations.
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
      <Stack>
        <Typography
          sx={{ marginTop: "10px", color: "primary.dark" }}
          align="center"
          variant="subtitle1">
          Sample Complete Project
        </Typography>
        <Stack
          sx={{
            marginTop: "20px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            "@media (max-width: 600px)": {
              display: "grid",
              gridTemplateColumns: "1fr",
            },
          }}>
          <Stack>
            <Image
              src={design.image1}
              alt="image"
              height={300}
              width={400}
              style={{
                height: "80%",
                width: "90%",
                borderRadius: "10px",
                border: "none",
                marginTop: "auto",
                marginBottom: "auto",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            />
            <Typography align="center" fontStyle="italic">
              {design.property_name +
                " " +
                design.property_type +
                "..at" +
                design.location +
                " " +
                design.county}
            </Typography>
          </Stack>

          <Stack
            sx={{ width: "80%", marginRight: "auto", marginLeft: "auto" }}
            gap={3}>
            <Typography variant="subtitle1">Modern Oasis Residence</Typography>
            <Typography variant="body2">
              The Modern Oasis Residence is a stunning architectural masterpiece
              designed and constructed by{" "}
              <Typography
                component="span"
                sx={{ fontWeight: 600, fontSize: "20px" }}>
                SMART | DESIGNS
              </Typography>{" "}
              Nestled in a picturesque location, this project exemplifies the
              perfect blend of contemporary design and natural surroundings. The
              residence spans 4,500 square feet and offers a luxurious living
              experience for the homeowners.
            </Typography>
            <Typography variant="h6"> Exterior Design</Typography>
            <Typography variant="body2">
              The exterior of the Modern Oasis Residence showcases sleek lines
              and a minimalist aesthetic. The facade features a combination of
              glass, concrete, and wood, creating a harmonious balance between
              modernity and warmth. Large floor-to-ceiling windows provide
              breathtaking views of the surrounding landscape and allow an
              abundance of natural light to flood the interior spaces.
            </Typography>
            <Typography variant="h6">Interior Design</Typography>
            <Typography variant="body2">
              Upon entering the residence, one is greeted by a spacious and open
              floor plan that seamlessly connects the living, dining, and
              kitchen areas. The interior design follows a minimalist approach,
              with clean lines, neutral color palettes, and carefully curated
              furnishings that enhance the sense of serenity and sophistication.
            </Typography>
          </Stack>
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
