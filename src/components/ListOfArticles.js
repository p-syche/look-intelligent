import React from 'react'
import Article from './Article'
import '../css/Content.css'

class ListOfArticles extends React.Component {
  render() {
    const stuff = this.props.chosen;
    const loadingSource = this.props.loading;
    const articles = this.props.articles;

    return (
      <div className="content">
      <div className={loadingSource ? 'loading-now' : 'not-loading'} >
        LOADING!
      </div>
        <ul>
          {
            Object
              .keys(stuff)
              .map((key, value) =>
                <li value={key} key={key} index={key}>
                  {stuff[key]}
                </li> 
              )
          }
        </ul>
        <ul>
          {
            Object
              .keys(articles)
              .map(key =>
                <Article key={key} article={this.props.articles[key]}/>
              )
          }
        </ul>
      </div>
    )
  }
}

export default ListOfArticles