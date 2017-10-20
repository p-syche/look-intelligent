import React from 'react'

// The ListOfArticles iterates over all of the players and creates
// a link to their profile page.
class ListOfArticles extends React.Component {
  render() {
  const stuff = this.props.chosen;
    
    return (
      <div>
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