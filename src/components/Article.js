import React from 'react'

const Article = (props) => {
  const singleArticle = props.article;

  return (
    <div>
      <p className="title">{singleArticle.title}</p>
      <span>{singleArticle.publishedAt}</span>
      <br />
      <span>{singleArticle.author}</span>
      <span>{singleArticle.description}</span>
      <img src={singleArticle.urlToImage} alt=""/>
      <a href={singleArticle.url} className="nice-link" target="_blank">Link here</a>
    </div>
  )
}

export default Article;