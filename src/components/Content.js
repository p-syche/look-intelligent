import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ListOfArticles from './ListOfArticles'
import Details from './Details'

// The Content component matches one of two different routes
// depending on the full pathname
class Content extends React.Component {

	render() {

		return (
			<Switch>
			    <Route exact path='/' render={()=><ListOfArticles 
			    	chosen={this.props.chosen}
			    	loading={this.props.loading}
			    />} />
			    <Route path='/:number' component={Details}/>
			</Switch>
			
		)
	}
}


export default Content