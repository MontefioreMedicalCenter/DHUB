import { combineReducers } from 'redux'
import headerReducer from './reducers/headersReducer'
import homeReducer from './reducers/homeReducer'
import loginReducer from './reducers/loginReducer'

const appReducer = combineReducers({
	loginState: loginReducer,
	homeState: homeReducer,
	headerState: headerReducer
})

const rootReducer = (state, action) => {
	return appReducer(state, action)
}

export default rootReducer
