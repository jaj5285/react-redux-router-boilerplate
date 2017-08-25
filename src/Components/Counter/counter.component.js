import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './counter.actions'
//import './counter.css';


// Counter Component
const Counter = (props) => (
	<div>
		<button onClick={props.onIncrement}>
			Increment
		</button>
		<button onClick={props.onDecrement}>
			Decrement
		</button>
		<h2> {props.counter} {props.test}</h2>
	</div>
);


// Counter Connect (connect Redux's state into React's props)
const mapStateToProps = (state, myProps) => {
	return {
		counter: state.counter,
		test: myProps.test
	}
}
const mapDispatchToProps = (dispatch) => bindActionCreators({	
	onIncrement: () => dispatch(incrementCounter),
	onDecrement: () => dispatch(decrementCounter),	
}, dispatch);

const CounterLink = connect (
	mapStateToProps,
	mapDispatchToProps
)(Counter);



export default CounterLink;

