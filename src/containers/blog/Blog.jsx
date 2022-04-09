import React from 'react'
import './blog.css'
import {Article} from '../../components/'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
  return (
    <div className='zhiroo__blog section__padding' id='blog'>
      <div className='zhiroo__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening, we are blogging about it.
        </h1>   
      </div>
      <div className='zhiroo__blog-container'>
        <div className='zhiroo__blog-container_groupA'>
          <Article imgUrl={blog01} date="April 09, 2022" title="Theatre of Blood!" description="The Theatre of Blood is a large arena located beneath the castle of Ver Sinhaza. It is used by the ruling vampyres to host blood sports. Here, the citizens of Meiyerditch are encouraged to go to the theatre and fight against the various experiments and abominations contained within, with the promise of freedom from the blood tithes and the right to leave Morytania should they succeed. The reward is revealed to be a ruse as the vampyres are unwilling to let go of their primary food source." />
        </div>
        <div className='zhiroo__blog-container_groupB'>
          <Article imgUrl={blog02} date="April 09, 2022" title="Phosani Nightmare!"/>
          <Article imgUrl={blog03} date="April 09, 2022" title="Godwars Nex!" />
          <Article imgUrl={blog04} date="April 09, 2022" title="Tombs of Amascut!" />
          <Article  imgUrl={blog05} date="April 09, 2022"  title="Team fight 5v5!"/>
        </div>
      </div>
    </div>
  )
}

export default Blog