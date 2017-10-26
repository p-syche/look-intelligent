import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CustomSelect from './CustomSelect';

class Home extends Component {
	constructor() {
		super();

		this.state = {
			error: false
		}

		this.homeChoice = this.homeChoice.bind(this);
	}

	homeChoice(item) {
		this.props.applyChoice(item);
		this.setState({
			error: false
		});
	}

	linkClicked(e) {
		if(this.props.myState.chosenSource === 'something fun' ||
			this.props.myState.chosenAppearance === 'something smart') {
			e.preventDefault();
			this.setState({
				error: true
			});
		}
	}

	render() {
		const mySources = this.props.myState.source;
		const myAppearances = this.props.myState.appearance;

		return (
			<div className="home-page">
				<h2 className="title">Look Intelligent</h2>
				<span>I want to read </span>

				<CustomSelect 
					key="source"
					homeListKey="chosenSource"
					tagline={this.props.myState.chosenSource}
					mySources={mySources}
					homeChoice={this.homeChoice}
				/>
				
				<span> that looks like </span>

				<CustomSelect 
					key="appearance"
					homeListKey="chosenAppearance"
					tagline={this.props.myState.chosenAppearance}
					mySources={myAppearances}
					homeChoice={this.homeChoice}
				/>
				<div className="get-smart-link">
					<Link to="/look-intelligent/really-smart" onClick={(e) => this.linkClicked(e)}>Get smart</Link>
				</div>
				

				<div className="error-handler">
					<span className={this.state.error ? 'error-visible' : 'error-hidden' }>Please choose a source and appearance</span>
				</div>
					
			</div>
		)
	}
}

export default Home;