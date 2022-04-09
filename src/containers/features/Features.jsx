import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData = [
  {
    title: 'Sythe Veteran',
    text: '200+ positive reviews on Sythe by Sythe staff members or really trusted members, trusted with more then 5K$+ on account.',
  },
  {
    title: 'Discord Server',
    text: 'Healthy, good attitude Discord server, helpful join us.',
  },
  {
    title: 'Player Auction',
    text: '400+ positive reviews on Player Auction website, sold more then 500 accounts without a problem to any of our costumers',
  },
  {
    title: 'Veterans',
    text: 'Veteran players on every game we provide service, 7+ years Runescape players, 10+ years Counter-Strike boosters, top 10 rank World Of Warcraft players.',
  },
]

const Features = () => {
  return (
    <div className='zhiroo__features section__padding' id='why-us'>
      <div className='zhiroo__features-heading'>
        <h1 className='gradient__text'>
          Why us ?
        </h1>
        <p>
          Request early access for 5% discount on every order!
        </p>
      </div>
      <div className='zhiroo__features-container'>
        {featuresData.map((item, index) =>(
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features