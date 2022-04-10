import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai1 from '../../assets/toppng.com-freeuse-champion-vector-league-legend-poster-league-of-legends-yasuo-1149x718.png'
import ai2 from '../../assets/blog01.png'
import ai3 from '../../assets/toppng.com-freeuse-champion-vector-league-legend-poster-league-of-legends-yasuo-1149x718.png'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    img: ai1,
  },
  {
    id: 2,
    img: ai2,
  },
  {
    id: 3,
    img: ai3,
  },
]

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
      <Swiper className="zhiroo__header-image"
      modules={[ Pagination ]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({id, img}) => {
            return (
              <SwiperSlide key={id}>
              <div className='zhiroo__header-image'>
                <img src={img} alt="ai" />
              </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default Header