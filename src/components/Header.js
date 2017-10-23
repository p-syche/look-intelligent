import React, { Component } from 'react';
import '../scss/Header.css';

class Header extends Component {

	choiceMade(event) {
		event.preventDefault();

		const theChoice = {
			chosenSource: this.chooseSource.value,
			chosenAppearance: this.chooseAppearance.value
		}

		this.props.applyChoice(theChoice);
	}

	render() {
		const mySources = this.props.myState.source;
		const myAppearances = this.props.myState.appearance;

	    return (
			<header>
				<div className="heder-choice">
					<span>Reading </span>
					<select ref={(input) => this.chooseSource = input} className="sources" defaultValue={this.props.myState.chosen.chosenSource} onChange={(e) => this.choiceMade(e)}>
						<option disabled value="home" key="initial" index="default">Please choose</option> 
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
					<select ref={(input) => this.chooseAppearance = input} className="sources" defaultValue={this.props.myState.chosen.chosenAppearance} onChange={(e) => this.choiceMade(e)}>
						<option disabled value="initial" key="initial" index="default">Please choose</option> 
						{
						Object
							.keys(myAppearances)
							.map((key) =>
								<option value={myAppearances[key]} key={key} index={key}>
									{myAppearances[key]}
								</option> 
							)
						}
						
					</select>
				</div>
			    

			</header>
	    );
  }
}

export default Header;
