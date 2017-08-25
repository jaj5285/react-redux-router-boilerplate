import React, { Component } from 'react';
import { BrowserRouter as Router,  Route, Link } from 'react-router-dom';
import './App.css';

// Components
import TodoList from '../../Components/TodoList/todoList.component';
import Navigation from '../../Components/Navigation/navigation.component';

// Pages
import AboutPage from '../../Pages/About/about.component';
import HomePage from '../../Pages/Home/home.component';
import TodoPage from '../../Pages/TodoPage/todoPage.component';


const elem = (
	<div className="App">
	<Router>
	<div>
		<Navigation></Navigation>
		<Route exact path="/" component={HomePage}/>
		<Route path="/Todo" component={TodoPage}/>
		<Route path="/About" component={AboutPage}/>
	</div>
	</Router>
	</div>
);


class App extends Component {
  render() {
  	return elem;
  }
}

export default App;


