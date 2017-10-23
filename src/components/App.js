import React, { Component } from 'react';
import axios from 'axios';

import base from '../base';
import Header from './Header';
import ListOfArticles from './ListOfArticles';

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
		//check localstorage
		const localStorageRef = localStorage.getItem(`chosenStuff`);

		if(localStorageRef) {
			//update App component's order state
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

		const url = base.apiURLstart + theChoice.chosenSource + base.apiURLend;

		axios.get(url)
	    	.then(res => {
		        // const posts = res.data.map(obj => obj.data);
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
			<div className={"App " + this.state.chosen.chosenAppearance} >
				<h2 className="title">Look Intelligent</h2>
				<Header 
					myState={this.state}
					applyChoice={this.applyChoice}
				/>
				<ListOfArticles 
					chosen={this.state.chosen}
					loading={this.state.loading}
					articles={this.state.articles}
				/>
			</div>
		);
	}
}

export default App;
