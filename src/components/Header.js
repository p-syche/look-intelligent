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
		const stackLogo = <div className="stack-logo"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="530" viewBox="0 0 40 530"><g fill="none" fillRule="evenodd"><path fill="#BCBBBB" fillRule="nonzero" d="M21 527v-8h3v11H0v-11h3v8"/><path fill="#F48024" fillRule="nonzero" d="M5.402 519.1l13.56 1.96.165-2.38-13.256-2.546-.468 2.967zm1.798-6.8l12 5.6 1.1-2.4-12-5.6-1.1 2.4zm3.4-5.9l10.2 8.5 1.7-2-10.2-8.5-1.7 2zm6.5-6.2l-2.1 1.6 7.9 10.6 2.1-1.6-7.9-10.6zM5 525h14v-3H5v3z"/></g></svg></div>;
		
	    return (
			<div className="header-choice">
			{stackLogo}
				<span className="logo"></span>
				<h2 className="title">
					<Link to="/look-intelligent" onClick={this.cleanLocalStorage}>Look Intelligent</Link>
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
