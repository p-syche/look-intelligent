import React, { Component } from 'react';

// import base from '../base';
import Header from './Header';
import Content from './Content';

import '../css/App.css';

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
				pretty: 'pretty', 
				stack: 'stack-overflow'
			},
			chosen: {
				source: '1',
				appearance: 'no'
			}
		}

		this.applyChoice = this.applyChoice.bind(this);
	}

	componentWillMount() {
		//check localstorage
		const localStorageRef = localStorage.getItem(`chosenStuff`);

		if(localStorageRef) {
			//update App component's order state
			this.setState({
				chosen: JSON.parse(localStorageRef)
			});
		}
	}

	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem(`chosenStuff`, JSON.stringify(nextState.chosen));
	}

	applyChoice(theChoice) {
		console.log('the choice was made!', theChoice);
		this.setState({
			chosen: theChoice
		});
	}

	render() {
		return (
			<div className="App">
				<h2 className="title">Look Intelligent</h2>
				<Header 
					myState={this.state}
					applyChoice={this.applyChoice}
				/>
				<Content 
					chosen={this.state.chosen}
				/>
			</div>
		);
	}
}

export default App;
