import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import c1 from  "../../../public/c1.jpeg"
import c2 from  "../../../public/c2.jpeg"
import c3 from  "../../../public/c3.png"

import styles from '../../surfaces/../../pages/styles.module.css'
import Image from "next/image";


function index({design}) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        loop: true,
        skipSnaps: false,
    })
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState([])
  
    const scrollPrev = useCallback(
      () => emblaApi && emblaApi.scrollPrev(),
      [emblaApi],
    )
    const scrollNext = useCallback(
      () => emblaApi && emblaApi.scrollNext(),
      [emblaApi],
    )
    const scrollTo = useCallback(
      (index) => emblaApi && emblaApi.scrollTo(index),
      [emblaApi],
    )
  
    const onInit = useCallback((emblaApi) => {
      setScrollSnaps(emblaApi.scrollSnapList())
    }, [])
  
    const onSelect = useCallback((emblaApi) => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
      setPrevBtnEnabled(emblaApi.canScrollPrev())
      setNextBtnEnabled(emblaApi.canScrollNext())
    }, [])
  
    useEffect(() => {
      if (!emblaApi) return
  
      onInit(emblaApi)
      onSelect(emblaApi)
      emblaApi.on('reInit', onInit)
      emblaApi.on('reInit', onSelect)
      emblaApi.on('select', onSelect)
    }, [emblaApi, onInit, onSelect])
  
    return (
        <>
            <div className={styles.embla} ref={emblaRef}>
                <div className={styles.emblacontainer}>
                  <img src={design.image1} className={styles.singlehouse}></img>
                    <Image src={c1} className={styles.singlehouse}></Image>
                    <Image src={c2} className={styles.singlehouse}></Image>
                    <Image src={c3} className={styles.singlehouse}></Image>
                </div>
            </div>
            <div className={styles.tryingout} onClick={scrollPrev}> 
                {'<'}
                 </div>
                 <div className={styles.tryingouttwo} onClick={scrollNext}> 
                 {'>'}
                 </div>
        </>

    )
}
export default index