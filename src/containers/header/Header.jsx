import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import { Swiper, SwiperSlide } from "swiper/react";
import header1 from '../../assets/toppng.com-freeuse-champion-vector-league-legend-poster-league-of-legends-yasuo-1149x718.png'
import header2 from '../../assets/Strongest-OSRS-Bosses-Sotetseg.png'
import header3 from '../../assets/Nex.png'
import header4 from '../../assets/1200px-Cerberus.png'
import header5 from '../../assets/png-Runescape-Old-School-Boss-Queen-Black-Dragon-Rs3-black-dragon_thumbnail.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const Header = () => {
  return (
    <div className='zhiroo__header section__padding' id='home'>
      <div className='zhiroo__header-content'>
        <h1 className='gradient__text'>Zhiroo PVM&Skilling Services!</h1>
        <p>Best gaming services on many sites , trusted member with thousand of dollars!<br></br> By getting started with email you will receive 5% discount on every order!</p>
        <div className='zhiroo__header-content__input'>
          <input type="email" placeholder='Your email address'/>
          <button type='button'>Get Started</button>
        </div>
        <div className='zhiroo__header-content__people' >
          <img src={people} alt="people" />
          <p>1600 People requested access</p>
        </div>
      </div>
      <>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="zhiroo__header-image"
      >
        <SwiperSlide><img src={header4}/></SwiperSlide>
        <SwiperSlide><img src={header1}/></SwiperSlide>
        <SwiperSlide><img src={header2}/></SwiperSlide>
        <SwiperSlide><img src={header3}/></SwiperSlide>
        <SwiperSlide><img src={header5}/></SwiperSlide>
      </Swiper>
    </>
    </div>
  )
}

export default Header