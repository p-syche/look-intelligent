import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ListOfArticles from './ListOfArticles'
import Details from './Details'

// The Content component matches one of two different routes
// depending on the full pathname
const Content = () => (
  <Switch>
    <Route exact path='/content' component={ListOfArticles}/>
    <Route path='/content/:number' component={Details}/>
  </Switch>
)


export default Content

