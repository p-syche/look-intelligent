import React from 'react'

const DummyYork = (props) => {
	return (
		<div className="dummy-york">
			<div className="left-side">
				<span><i className="fa fa-bars" aria-hidden="true"></i>very</span>
				<span><i className="fa fa-search" aria-hidden="true"></i>smart</span>
			</div>
			<div className="right-side">
				<div className="blue-btn">
					<span>enjoy reading</span>
				</div>
				<div className="blue-btn">
					<span>fun</span>
				</div>
				<span><i className="fa fa-cog" aria-hidden="true"></i></span>
			</div>
			<div className="middle">
				<span>fancy reading material</span>
			</div>
		</div>
	)
}

export default DummyYork;