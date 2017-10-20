import React from 'react'
import '../css/Content.css'

class ListOfArticles extends React.Component {
  render() {
    const stuff = this.props.chosen;
    const loadingSource = this.props.loading;

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
      </div>
    )
  }
}

export default ListOfArticles