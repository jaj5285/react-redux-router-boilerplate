import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import store from "../../store";
import './Todo.css';


// <TodoItem>
const TodoItem = ({ isToggled, value, onClick }) => (
	<li onClick={onClick} style={{ textDecoration: isToggled ? 'none' : 'line-through' }} >
		{value} 
	</li>		
);


// <TodoList>
class TodoList extends React.Component {
	constructor(props){
		super(props);
		//this.addTodo = this.addTodo.bind(this);
		//this.toggleTodo = this.toggleTodo.bind(this);
	}

	addTodo(){		
		store.dispatch({
			type: 'ADD_TODO',
			value: this.myInput.value,
		});
		this.myInput.value = '';
	}

	toggleTodo(todoId){
		store.dispatch({type: 'TOGGLE_TODO', id: todoId});
	}

	render () {
		return (
			<div className="TodoList">
				<input ref={node => {	
					this.myInput = node
				}}/>
				<button onClick={() => this.addTodo()}>
					Add Todo
				</button>
				<ul>
					{this.props.todoArray.map(todo => (
						<TodoItem key={todo.id} value={todo.value} isToggled={todo.isToggled} onClick={() => this.toggleTodo(todo.id)} />			
					))}
				</ul>
			</div>
		)
	}
}


// TodoList Redux Connect (connect Redux's state into React's props)
const todoList_mapStateToProps = (state, myProps) => {
	return {
		todoArray: state.todo,
		value: myProps.value
	}
}
const todoList_mapDispatchToLinkProps = (dispatch) => bindActionCreators({	
	//onAdd: (val) => dispatch({type: 'ADD_TODO', value: val }),
	//onToggle: (todoId) => dispatch({type: 'TOGGLE_TODO', id: todoId}),	
}, dispatch);


const TodoLink = connect (
	todoList_mapStateToProps,
	todoList_mapDispatchToLinkProps
)(TodoList);



export default TodoLink;