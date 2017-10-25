import React, { Component } from 'react';

import axios from 'axios';
import base from '../base';

import Header from './Header';
import ListOfArticles from './ListOfArticles';

class Main extends Component {
	constructor() {
		super();

		this.state = {
			loading: false,
			articles: {}
		}

		this.loadArticles = this.loadArticles.bind(this);
	}

	componentWillMount() {
		const sourceOnLoad = this.props.myState.chosenSource;
		this.loadArticles(sourceOnLoad);
	}

	loadArticles(item) {
		this.setState({
			loading: true,
			articles: {}
		});

		const url = base.apiURLstart + item + base.apiURLend;

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
		const currentAppearance = this.props.myState.chosenAppearance;

		return (
			<div className={"Main " + currentAppearance}>
				<Header
					myState={this.props.myState}
					applyChoice={this.props.applyChoice}
					loadArticles={this.loadArticles}
				/>
				<ListOfArticles 
					chosenSource={this.props.myState.chosenSource}
					loading={this.state.loading}
					articles={this.state.articles}
				/>
			</div>
		)
	}
}

export default Main;