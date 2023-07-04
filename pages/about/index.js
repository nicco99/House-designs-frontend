import React from "react";
import styles from "../styles.module.css";
import Alert from "@mui/material/Alert";
import Footer from "../../components/surfaces/Footer";
import Header from "../../components/surfaces/Header";
import pdisplay from "../../public/pdisplay.jpeg";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import Carousel from "react-material-ui-carousel";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://smart-designs-backend.onrender.com/designs/2"
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
            marginTop: "100px",
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
              "@media (max-height: 600px)": {
                marginTop: "50px",
              },
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
                "..at " +
                design.location +
                ", " +
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
          <Alert variant="filled" severity="success">
            Transforming visions into reality, designing spaces that inspire and
            delight, and crafting structures that stand the test of time
          </Alert>
        </h3>
      </div>
      <Stack
        gap={2}
        sx={{
          marginRight: "2%",
          marginLeft: "2%",
          "@media (min-width: 600px)": {
            marginRight: "10%",
            marginLeft: "10%",
          },
        }}>
        <Typography
          sx={{ marginRight: "auto", marginLeft: "auto" }}
          variant="h4">
          What we do
        </Typography>
        <Typography variant="subtitle1">
          Architectural Design and Planning
        </Typography>
        <Typography variant="body1">
          Our team of architects combines creativity, technical expertise, and a
          deep understanding of construction management to create innovative and
          functional designs. We specialize in designing architectural
          structures that meet the unique needs and aspirations of our clients,
          while also considering factors such as sustainability, building codes,
          and regulations.
        </Typography>
        <Typography variant="subtitle1">
          Construction Management and Project Oversight
        </Typography>
        <Typography variant="body1">
          With our background in construction management, we possess a unique
          advantage in overseeing the entire construction process. We provide
          comprehensive project management services, ensuring seamless
          coordination between architects, contractors, and other stakeholders.
          Our expertise in construction management allows us to proactively
          address potential challenges, manage budgets and schedules, and
          maintain quality control throughout the project lifecycle.
        </Typography>
        <Typography variant="subtitle1">
          Building Information Modeling (BIM)
        </Typography>
        <Typography variant="body1">
          Utilizing cutting-edge technology, we employ Building Information
          Modeling (BIM) techniques to enhance the design, construction, and
          management of your project. Through BIM, we create detailed digital
          representations of the building, facilitating effective collaboration,
          clash detection, and accurate cost estimation. BIM enables us to
          streamline the construction process, minimize errors, and optimize
          efficiency.
        </Typography>
        <Typography variant="subtitle1">
          Construction Documentation and Administration
        </Typography>
        <Typography sx={{ marginBottom: "20px" }} variant="body1" gutterBottom>
          We assist clients in preparing detailed construction documentation,
          including drawings, specifications, and contracts. Our team
          meticulously reviews and manages the documentation process, ensuring
          compliance with regulatory requirements and industry standards. We
          also provide construction administration services, overseeing the
          construction progress, conducting site visits, and addressing any
          construction-related issues that may arise.
        </Typography>
      </Stack>

      <Stack
        sx={{
          backgroundColor: "secondary.dark",
        }}>
        <Stack
          sx={{
            marginRight: "auto",
            marginLeft: "auto",
            color: "secondary.light",
          }}>
          <Typography sx={{ marginTop: "20px" }} variant="subtitle1">
            OUR CUSTOMERS
          </Typography>
        </Stack>
        <Stack
          gap={2}
          sx={{
            marginRight: "2%",
            marginLeft: "2%",
            "@media (min-width: 600px)": {
              marginRight: "10%",
              marginLeft: "10%",
            },
          }}>
          <Typography sx={{ color: "primary.main" }} variant="subtitle2">
            Homeowners and Residential Clients:
          </Typography>
          <Typography sx={{ color: "secondary.light" }} variant="body1">
            We work closely with homeowners to bring their dream homes to life.
            Whether it is a new construction project or a renovation, we
            collaborate with clients to understand their unique vision,
            lifestyle needs, and budgetary considerations. Our expertise in
            construction management ensures a smooth and efficient process,
            resulting in beautifully designed and well-executed residential
            spaces that reflect the personality and preferences of our clients.
          </Typography>
          <Typography sx={{ color: "primary.main" }} variant="subtitle2">
            Commercial and Retail Businesses:
          </Typography>
          <Typography sx={{ color: "secondary.light" }} variant="body1">
            We cater to the architectural needs of commercial and retail
            businesses, including office spaces, retail stores, restaurants, and
            hospitality establishments. Our team understands the importance of
            functional and aesthetically pleasing environments that enhance
            productivity, customer experience, and brand identity. Through
            effective project management, we deliver commercial spaces that
            align with our clients' objectives while adhering to timelines and
            budgets.
          </Typography>
          <Typography sx={{ color: "primary.main" }} variant="subtitle2">
            Real Estate Developers and Contractors:
          </Typography>
          <Typography sx={{ color: "secondary.light" }} variant="body1">
            We collaborate with real estate developers and contractors,
            providing architectural design and construction management services
            for their projects. Our team brings value to these partnerships by
            creating designs that balance aesthetic appeal, functionality, and
            cost-effectiveness. Through our construction management expertise,
            we help developers and contractors achieve successful project
            outcomes, maximizing returns on investment and ensuring client
            satisfaction.
          </Typography>
          <Typography sx={{ color: "primary.main" }} variant="subtitle2">
            Collaborations with Design Professionals:
          </Typography>
          <Typography
            sx={{ color: "secondary.light", marginBottom: "20px" }}
            variant="body1">
            We value partnerships with fellow design professionals, such as
            interior designers, landscape architects, and engineers. By
            collaborating closely with these experts, we integrate their
            specialized knowledge into our architectural designs, resulting in
            cohesive and harmonious spaces. Our focus on construction management
            ensures seamless coordination among all design disciplines, leading
            to well-executed projects that meet the highest standards of
            quality.
          </Typography>
        </Stack>
      </Stack>
      <Stack sx={{ backgroundColor: "#05014a" }}>
        <Stack
          gap={2}
          sx={{
            marginRight: "2%",
            marginLeft: "2%",
            "@media (min-width: 600px)": {
              marginRight: "10%",
              marginLeft: "10%",
            },
          }}>
          <Typography
            variant="subtitle1"
            color={"secondary.light"}
            sx={{
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "20px",
              marginBottom: "20px",
            }}>
            Design Approach
          </Typography>
          <Stack
            gap={3}
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: "10px",
              "@media (max-width: 600px)": {
                display: "grid",
                gridTemplateColumns: "1fr",
              },
            }}>
            <Stack gap={2}>
              <Typography color="secondary.light" variant="subtitle2">
                Integrated Design and Construction Management:
              </Typography>
              <Typography color="primary.light" variant="body1">
                At Smart Designs, we firmly believe in the power of integrating
                design and construction management throughout the project
                lifecycle. Our approach seamlessly combines architectural design
                expertise with comprehensive construction management, resulting
                in efficient project execution and exceptional outcomes.
              </Typography>
            </Stack>
            <Stack gap={2}>
              <Typography color="secondary.light" variant="subtitle2">
                Collaborative Design-Build Process:
              </Typography>
              <Typography color="primary.light" variant="body1">
                We employ a collaborative design-build process that encourages
                open communication and active participation from all
                stakeholders. From the initial conceptualization to the final
                construction, our team, including architects and construction
                managers, work closely together. This collaborative approach
                ensures that the design intent is effectively translated into
                the construction phase, reducing potential conflicts, minimizing
                delays, and maintaining design integrity.
              </Typography>
            </Stack>
            <Stack gap={2}>
              <Typography color="secondary.light" variant="subtitle2">
                Architect's Role in Drawing the Building:
              </Typography>
              <Typography color="primary.light" variant="body1">
                Our architects play a crucial role in the drawing and
                visualization of the building. They possess the expertise to
                create accurate and detailed architectural drawings that serve
                as the foundation for the construction process. By leveraging
                their architectural knowledge and design sensibilities, our
                architects create comprehensive drawings that not only depict
                the building's form, structure, and spatial arrangement but also
                incorporate essential construction details, materials, and
                building systems.
              </Typography>
            </Stack>
            <Stack gap={2}>
              <Typography color="secondary.light" variant="subtitle2">
                Streamlined Construction Document Integration:
              </Typography>
              <Typography color="primary.light" variant="body1">
                Through our integrated approach, our architects work closely
                with the construction management team to ensure seamless
                integration of architectural design into the construction
                documentation. This collaboration facilitates effective
                coordination between architectural drawings, engineering plans,
                and other technical specifications. By streamlining this
                process, we enhance accuracy, mitigate potential conflicts, and
                optimize construction efficiency.
              </Typography>
            </Stack>
            <Stack gap={2}>
              <Typography color="secondary.light" variant="subtitle2">
                Value Engineering and Constructability Analysis:
              </Typography>
              <Typography color="primary.light" variant="body1">
                As part of our design approach, we actively engage in value
                engineering and constructability analysis. We closely examine
                the design intent and construction requirements, seeking
                innovative solutions that maximize value while maintaining
                project feasibility. Our goal is to optimize the building
                design, materials, and construction methods, ensuring
                cost-effectiveness, durability, and sustainability without
                compromising on architectural vision and functionality.
              </Typography>
            </Stack>
            <Stack gap={2}>
              <Typography color="secondary.light" variant="subtitle2">
                Continuous Quality Control and On-Site Supervision:
              </Typography>
              <Typography
                color="primary.light"
                variant="body1"
                sx={{ marginBottom: "20px" }}>
                Throughout the construction phase, our architects and
                construction managers provide continuous quality control and
                on-site supervision. They closely monitor the construction
                process, ensuring adherence to design specifications, addressing
                any design-related issues that arise, and maintaining the
                highest standards of craftsmanship. This hands-on approach
                guarantees that the final built product reflects the original
                design intent and meets our clients' expectations.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Footer />
    </div>
  );
}

export default About;
