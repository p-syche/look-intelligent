import React from 'react'

import DummyStack from './DummyStack'
import DummyPretty from './DummyPretty'

const DummyContent = (props) => {
	// const isLoggedIn = props.isLoggedIn;

	  if (props.chosenAppearance === 'Stack Overflow') {
	    return <DummyStack />;
	  }
	  return <DummyPretty />;
}

export default DummyContent;