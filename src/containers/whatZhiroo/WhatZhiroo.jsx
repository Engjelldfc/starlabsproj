import React from 'react'
import { Feature } from '../../components'
import './whatzhiroo.css'

const WhatZhiroo = () => {
  return (
    <div className='zhiroo__whatzhiroo section__margin gradient__bg' id="whatzhiroo">
      <div className='zhiroo__whatzhiroo-feature'>
        <Feature title="Who are we?" text="Zhiroo A gaming service provider for different games, like Runescape, Oldschool Runescape, CS:GO and much more! Join our discord server or just use livechat , one of our agents will be online! "/>
      </div>
      <div className='zhiroo__whatzhiroo-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>Explore us</p>
      </div>
      <div className='zhiroo__whatzhiroo-container'>
        <Feature title="PVM&Skilling" text="Best prices by veteran OSRS players, top 10 rank worldwide!"/>
        <Feature title="Minigames" text="Fast, Affordable, Efficient and Safe best minigame service provider on Sythe!"/>
        <Feature title="Max Mains Sale" text="Buy a max main for only 65$, 100% hand done, providing screenshot of each level gained from Runelite, no plugins or anything used, best price!" />
      </div>
    </div>
  )
}

export default WhatZhiroo