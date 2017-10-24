import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
	homeChoice(event, item) {
		event.preventDefault();

		const theChoice = {
			source: item,
			appearance: this.chooseAppearance.value
		}

		this.props.applyChoice(theChoice);
	}

	render() {
		const mySources = this.props.myState.source;
		const myAppearances = this.props.myState.appearance;

		return (
			<div className="home-page">
				<h2 className="title">Look Intelligent</h2>
				<span>Reading </span>
				<ul className="sources" >
					{
					Object
						.keys(mySources)
						.map((key) =>
							<li value={mySources[key]} key={key} index={key} onClick={(e) => this.homeChoice(e,mySources[key])}>
								<Link to="/really-smart">{key}</Link>
							</li> 
						)
					}
					
				</ul>
				<span> looking like </span>
				<select className="sources" ref={(input) => this.chooseAppearance = input}>
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
		)
	}
}

export default Home;