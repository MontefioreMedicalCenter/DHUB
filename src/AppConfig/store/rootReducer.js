import { combineReducers } from 'redux'
import homeReducer from './reducers/homeReducer'
import loginReducer from './reducers/loginReducer'

const appReducer = combineReducers({
	loginState: loginReducer,
	homeState: homeReducer
})

const rootReducer = (state, action) => {
	return appReducer(state, action)
}

export default rootReducer
