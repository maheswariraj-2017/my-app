import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";




//image import
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";


const ImageSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide>
        <img src={img1} alt="Slide 1" style={{ width: "95%", borderRadius:"25px",position:"relative",left:"50px"}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="Slide 2" style={{ width: "95%",borderRadius:"25px",position:"relative",left:"50px" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="Slide 3" style={{ width: "95%", borderRadius:"25px",position:"relative",left:"50px"}} />
      </SwiperSlide>
    </Swiper>
  );
};
  
  export default ImageSlider;
  