import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import axios from 'axios';
import base from '../base';
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
			chosenSource: 'home',
			chosenAppearance: 'initial',
			loading: false,
			articles: {}
		}

		this.applyChoice = this.applyChoice.bind(this);
		this.applyHomeChoice = this.applyHomeChoice.bind(this);
	}

	componentWillMount() {
		// const localStorageRef = localStorage.getItem(`chosenStuff`);

		// if(localStorageRef) {
		// 	this.setState({
		// 		chosen: JSON.parse(localStorageRef),
		// 		articles: JSON.parse(localStorage.getItem(`chosenArticles`))
		// 	});
		// }

	}

	componentWillUpdate(nextProps, nextState) {
		// localStorage.setItem(`chosenStuff`, JSON.stringify(nextState.chosen));
		// localStorage.setItem(`chosenArticles`, JSON.stringify(nextState.articles));
	}

	applyChoice(theChoice) {

		this.setState({
			chosen: {
				source: theChoice,
				appearance: 'initial'
			},
			loading: true,
			articles: {}
		});

		const url = base.apiURLstart + theChoice + base.apiURLend;

		axios.get(url)
	    	.then(res => {
		        this.setState({ 
		        	loading: false,
		        	articles: res.data.articles
		        });

			}).catch(error => {
				console.log(error);
		});

	}

	applyHomeChoice(thisAndThat) {

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
							applyHomeChoice={this.applyHomeChoice}

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
