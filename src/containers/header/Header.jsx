import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/toppng.com-freeuse-champion-vector-league-legend-poster-league-of-legends-yasuo-1149x718.png'

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
      <div className='zhiroo__header-image'>
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header