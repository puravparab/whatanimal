import { Routes, Route, Navigate } from 'react-router-dom'

import Base from './pages/Base.js'
import './styles/app.css';

function App() {
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
