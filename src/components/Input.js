import { useState, useEffect } from 'react'

import logo from '../assets/images/android-chrome-512x512.png'
import '../styles/components/input.css'

const Input = () => {
	const [inputImage, setInputImage] = useState('')

	useEffect(()=>{
		setInputImage(logo)
	}, [])

	return (
		<div className="input-container">
			<div className="image-container">
				<img src={inputImage} />
			</div>
			<div className="image-detail">
				<label for="input-image">Add an image of an animal:</label>
				<input type="file" id="avatar" name="input-image" accept="image/*" />
			</div>
		</div>
	)
}

export default Input