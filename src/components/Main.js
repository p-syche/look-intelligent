import React, { Component } from 'react';
import Header from './Header';
import ListOfArticles from './ListOfArticles';

class Main extends Component {
	render() {
		return (
			<div className={"Main " + this.props.chosen.appearance} >
				<Header 
					myState={this.props.myState}
					applyChoice={this.applyChoice}
				/>
				<ListOfArticles 
					chosen={this.props.chosen}
					loading={this.props.loading}
					articles={this.props.articles}
				/>
			</div>
		)
	}
}

export default Main;