import React from 'react'
import { getFunText } from '../helpers'

const Article = (props) => {
  const singleArticle = props.article;

  return (
    <div className="single-article">
      <div className="border-holder">
        <h3 className="title">
          <a href={singleArticle.url} className="nice-link" target="_blank">
          {singleArticle.description}
          </a>
        </h3>
        <div className="main-article">
          <p className="real-title">{singleArticle.title}</p>
          <p className="fun-text">{getFunText()}</p>
        </div>
        <div className="additional">
          <a href={singleArticle.url} className="nice-link" target="_blank">Link here</a>
          <img src={singleArticle.urlToImage} alt=""/>
          <span className="author">{singleArticle.author}</span>
        </div>
        <div className="meta">
          <span className="date">{singleArticle.publishedAt}</span>
        </div>
      </div>
      
    </div>
  )
}

export default Article;