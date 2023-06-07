import React from 'react'
import styles from "../styles.module.css"
import Footer from "../../components/surfaces/Footer";
import Header from "../../components/surfaces/Header"
import pdisplay from "../../public/pdisplay.jpeg"
import Image from "next/image";


function index() {
  return (
    <div className={styles.about}>
        <Header />
        <div className={styles.aboutbody}>
            <h3 className={styles.abouttitle}>
              ABOUT US
            </h3>
        </div>
        <div className={styles.aboutdescriptionholder}>
          <h3  className={styles.aboutdescription}>Transforming visions into reality, designing spaces that inspire and delight, and crafting structures that stand the test of time</h3>
        </div>
        <div className={styles.xvddhr}>
          <div className={styles.dssvv}>
            <h2 className={styles.plors}>WHAT WE DO</h2>
            <p className={styles.yujnf}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nibh mauris cursus mattis molestie a iaculis at. Libero justo laoreet sit amet cursus sit. Eros in cursus turpis massa tincidunt dui ut ornare lectus.</p>
          </div>
          <div className={styles.dssvv}>
            <h2 className={styles.plors}>HOW WE DO IT</h2>
            <p className={styles.yujnf}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nibh mauris cursus mattis molestie a iaculis at. Libero justo laoreet sit amet cursus sit. Eros in cursus turpis massa tincidunt dui ut ornare lectus.</p>
          </div>
        </div>
        <div className={styles.plsjrnv}>
          <h2 className={styles.abouttitle2}>MEET OUR TEAM</h2>
        </div>
        <div className={styles.bdsfgew}>
          <div className={styles.edggf}>
          <Image src={pdisplay} alt={'john kadere'} className={styles.hvsbf}></Image>
          <h3 className={styles.vdsvd}>JOHN KADERE</h3>
          <h4 className={styles.shvbs}>MANAGING DIRECTOR</h4>
          <p className={styles.kkisf}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className={styles.edggf}>
          <Image src={pdisplay} alt={'john kadere'} className={styles.hvsbf}></Image>
          <h3 className={styles.vdsvd}>JOHN KADERE</h3>
          <h4 className={styles.shvbs}>MANAGING DIRECTOR</h4>
          <p className={styles.kkisf}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>          
          <div className={styles.edggf}>
          <Image src={pdisplay} alt={'john kadere'} className={styles.hvsbf}></Image>
          <h3 className={styles.vdsvd}>JOHN KADERE</h3>
          <h4 className={styles.shvbs}>MANAGING DIRECTOR</h4>
          <p className={styles.kkisf}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default index