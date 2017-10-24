import React, { Component } from 'react';
import Header from './Header';

class Home extends Component {
	render() {
		return (
			<div className="home-page">
				<Header 
					myState={this.props.myState}
					applyChoice={this.props.applyChoice}
				/>
				<h4>Welcome! Choose something :)</h4>
			</div>
		)
	}
}

export default Home;