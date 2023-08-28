import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css'
import sergio_alexelcapo from './img/sergio_alexelcapo.png'
import sergio_deprimido from './img/sergio_deprimido.png'
import sergio_detective from './img/sergio_detective.png'
import sergio_chicosano from './img/sergio_chicosano.png'
import sergio_rockstar from './img/sergio_rockstar.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>¿Qué Sergio Eres Hoy?</h1>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={sergio_alexelcapo} alt="Sergio alexelcapo"/><h1>Sergio Alexelcapo  &#9996;</h1></SwiperSlide>
        <SwiperSlide><img src={sergio_deprimido} alt="Sergio deprimido"/><h1>Sergio Deprimido &#128546;</h1></SwiperSlide>
        <SwiperSlide><img src={sergio_detective} alt="Sergio detective"/><h1>Sergio Detective &#128526;</h1></SwiperSlide>
        <SwiperSlide><img src={sergio_chicosano} alt="Sergio chico sano"/><h1>Sergio Libertad 🗽</h1></SwiperSlide>
        <SwiperSlide><img src={sergio_rockstar} alt="Sergio rockstar"/><h1>Sergio Rockstar &#127928;</h1></SwiperSlide>
      </Swiper>
    </>
  )
}

export default App
