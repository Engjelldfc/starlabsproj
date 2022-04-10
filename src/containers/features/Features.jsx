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
        1.Best Prices Anywhere
        Our abundant stock size gives us confidence that our prices are the lowest that you will find!<br></br>
        2.Safety Guarantee
        Having 12 years of experience in the business allows us to efficiently and confidently deal with all kinds of issues.<br></br>
        3.24 Hours Guarantee
        With professional online service group, we can guarantee 24/7 high quality service.<br></br>
        4.100% Refund Policy
        100% Money-back Refunds can be made as long as the order
        is cancelled before the goods arrive.
        Most reimursements will take up to 24-48 hours to be processed.
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