import { useNavigate } from 'react-router-dom'

import logo from '../assets/images/android-chrome-512x512.png'
import '../styles/components/header.css'

const Header = () => {
	let navigate = useNavigate()

	return (
		<div className="header">
			<div className="header-left">
				<img src={logo} alt="cat logo" onChange={()=>{
					navigate('/')
				}} />
				<h1 className="title">
					WhatAnimal?
				</h1>
			</div>
		</div>
	)
}

export default Header