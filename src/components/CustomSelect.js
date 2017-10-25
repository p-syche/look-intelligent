import React, { Component } from 'react';

class CustomSelect extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeClass: '',
			tagline: this.props.tagline
		}
	}

	clickedPlaceholder() {
		if(this.state.activeClass === 'cs-active') {
			this.setState({
				activeClass: ''
			});
		} else {
			this.setState({
				activeClass: 'cs-active'
			});
		}
		
	}

	handleClick(e, item) {
		this.setState({
			tagline: item
		});

		const choiceMade = {
			item: item,
			type: this.props.homeListKey
		}

		this.props.homeChoice(choiceMade);
		this.clickedPlaceholder();

	}

	render() {
		const mySources = this.props.mySources;

		return (
			<div className={"cs-select cs-skin-underline " + this.state.activeClass}>
				<span className="cs-placeholder" onClick={(e) => this.clickedPlaceholder(e)}>{this.state.tagline}<i className="fa fa-times"></i></span>
				<div className="cs-options">
					<ul className="sources" >
						{
						Object
							.keys(mySources)
							.map((key) =>
								<li value={mySources[key]} key={key} index={key} onClick={(e) => this.handleClick(e, mySources[key])}>
									<span>
										{mySources[key]}
									</span>
								</li> 
							)
						}
						
					</ul>
				</div>
			</div>
		)
	}
}

export default CustomSelect;