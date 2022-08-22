import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Base from './pages/Base.js'
import './styles/app.css';

const ROOT_URL = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port

function App() {
	useEffect(()=>{
		get_csrf_token()
	}, [])

	const get_csrf_token = async () => {
		const res = await fetch(ROOT_URL + '/csrf/',{})
		const data = await res.json()
	}

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Base />} />
				<Route path="*" element={<Navigate replace to='/' />} />
			</Routes>
		</div>
	);
}

export default App;
