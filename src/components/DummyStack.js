import React from 'react'


const DummyStack = (props) => {
	return (
		<div className="dummy-stack">
			<div className="dummy-menu">
				<span>All Headlines</span>
				<ul>
					<li>just</li>
					<li>trying</li>
					<li>to look</li>
					<li>very</li>
					<li>smart</li>
					<li className="border">indeed</li>
				</ul>
			</div>
			<div className="dummy-sidebar">
				<div className="number-button">
					<div className="number">
						<div>14,787,993</div>
						<p>questions</p>
					</div>
					<div className="blue-button">
						<span>Don't ask</span>
					</div>
				</div>

				<div className="pale-table">
					<div className="firstpart">
						<p>Featured when looking smart</p>
						<div className="posts">
							<span className="number">24</span>
							<span className="text">How to look very smart at work while looking at some very funny headlines</span>
						</div>
						<div>
							<span className="number">1</span>
							<span className="text">Should we look at some more fun stuff?</span>
						</div>
					</div>
					<div className="secondpart">
						<p>Hot stuff</p>
						<div className="posts">
							<span className="number">324</span>
							<span className="text">Someone really hot is looking at this website right now</span>
						</div>
						<div className="posts">
							<span className="number">17</span>
							<span className="text">What to do about not so fun work interrupting your fun reading experience?</span>
						</div>
					</div>
					</div>	
			</div>
		</div>
	)
}

export default DummyStack;