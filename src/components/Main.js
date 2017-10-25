import React, { Component } from 'react';



class Main extends Component {
	render() {
		const currentAppearance = this.props.myState.chosenAppearance;
		const currentSource = this.props.myState.chosenSource;
		return (
			<div className={"Main " + currentAppearance}>
				<span>i'm just checking {currentSource}</span>
			</div>
		)
	}
}

export default Main;