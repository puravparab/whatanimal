import { Routes, Route } from 'react-router-dom'

import Base from './pages/Base.js'
import './styles/app.css';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Base />} />
			</Routes>
		</div>
	);
}

export default App;
