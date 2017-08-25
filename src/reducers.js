import { combineReducers } from "redux"

import counterReducer from "./Components/Counter/counter.reducer";
import todoReducer from "./Components/TodoList/todoList.reducer";
//import arrayReducer from "../App/TodoList/todoList.reducer";


// COMBINE MULIPLE REDUCERS
export default combineReducers({
	counter: counterReducer,
	todo: todoReducer,
	//array: arrayReducer,
});
