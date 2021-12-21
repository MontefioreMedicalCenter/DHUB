import { styled } from '@material-ui/core'

export const Red = styled('span')(({ theme }) => ({
	padding: '2px',
	borderRadius: '50%',
	width: 10,
	height: 10,
	alignItems: 'center',
	backgroundImage: 'linear-gradient(to bottom, #ff4300, #e0693f, #ff7d7d, #ffffff)',
	border: '1px solid black'
}))

export const Green = styled('span')(({ theme }) => ({
	padding: '2px',
	borderRadius: '50%',
	width: 10,
	height: 10,
	alignItems: 'center',
	backgroundImage: 'linear-gradient(to bottom, #05c702, #7cff7a, #ffffff)',
	border: '1px solid black'
}))
