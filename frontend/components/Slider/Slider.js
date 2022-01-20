import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "./Slider.module.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

import Navbar from "../Navbar";

import Image from "next/image";
import slider1 from "../../public/1.jpg";
import slider2 from "../../public/2.jpg";
import slider3 from "../../public/3.jpg";


// install Swiper modules
SwiperCore.use([Pagination, Autoplay, Navigation]);

const Slider = () => {
  return (
    <>
      <Navbar />
      <div className={styles.swiper}>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide className={styles.swiperSlide}>
            <Image src={slider1} alt="slider 1" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image src={slider2} alt="slider 2" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <Image src={slider3} alt="slider 3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default Slider;
