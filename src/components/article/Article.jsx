import React from 'react'
import './article.css'

const Article = ({ imgUrl, date, title, description}) => {
  return (
    <div className='zhiroo__blog-container_article '>
      <div className='zhiroo__blog-container_article-image'>
        <img src={imgUrl} alt="blog" />
      </div>
      <div className='zhiroo__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Read Full Article</p>
        </div>
      </div>
    </div>
  )
}

export default Article