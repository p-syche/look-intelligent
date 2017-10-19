import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../css/Menu.css';

class Menu extends Component {
  render() {
    return (
		<header>
			<nav>
		    	<ul>
		    		<li><Link to='/'>Home</Link></li>
		    		<li><Link to='/content'>Content</Link></li>
		    	</ul>
		    </nav>
		</header>
    );
  }
}

export default Menu;
