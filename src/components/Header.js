import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CustomSelect from './CustomSelect';

class Header extends Component {
	constructor() {
		super();

		this.homeChoice = this.homeChoice.bind(this);
	}

	cleanLocalStorage() {
		localStorage.clear();
		this.setState({
			chosenSource: 'something fun',
			chosenAppearance: 'something smart'
		});
	}

	homeChoice(item) {
		this.props.applyChoice(item);

		if(item.type === 'chosenSource') {
			this.props.loadArticles(item.url);
		}

	}

	render() {
		const mySources = this.props.myState.source;
		const myAppearances = this.props.myState.appearance;
		
	    return (
			<div className="header-choice">
				<span className="logo"></span>
				<h2 className="title">
					<Link to="/" onClick={this.cleanLocalStorage}>Look Intelligent</Link>
				</h2>
				<div className="choosing">
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
				
			</div>
	    );
  }
}

export default Header;
