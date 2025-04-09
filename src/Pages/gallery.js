import React from 'react';
import '../Components/Gallery/gallery.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import img1 from '../assets/lakeside/course1.jpg';
import img2 from '../assets/lakeside/course2.jpg';
import img3 from '../assets/lakeside/course3.jpg';
import img4 from '../assets/lakeside/course4.jpg';
// Add more images here

const Gallery = () => {
  return (
    <div className="gallery-page">
      <h2>Gallery</h2>
      <p>Take a look at the fun at Lakeside Mini Golf!</p>
      <Swiper navigation={true} modules={[Navigation]} className="gallery-slider">
        <SwiperSlide><img src={img1} alt="Mini golf fun 1" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="Mini golf fun 2" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="Mini golf fun 3" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="Mini golf fun 4" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;
