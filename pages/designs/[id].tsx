import React, { useState, useRef, useEffect } from 'react'
import styles from '../styles.module.css'
import Image from 'next/image'
import Header from "../../components/surfaces/Header"
import Footer from "../../components/surfaces/Footer"
import Carousel from '../../components/surfaces/Carousel'
import pdisplay from "../../public/pdisplay.jpeg";
import uparrow from "../../public/uparrow.svg"
import downarrow from '../../public/downarrow.svg';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'


export const getStaticPaths = async () => {
    const res = await fetch("https://smart-designs-backend.onrender.com/designs");
    const { data } = await res.json();

    const paths = data.map((design: any) => {
        return {
            params: { id: design.design_id.toString() },
        };
    });
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context: any) => {
    const id = context.params.id;
    const res = await fetch(
        "https://smart-designs-backend.onrender.com/designs/" + id
    );
    const data = await res.json();
    return {
        props: { design: data.data },
    };
};

const DesignPage: React.FC<{ design: any }> = ({ design }) => {
    const [additionalFeatures, setAdditionalFeatures] = useState<Boolean>(false)
    // return <div>{design.design_id}</div>;
    const [emblaRef] = useEmblaCarousel()

    const carousel = (
        <div className={styles.embla} ref={emblaRef}>
            <div className={styles.emblacontainer}>
                <img src={design.image1} className={styles.singlehouse} alt='house3' ></img>
                <img src={design.image2} className={styles.singlehouse} alt='house3' ></img>
                <img src={design.image3} className={styles.singlehouse} alt='house3' ></img>
                <img src={design.image4} className={styles.singlehouse} alt='house3' ></img>
                <img src={design.image5} className={styles.singlehouse} alt='house3' ></img>
            </div>
        </div>
    )
    return (
        <div className={styles.fbreijhj}>
            <Header />
            <div className={styles.pernvrid}>
                <h3 className={styles.singlepageheader}>{design.property_name}</h3>
                <div className={styles.mainimage}>
                    <Carousel design={design}/>
                </div>
                <div className={styles.singlesdescription}>
                    <h3 className={styles.singleitemprice}>{design.total_price}</h3>
                    <div className={styles.descriptionholder}>
                        <div className={styles.fhurie}>
                            <p className={styles.pidshc}>Property Type:</p>
                            <p className={styles.chwi}>  {design.property_type}</p>
                        </div>
                        <div className={styles.fhurie}>
                            <p className={styles.pidshc}>Size:</p>
                            <p className={styles.chwi}>  {design.property_size}</p>
                        </div>            </div>
                    <div className={styles.descriptionholder}>
                        <div className={styles.fhurie}>
                            <p className={styles.pidshc}>Status:</p>
                            <p className={styles.chwi}> {design.status}</p>
                        </div>
                        <div className={styles.fhurie}>
                            <p className={styles.pidshc}>Class of Finishes:</p>
                            <p className={styles.chwi}> {design
                                .class_of_finishes}</p>
                        </div>            </div>
                    <div className={styles.descriptionholder}>
                        <div className={styles.fhurie}>
                            <p className={styles.pidshc}>County</p>
                            <p className={styles.chwi}>  {design.county}</p>
                        </div>
                        <div className={styles.fhurie}>
                            <p className={styles.pidshc}>Location:</p>
                            <p className={styles.chwi}> {design.location}</p>
                        </div>
                    </div>
                    <div className={styles.descriptionholder}>
                        <div className={styles.fhurie}>
                            <p className={styles.pidshc}>Bathrooms:</p>
                            <p className={styles.chwi}> {design.no_of_bathrooms}</p>
                        </div>
                        <div className={styles.fhurie}>
                            <p className={styles.pidshc}>Bedrooms:</p>
                            <p className={styles.chwi}>{design.no_of_bedrooms}</p>
                        </div>
                    </div>
                    <div className={styles.descriptionholder}>

                    </div>
                    <hr className={styles.singleshr}></hr>
                    <div>
                        <div className={styles.singlefeatures}>
                            <h3 className={styles.cbwefe}>Features</h3>
                            <ul className={styles.lkdir}>
                                <li className={styles.vcbreu}>{design.feature1}</li>
                                <li className={styles.vcbreu}>{design.feature2}</li>
                                <li className={styles.vcbreu}>{design.feature3}</li>
                                <li className={styles.vcbreu}>{design.feature4}</li>
                                <li className={styles.vcbreu}>{design.feature5}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.vbebjrf}>
                    <h3 className={styles.nverios}>Reply to this listing</h3>
                    <form className={styles.nvervre}>
                        <input className={styles.wefhiwf} type='text' placeholder='Name' ></input>
                        <input className={styles.wefhiwf} type='text' placeholder='Email'></input>
                        <input className={styles.fmvcdsi} type='text' placeholder='Message'></input>
                        <button type='submit' className={styles.owrfsur} >SUBMIT</button>
                    </form>
                </div>
            </div>

            <div className={styles.lgonly}>
                <div className={styles.firkej}>
                    <div className={styles.frwvrio}>
                        <h3 className={styles.oewfprrf}>3 bedroom Bungalow</h3>
                        <div className={styles.mainimage}>
                            <Carousel design={design}/>
                        </div>
                        <div className={styles.addfcontainer}>
                            <div className={styles.showsaddfeatures}>

                                <div className={styles.jcorsdo}>
                                    <h4 className={styles.jrpeks}>ADDITIONAL FEATURES</h4>
                                    {additionalFeatures ?
                                        <div onClick={() => setAdditionalFeatures(false)} >
                                            <Image src={uparrow} alt='up' className={styles.downsvg} ></Image>
                                        </div>
                                        :
                                        <div onClick={() => setAdditionalFeatures(true)}>
                                            <Image src={downarrow} alt='up' className={styles.downsvg}></Image>
                                        </div>
                                    }
                                </div>
                                {additionalFeatures ?
                                    <div className={styles.sliderdown}>
                                        <hr ></hr>
                                        <div className={styles.hfiuero}>
                                            <ul>
                                                <li className={styles.vcbreu}>{design.feature1}</li>
                                                <li className={styles.vcbreu}>{design.feature2}</li>
                                                <li className={styles.vcbreu}>{design.feature3}</li>
                                                <li className={styles.vcbreu}>{design.feature4}</li>
                                                <li className={styles.vcbreu}>{design.feature5}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    :
                                    null
                                }
                            </div>
                        </div>
                        <div className={styles.vbebjrf}>
                            {/* <hr className={styles.singlehr} ></hr> */}
                            <h3 className={styles.nverios}>Reply to this listing</h3>
                            <form className={styles.nvervre}>
                                <input className={styles.wefhiwf} type='text' placeholder='Name' ></input>
                                <input className={styles.wefhiwf} type='text' placeholder='Email'></input>
                                <input className={styles.fmvcdsi} type='text' placeholder='Message'></input>
                                <button type='submit' className={styles.owrfsur} >SUBMIT</button>
                            </form>
                        </div>
                    </div>
                    <div className={styles.fvuheri}>
                        <div className={styles.singlesdescription}>
                            <div>
                                <div className={styles.singlefeatures}>
                                    <h3 className={styles.cbwefe}>Features</h3>
                                    <ul className={styles.lkdir}>
                                        <li className={styles.vcbreu}>{design.property_name}</li>
                                        <li className={styles.vcbreu}>{design.property_type}</li>
                                        <li className={styles.vcbreu}>{`${design.location}, ${design.county}`}</li>
                                        <li className={styles.vcbreu}>{`${design.class_of_finishes} finishing`}</li>
                                        <li className={styles.vcbreu}>{design.no_of_bathrooms} Bathrooms</li>
                                        <li className={styles.vcbreu}>{design.no_of_bedrooms} Bedrooms</li>
                                    </ul>
                                    <h4 className={styles.prncjre}>PLAN PRICE</h4>
                                    <h3 className={styles.sdjvreu}>Ksh. {design.total_price}</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
};

export default DesignPage;
