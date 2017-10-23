import React from 'react'

const Article = (props) => {
  const singleArticle = props.article;

  return (
    <div className="single-article">
      <h3 className="title">{singleArticle.title}</h3>
      <div className="meta">
        <span className="author">{singleArticle.author}</span>
        <span className="date">{singleArticle.publishedAt}</span>
      </div>
      <div className="main-article">
        <p>{singleArticle.description}</p>
        <a href={singleArticle.url} className="nice-link" target="_blank">Link here</a>
      </div>
      <img src={singleArticle.urlToImage} alt=""/>

    </div>
  )
}

export default Article;