import React from 'react'
import Article from './Article'
import DummyContent from './DummyContent'

class ListOfArticles extends React.Component {
  render() {
    const loadingSource = this.props.loading;
    const articles = this.props.articles;

    return (
      <div className="content container" >
        <DummyContent chosenAppearance={this.props.chosenAppearance}/>
        <div className={loadingSource ? 'loading-now' : 'not-loading'} >
          LOADING! {this.props.chosenSource}
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