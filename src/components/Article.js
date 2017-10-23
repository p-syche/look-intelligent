import React from 'react'

const Article = (props) => {
  const singleArticle = props.article;

  return (
    <div>
      <p className="title">{singleArticle.title}</p>
      <span>{singleArticle.publishedAt}</span>
      <br />
      <span>{singleArticle.author}</span>
      <br />
      <span>{singleArticle.description}</span>
      <br />
      <img src={singleArticle.urlToImage} alt=""/>
      <br />
      <a href={singleArticle.url} className="nice-link" target="_blank">Link here</a>
      <hr />
    </div>
  )
}

export default Article;