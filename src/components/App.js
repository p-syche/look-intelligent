import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import axios from 'axios';
import base from '../base';
import AppHome from './AppHome';
import AppChosen from './AppChosen';

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
				pretty: 'Pretty Smart', 
				stack: 'Stack Overflow'
			},
			chosen: {
				source: 'home',
				appearance: 'initial'
			},
			loading: false,
			articles: {}
		}

		this.applyChoice = this.applyChoice.bind(this);
	}

	componentWillMount() {
		const localStorageRef = localStorage.getItem(`chosenStuff`);

		if(localStorageRef) {
			this.setState({
				chosen: JSON.parse(localStorageRef),
				articles: JSON.parse(localStorage.getItem(`chosenArticles`))
			});
		}
	}

	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem(`chosenStuff`, JSON.stringify(nextState.chosen));
		localStorage.setItem(`chosenArticles`, JSON.stringify(nextState.articles));
	}

	applyChoice(theChoice) {

		this.setState({
			chosen: theChoice,
			loading: true,
			articles: {}
		});

		const url = base.apiURLstart + theChoice.source + base.apiURLend;

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

	render() {
		return (
			<Switch>
				<Route exact path="/looking-smart" component={AppChosen}/>
			</Switch>
		);
	}
}

export default App;
