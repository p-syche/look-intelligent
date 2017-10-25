import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CustomSelect from './CustomSelect';

class Header extends Component {
	constructor() {
		super();

		this.homeChoice = this.homeChoice.bind(this);
	}

	choiceMade(event) {
		event.preventDefault();

		const theChoice = {
			source: this.chooseSource.value,
			appearance: this.chooseAppearance.value
		}

		this.props.applyChoice(theChoice);
	}

	cleanLocalStorage() {
		localStorage.clear();
		this.setState({
			chosen: {
				source: 'home',
				appearance: 'initial'
			}
		});
	}

	homeChoice(item) {
		this.props.applyChoice(item);

		if(item.type === 'chosenSource') {
			this.props.loadArticles(item.item);
		}
	}

	render() {
		const mySources = this.props.myState.source;
		const myAppearances = this.props.myState.appearance;
		
	    return (
			<div className="header-choice">
				<h2 className="title">
					<Link to="/" onClick={this.cleanLocalStorage}>Look Intelligent</Link>
				</h2>
				<span>Reading </span>
				<CustomSelect
					key="source"
					homeListKey="chosenSource"
					tagline={this.props.myState.chosenSource}
					mySources={mySources}
					homeChoice={this.homeChoice}
				/>
				<span> looking like </span>
				<CustomSelect 
					key="appearance"
					homeListKey="chosenAppearance"
					tagline={this.props.myState.chosenAppearance}
					mySources={myAppearances}
					homeChoice={this.homeChoice}
				/>
			</div>
	    );
  }
}

export default Header;
