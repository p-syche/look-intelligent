import React from 'react'

import DummyStack from './DummyStack'
import DummyPretty from './DummyPretty'
import DummyYork from './DummyYork'

const DummyContent = (props) => {
	// const isLoggedIn = props.isLoggedIn;

	  if (props.chosenAppearance === 'Stack Overflow') {
	    return <DummyStack />;
	  } else if(props.chosenAppearance === 'The New York Times') {
	  	return <DummyYork />
	  }
	  return <DummyPretty />;
}

export default DummyContent;