import logo from '../assets/images/android-chrome-512x512.png'

import '../styles/components/header.css'

const Header = () => {
	return (
		<div className="header">
			<div className="header-left">
				<img src={logo} alt="cat logo" />
				<h1 className="title">
					WhatAnimal?
				</h1>
			</div>
		</div>
	)
}

export default Header