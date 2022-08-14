import { useState, useEffect } from 'react'
import Resizer from "react-image-file-resizer";

import logo from '../assets/images/default_cat.png'
import '../styles/components/input.css'

const Input = () => {
	const [inputImage, setInputImage] = useState('')

	useEffect(()=>{
		setInputImage(logo)
	}, [])

	const resizeFile = (file) => 
		new Promise((resolve) => {
			Resizer.imageFileResizer(file, 244, 244, "JPEG", 100, 0, 
				(uri) => {
					resolve(uri);
				}, "blob", 244, 244
			);
		});

	const imageHandler = async (e) => {
		try{
			const file = e.target.files[0]
			const image = await resizeFile(file)
			setInputImage(URL.createObjectURL(image))
		} catch(err){
			console.log(err)
		}
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