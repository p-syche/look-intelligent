import React, { Component } from 'react';
import '../css/Header.css';

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
			    <form ref={(input) => this.makeChoice = input} className="choices" onSubmit={(e) => this.choiceMade(e)}>
					<select ref={(input) => this.chooseSource = input} className="sources" defaultValue={this.props.myState.chosen.chosenSource}>
						<option value="buzzfeed" key="initial" index="default">Please choose</option> 
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
					<select ref={(input) => this.chooseAppearance = input} className="sources" defaultValue={this.props.myState.chosen.chosenAppearance}>
						<option value="initial" key="initial" index="default">Please choose</option> 
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
					<button className="decided" type="submit">I decided!</button>
			    </form>

			</header>
	    );
  }
}

export default Header;
