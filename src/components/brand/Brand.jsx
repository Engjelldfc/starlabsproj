import React from 'react'
import './brand.css'
import { sythe, runescape, oposrs} from './imports'

const Brand = () => {
  return (
    <div>
      <div className='zhiroo__brand section__padding'>
        <div>
          <img src={sythe} alt="sythe"/>
        </div>
        <div>
          <img src={runescape} alt="runescape"/>
        </div>
        <div>
          <img src={oposrs} alt="open osrs"/>
        </div>
      </div>
    </div>
  )
}

export default Brand