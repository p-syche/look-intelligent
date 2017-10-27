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
				buzzfeed: ['buzzfeed','buzzfeed'],
				mashable: ['mashable', 'mashable'],
				reddit: ['Reddit', 'reddit-r-all'],
				dailymail: ['Daily Mail', 'daily-mail'],
				ladbible: ['The Lad Bible', 'the-lad-bible'],
				huffpost: ['The Huffington Post', 'the-huffington-post'],
				verge: ['The Verge', 'the-verge']
				
			},
			appearance: {
				stack: ['Stack Overflow', 'Stack Overflow'],
				pretty: ['Pretty Smart', 'Pretty Smart'],
				newYork: ['The New York Times', 'The New York Times']
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
			});
		}

	}

	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem(`sourceChosen`, JSON.stringify(nextState.chosenSource));
		localStorage.setItem(`appearanceChosen`, JSON.stringify(nextState.chosenAppearance));
	}


	applyChoice(thisAndThat) {
		if(thisAndThat.type === 'chosenSource') {
			this.setState({
				chosenSource: thisAndThat.url
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
					    <Route exact path='/look-intelligent' render={()=><Home 
					    	myState={this.state}
							applyChoice={this.applyChoice}

					    />} />
					    <Route path='/look-intelligent/really-smart' render={()=><Main 
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
