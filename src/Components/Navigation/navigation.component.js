import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../Images/logo.svg';
import './navigation.css';
 
const Navigation = () => (
	<div className="App-header"> 
		<ul>
			<li><NavLink exact to="/" activeClassName="selected">Home</NavLink></li>
			<li><NavLink to="/Todo" activeClassName="selected">Todo</NavLink></li>
			<li><NavLink to="/About" activeClassName="selected">About</NavLink></li>
		</ul>
		<img src={logo} className="App-logo" alt="logo" />
		<h2>Welcome to React</h2>
		
		<hr/>
	</div>
)

export default Navigation