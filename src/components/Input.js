import { useState, useEffect } from 'react'
import Resizer from "react-image-file-resizer";

import logo from '../assets/images/android-chrome-512x512.png'
import '../styles/components/input.css'

const Input = () => {
	const [inputImage, setInputImage] = useState('')

	useEffect(()=>{
		setInputImage(logo)
	}, [])

	const imageHandler = (e) => {
		setInputImage(URL.createObjectURL(e.target.files[0]))
	}

	return (
		<div className="input-container">
			<div className="image-container">
				<img src={inputImage} alt="user input" />
			</div>
			<div className="image-detail">
				<label for="input-image">Add an image of an animal:</label>
				<input type="file" id="image-input" name="input-image" accept="image/*" 
					onChange={imageHandler}
				/>
			</div>
		</div>
	)
}

export default Input