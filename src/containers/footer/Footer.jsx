import React from 'react'
import './footer.css'
import logo from '../../assets/logo.gif'

const Footer = () => {
  return (
    <div className='zhiroo__footer section__padding gradient__bg'>
      <div className='zhiroo__footer-heading'>
        <h1 className='gradient__text'>
          Do you want to step into the future before others?
        </h1>
        </div>
        <div className='zhiroo__footer-btn'>
          <p>Request Early Access</p>
        </div>
        <div className='zhiroo__footer-links'>
          <div className='zhiroo__footer-links_logo'>
            <img src={logo}  alt="logo"/>
            <p>All rights reserved</p>
          </div>
          <div className='zhiroo__footer-links_div'>
            <h4>Links</h4>
            <a href="http://facebook.com" target='_blank'><p>Social Media</p></a>
            <p>Discounts</p>
            <a href='http://sythe.org/zhiroo-vouches' target='_blank'><p>Sythe Vouches</p></a>
          </div>
          <div className='zhiroo__footer-links_div'>
            <h4>Company</h4>
            <p>Terms&Conditions</p>
            <p>Privacy Policy</p>
            <a href="http://discord.gg/zhiroo" target='_blank'><p>Contact</p></a>
          </div>
          <div className='zhiroo__footer-links_div'>
            <h4>Get in touch</h4>
            <p>+383 49 49 49 49</p>
            <p>zhiroo@info.com</p>
            <p>Discord: Zhiroo#0001</p>
          </div>
        </div>
        <div className='zhiroo__footer-copyright'>
          <p>2022 Zhiroo , All Rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer