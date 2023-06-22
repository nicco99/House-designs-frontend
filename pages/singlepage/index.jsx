// import React, { useState } from 'react'
// import styles from '../styles.module.css'
// import Image from 'next/image'
// import Header from "../../components/surfaces/Header"
// import Footer from "../../components/surfaces/Footer"
// import Carousel from '../../components/surfaces/Carousel'
// import pdisplay from "../../public/pdisplay.jpeg";
// import uparrow from "../../public/uparrow.svg"
// import downarrow from '../../public/downarrow.svg'

// function singlepage() {
//     const images = [
//         pdisplay,
//         pdisplay,
//         pdisplay
//     ]
//     const [additionalFeatures, setAdditionalFeatures] = useState(false)
//     return (
//         <div className={styles.fbreijhj}>
//             <Header />
//             <div className={styles.pernvrid}>
//                 <h3 className={styles.singlepageheader}>3 bedroom Bungalow</h3>
//                 <div className={styles.mainimage}>
//                     <Image src={pdisplay} className={styles.singlehouse} alt='house3' ></Image>
//                 </div>
//                 <div className={styles.singlesdescription}>
//                     <h3 className={styles.singleitemprice}>Ksh 30 000 000</h3>
//                     <div className={styles.descriptionholder}>
//                         <div className={styles.fhurie}>
//                             <p className={styles.pidshc}>Property Type:</p>
//                             <p className={styles.chwi}>  Residential</p>
//                         </div>
//                         <div className={styles.fhurie}>
//                             <p className={styles.pidshc}>Size:</p>
//                             <p className={styles.chwi}>  1290 sqft</p>
//                         </div>            </div>
//                     <div className={styles.descriptionholder}>
//                         <div className={styles.fhurie}>
//                             <p className={styles.pidshc}>Construction Period:</p>
//                             <p className={styles.chwi}>  3 years</p>
//                         </div>
//                         <div className={styles.fhurie}>
//                             <p className={styles.pidshc}>Contact Type:</p>
//                             <p className={styles.chwi}>  Inclusive</p>
//                         </div>            </div>
//                     <div className={styles.descriptionholder}>
//                         <div className={styles.fhurie}>
//                             <p className={styles.pidshc}>County</p>
//                             <p className={styles.chwi}>  Kirinyaga</p>
//                         </div>
//                         <div className={styles.fhurie}>
//                             <p className={styles.pidshc}>Location:</p>
//                             <p className={styles.chwi}>  Kerugoya</p>
//                         </div>
//                     </div>
//                     <div className={styles.descriptionholder}>
//                         <div className={styles.fhurie}>
//                             <p className={styles.pidshc}>Bathrooms:</p>
//                             <p className={styles.chwi}>  2</p>
//                         </div>
//                         <div className={styles.fhurie}>
//                             <p className={styles.pidshc}>Bedrooms:</p>
//                             <p className={styles.chwi}> 3</p>
//                         </div>
//                     </div>
//                     <hr className={styles.singleshr}></hr>
//                     <div>
//                         <div className={styles.singlefeatures}>
//                             <h3 className={styles.cbwefe}>Features</h3>
//                             <ul className={styles.lkdir}>
//                                 <li className={styles.vcbreu}>Heated Floors</li>
//                                 <li className={styles.vcbreu}>High Ceiling</li>
//                                 <li className={styles.vcbreu}>Hot Shower</li>
//                                 <li className={styles.vcbreu}>Pressurized Water</li>
//                                 <li className={styles.vcbreu}>Garbage Dispenser</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={styles.vbebjrf}>
//                     <h3 className={styles.nverios}>Reply to this listing</h3>
//                     <form className={styles.nvervre}>
//                         <input className={styles.wefhiwf} type='text' placeholder='Name' ></input>
//                         <input className={styles.wefhiwf} type='text' placeholder='Email'></input>
//                         <input className={styles.fmvcdsi} type='text' placeholder='Message'></input>
//                         <button type='submit' className={styles.owrfsur} >SUBMIT</button>
//                     </form>
//                 </div>
//             </div>

//             <div className={styles.lgonly}>
//                 <div className={styles.firkej}>
//                     <div className={styles.frwvrio}>
//                         <h3 className={styles.oewfprrf}>3 bedroom Bungalow</h3>
//                         <div className={styles.mainimage}>
//                             <Image src={pdisplay} className={styles.singlehouse} alt='house3' ></Image>
//                         </div>
//                         <div className={styles.addfcontainer}>
//                         <div className={styles.showsaddfeatures}>

//                             <div className={styles.jcorsdo}>
//                                 <h4 className={styles.jrpeks}>ADDITIONAL FEATURES</h4>
//                                 {additionalFeatures ?
//                                     <div onClick={() => setAdditionalFeatures(false)} >
//                                         <Image src={uparrow} alt='up' className={styles.downsvg} ></Image>
//                                     </div>
//                                     :
//                                     <div onClick={() => setAdditionalFeatures(true)}>
//                                         <Image src={downarrow} alt='up' className={styles.downsvg}></Image>
//                                     </div>
//                                 }
//                             </div>
//                             {additionalFeatures ?
//                                 <div className={styles.sliderdown}>
//                                     <hr ></hr>
//                                     <div className={styles.hfiuero}>
//                                         <ul>
//                                             <li className={styles.vcbreu}>Heated Floors</li>
//                                             <li className={styles.vcbreu}>High Ceiling</li>
//                                             <li className={styles.vcbreu}>Hot Shower</li>
//                                             <li className={styles.vcbreu}>Pressurized Water</li>
//                                             <li className={styles.vcbreu}>Garbage Dispenser</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 :
//                                 null
//                             }
//                         </div>
//                         </div>
//                         <div className={styles.vbebjrf}>
//                         {/* <hr className={styles.singlehr} ></hr> */}
//                             <h3 className={styles.nverios}>Reply to this listing</h3>
//                             <form className={styles.nvervre}>
//                                 <input className={styles.wefhiwf} type='text' placeholder='Name' ></input>
//                                 <input className={styles.wefhiwf} type='text' placeholder='Email'></input>
//                                 <input className={styles.fmvcdsi} type='text' placeholder='Message'></input>
//                                 <button type='submit' className={styles.owrfsur} >SUBMIT</button>
//                             </form>
//                         </div>
//                     </div>
//                     <div className={styles.fvuheri}>
//                         <div className={styles.singlesdescription}>
//                             {/* <h3 className={styles.singleitemprice}>Ksh 30 000 000</h3>
//                             <div className={styles.descriptionholder}>
//                                 <div className={styles.fhurie}>
//                                     <p className={styles.pidshc}>Property Type:</p>
//                                     <p className={styles.chwi}>  Residential</p>
//                                 </div>
//                                 <div className={styles.fhurie}>
//                                     <p className={styles.pidshc}>Size:</p>
//                                     <p className={styles.chwi}>  1290 sqft</p>
//                                 </div>            </div>
//                             <div className={styles.descriptionholder}>
//                                 <div className={styles.fhurie}>
//                                     <p className={styles.pidshc}>Construction Period:</p>
//                                     <p className={styles.chwi}>  3 yrs</p>
//                                 </div>
//                                 <div className={styles.fhurie}>
//                                     <p className={styles.pidshc}>Contract Type:</p>
//                                     <p className={styles.chwi}>  Inclusive</p>
//                                 </div>            </div>
//                             <div className={styles.descriptionholder}>
//                                 <div className={styles.fhurie}>
//                                     <p className={styles.pidshc}>County</p>
//                                     <p className={styles.chwi}>  Kirinyaga</p>
//                                 </div>
//                                 <div className={styles.fhurie}>
//                                     <p className={styles.pidshc}>Location:</p>
//                                     <p className={styles.chwi}>  Kerugoya</p>
//                                 </div>
//                             </div>
//                             <div className={styles.descriptionholder}>
//                                 <div className={styles.fhurie}>
//                                     <p className={styles.pidshc}>Bathrooms:</p>
//                                     <p className={styles.chwi}>  2</p>
//                                 </div>
//                                 <div className={styles.fhurie}>
//                                     <p className={styles.pidshc}>Bedrooms:</p>
//                                     <p className={styles.chwi}> 3</p>
//                                 </div>
//                             </div> */}
//                             <div>
//                                 <div className={styles.singlefeatures}>
//                                     <h3 className={styles.cbwefe}>Features</h3>
//                                     <ul className={styles.lkdir}>
//                                         <li className={styles.vcbreu}>Residential Houses</li>
//                                         <li className={styles.vcbreu}>2 Years construction period</li>
//                                         <li className={styles.vcbreu}>Kerugoya, Kirinyaga</li>
//                                         <li className={styles.vcbreu}>Binding Contract</li>
//                                         <li className={styles.vcbreu}>2 Bathrooms</li>
//                                         <li className={styles.vcbreu}>3 Bedrooms</li>
//                                     </ul>
//                                     <h4 className={styles.prncjre}>PLAN PRICE</h4>
//                                     <h3 className={styles.sdjvreu}>Ksh 30 000 000</h3>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>

//             </div>
//             <Footer />
//         </div>
//     )
// }

// export default singlepage

// import React from 'react'
// import Image from 'next/image';
// import { useState, useEffect, useCallback } from "react";
// import  useEmblaCarousel from 'embla-carousel-react';
// import pdisplay from "../../public/pdisplay.jpeg";
// import c2 from '../../public/c2.jpeg'

// function index() {

//     const images = [
//         pdisplay,
//         pdisplay
//     ]

//     const [emblaRef, embla] = useEmblaCarousel({
//         align: "start",
//         loop: true,
//         skipSnaps: false,
//         inViewThreshold: 0.7,
//     })
//     const [selectedIndex, setSelectedIndex] = useState(0);
//     const [scrollSnaps, setScrollSnaps] = useState([]);
//     const onSelect = useCallback(() => {
//         if (!embla) return;
//         setSelectedIndex(embla.selectedScrollSnap());
//       }, [embla, setSelectedIndex]);
//   return (
//     <div>
//         <div className='embla' ref={emblaRef}>
//         { images.map((image) => {
//        return  <Image src={image} alt='image' key={image.index}></Image>
//     })}
//         </div>

//     </div>
//   )
// }

// export default index
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from '../styles.module.css'


function index() {
    const [emblaRef] = useEmblaCarousel()

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.emblacontainer}>
        <div className={styles.emblaslide}>Slide 2</div>
        <div className={styles.emblaslide}>Slide 3</div>
      </div>
    </div>
  )
}
export default index
