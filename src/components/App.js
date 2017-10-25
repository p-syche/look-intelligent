import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';
import Main from './Main';

import '../scss/App.css';


class App extends Component {
	constructor() {
		super();

		this.state = {
			source: {
				buzzfeed: 'buzzfeed',
				mashable: 'mashable',
				reddit: 'reddit-r-all'
			},
			appearance: {
				stack: 'Stack Overflow',
				pretty: 'Pretty Smart'
			},
			chosenSource: 'something fun',
			chosenAppearance: 'something smart'
		}

		this.applyChoice = this.applyChoice.bind(this);
	}

	componentWillMount() {
		const lStorageRef = localStorage.getItem(`sourceChosen`);
		const lStorageAppearance = localStorage.getItem(`appearanceChosen`);

		if(lStorageRef) {
			this.setState({
				chosenSource: JSON.parse(lStorageRef),
				chosenAppearance: JSON.parse(lStorageAppearance),
				// articles: JSON.parse(localStorage.getItem(`chosenArticles`))
			});
		}

	}

	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem(`sourceChosen`, JSON.stringify(nextState.chosenSource));
		localStorage.setItem(`appearanceChosen`, JSON.stringify(nextState.chosenAppearance));
		// localStorage.setItem(`chosenArticles`, JSON.stringify(nextState.articles));
	}


	applyChoice(thisAndThat) {

		if(thisAndThat.type === 'chosenSource') {
			this.setState({
				chosenSource: thisAndThat.item
			});
		} else {
			this.setState({
				chosenAppearance: thisAndThat.item
			});
		}
	}

	render() {
		return (
			<Router>
				<div className="App initial" >
					<Switch>
					    <Route exact path='/' render={()=><Home 
					    	myState={this.state}
							applyChoice={this.applyChoice}

					    />} />
					    <Route path='/really-smart' render={()=><Main 
					    	myState={this.state}
							applyChoice={this.applyChoice}
							loading={this.loading}
							articles={this.state.articles}
					    />} />
					    <Route render={()=><Home 
					    	myState={this.state}
							applyChoice={this.applyChoice}
					    />} />
					</Switch>
				</div>
			</Router>
			
		);
	}
}

export default App;
