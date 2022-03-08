export const SET_CLAIMS_HEADER = 'SET_CLAIMS_HEADER'
export const SET_REMITS_HEADER = 'SET_REMITS_HEADER'

export const setClaimsHeader = data => dispatch => {
	dispatch({
		type: SET_CLAIMS_HEADER,
		payload: data
	})
}

export const setRemitsHeader = data => dispatch => {
	dispatch({
		type: SET_REMITS_HEADER,
		payload: data
	})
}
