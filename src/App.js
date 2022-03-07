import React from 'react'
import AppRouter from './AppConfig/AppRouter'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import LoaderBar from './shared/components/LoaderBar'
function App() {
	return (
		<div className="App">
			<AppRouter />
			<ToastContainer />
			<LoaderBar />
		</div>
	)
}

export default App
