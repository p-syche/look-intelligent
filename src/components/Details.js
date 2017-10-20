import React from 'react'
import PlayerAPI from '../PlayerAPI'
import { Link } from 'react-router-dom'

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Details = (props) => {
  const detail = PlayerAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!detail) {
    return <div>Sorry, but the detail was not found</div>
  }
  return (
    <div>
      <h1>{detail.name} (#{detail.number})</h1>
      <h2>Position: {detail.position}</h2>
      <Link to='/'>Back</Link>
    </div>
  )
}

export default Details;