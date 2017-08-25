/// TODO: Add thunk so this can work better maybe?
/// (https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f)

export const incrementCounter = {
	type: 'INCREMENT'	
}

//export const incrementAsync = () => {
//	return dispatch => {
//		dispatch({
//			type: INCREMENT_REQUESTED
//		})

//		return setTimeout(() => {
//			dispatch({
//				type: INCREMENT
//			})
//		}, 3000)
//	}
//}


export const decrementCounter = {
	type: 'DECREMENT'
}
