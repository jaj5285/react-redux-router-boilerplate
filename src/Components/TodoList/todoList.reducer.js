
var nextTodoId = 0;

// (manages individual todos)
const todoIndividualReducer = (state, action) => {
	switch (action.type){
		case 'ADD_TODO':
			state = {
				id: nextTodoId++,
				value:  action.value,
				isToggled: true
			}
			break;
		case 'TOGGLE_TODO':
			if(state.id !== action.id){
				return state;
			}
			state = {
				...state,
				isToggled: !state.isToggled
	};
	break;
		default:
			break;
	}
	return state;
}

// REDUCER (manages the list of todos)
export default function todoReducer (state=[], action) {
	switch (action.type){
		case 'CHANGE_USER_NAME':
			state = {
				...state, 
				name: action.payload
			};
			break;
		case 'ADD_TODO':
			state = [
				...state, // old items
				todoIndividualReducer(undefined, action) // append new item
			];
			break;
		case 'TOGGLE_TODO':
			state = state.map(t => 
				todoIndividualReducer(t,action)
			);
			break;
		default:
			break;
	}
	return state;
}
