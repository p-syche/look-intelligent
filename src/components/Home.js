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
		this.props.applyHomeChoice(item);
		this.setState({
			error: false
		});
	}

	linkClicked(e) {
		if(this.props.myState.chosenSource === 'home' ||
			this.props.myState.chosenAppearance === 'initial') {
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
					tagline="something fun"
					mySources={mySources}
					homeChoice={this.homeChoice}
				/>
				
				<span> that looks like </span>

				<CustomSelect 
					key="appearance"
					homeListKey="chosenAppearance"
					tagline="something smart"
					mySources={myAppearances}
					homeChoice={this.homeChoice}
				/>
				<Link to="/really-smart" onClick={(e) => this.linkClicked(e)}>Get smart</Link>

				<div className="error-handler">
					<span className={this.state.error ? 'error-visible' : 'error-hidden' }>Please choose a source and appearance</span>
				</div>
			</div>
		)
	}
}

export default Home;