import { applyMiddleware, createStore } from "redux"
import reducers from "./reducers";


// MIDDLEWARE
const errorMiddleware = (store) => (next) => (action) =>{
	try{
		console.log("action fired: " + action.type);
		next(action);
	} catch(e) {
		console.log("ERROR: " + e);
	}
}
const middleware = applyMiddleware(errorMiddleware);


// STORE
const store = createStore(reducers, middleware);



// Register callback anytime action has been dispatched to update UI of app to reflect curr app state
const render = () => {
	console.log(store.getState());
}
store.subscribe(render);
render();

export default store;