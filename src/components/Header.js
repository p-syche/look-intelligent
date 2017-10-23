import React, { Component } from 'react';
import '../scss/Header.css';

class Header extends Component {
	constructor() {
		super();

		this.state = {
			formHidden: 'hide-form'
		}
	}

	choiceMade(event) {
		event.preventDefault();

		const theChoice = {
			chosenSource: this.chooseSource.value,
			chosenAppearance: this.chooseAppearance.value
		}

		this.setState({
			formHidden: 'hide-form'
		})

		this.props.applyChoice(theChoice);
	}

	showForm(e) {
		this.setState({
	      formHidden: ''
	    });
	}

	render() {
		const mySources = this.props.myState.source;
		const myAppearances = this.props.myState.appearance;

	    return (
			<header>
				<div className="display-choice">
					<span>Reading {this.props.myState.chosen.chosenSource} looking like {this.props.myState.chosen.chosenAppearance}</span>
					<button className="showForm" onClick={(e) => this.showForm(e)}>Change this</button>
				</div>
				<div className={"header-form " + this.state.formHidden}>
					<form ref={(input) => this.makeChoice = input} className="choices" onSubmit={(e) => this.choiceMade(e)}>

						<select ref={(input) => this.chooseSource = input} className="sources" defaultValue={this.props.myState.chosen.chosenSource}>
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
						<select ref={(input) => this.chooseAppearance = input} className="sources" defaultValue={this.props.myState.chosen.chosenAppearance}>
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
						<button className="decided" type="submit">I decided!</button>
				    </form>
				</div>
			    

			</header>
	    );
  }
}

export default Header;
