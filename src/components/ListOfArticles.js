import React from 'react'
import PlayerAPI from '../PlayerAPI'
import { Link } from 'react-router-dom'

// The ListOfArticles iterates over all of the players and creates
// a link to their profile page.
const ListOfArticles = () => (
  <div>
    <p>so this is a list?</p>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/content/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default ListOfArticles