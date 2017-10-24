import React from 'react'
import Article from './Article'

class ListOfArticles extends React.Component {
  render() {
    const chosenStuff = this.props.chosen;
    const loadingSource = this.props.loading;
    const articles = this.props.articles;

    if(chosenStuff.source === 'home') {
      return (
        <div className="home-page">
          <h4>Welcome! Choose something :)</h4>
        </div>
      )
      
    }

    return (
      <div className="content container" >
        <div className={loadingSource ? 'loading-now' : 'not-loading'} >
          LOADING!
        </div>
        <div className="row">
              {
                Object
                  .keys(articles)
                  .map(key =>
                    <Article key={key} article={this.props.articles[key]}/>
                  )
              }
        </div>
        
      </div>
    )
  }
}

export default ListOfArticles