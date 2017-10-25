import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

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

	render() {
		const mySources = this.props.myState.source;
		const myAppearances = this.props.myState.appearance;
		
	    return (
			<div className="header-choice">
				<h2 className="title">
					<Link to="/" onClick={this.cleanLocalStorage}>Look Intelligent</Link>
				</h2>
				<span>Reading </span>
				<select ref={(input) => this.chooseSource = input} className="sources" defaultValue={this.props.myState.chosen.source} onChange={(e) => this.choiceMade(e)}>
					<option value="home" key="home" disabled>Please choose</option>
					{
					Object
						.keys(mySources)
						.map((key) =>
							<option value={mySources[key]} key={key} index={key}>
								{key}
							</option> 
						)
					}
					
				</select>
				<span> looking like </span>
				<select ref={(input) => this.chooseAppearance = input} className="sources" defaultValue={this.props.myState.chosen.appearance} onChange={(e) => this.choiceMade(e)}>
					{
					Object
						.keys(myAppearances)
						.map((key) =>
							<option value={key} key={key} index={key}>
								{myAppearances[key]}
							</option> 
						)
					}
				</select>
			</div>
	    );
  }
}

export default Header;
