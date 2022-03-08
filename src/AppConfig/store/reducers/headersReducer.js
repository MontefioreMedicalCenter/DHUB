import { SET_CLAIMS_HEADER, SET_REMITS_HEADER } from '../actions/headersAction'

const initialState = {
	claimsHeaderState: [],
    remitsHeaderState: []
}

const headerReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CLAIMS_HEADER:
			return {
				...state,
				claimsHeaderState: action.payload
			}
            case SET_REMITS_HEADER:
                return {
                    ...state,
                    remitsHeaderState: action.payload
                }
		default:
			return state
	}
}

export default headerReducer
