import { useState, useEffect } from 'react'
import Resizer from "react-image-file-resizer";
import { getCookie } from '../utilities/getCookie.js'
import logo from '../assets/images/default_cat.png'
import '../styles/components/input.css'

const ROOT_URL = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port

const Input = () => {
	const [inputImage, setInputImage] = useState('')
	const [animalName, setAnimalName] = useState('')

	useEffect(()=>{
		setInputImage(logo)
	}, [])

	// Resize image to 244px x 244 px
	const resizeFile = (file) => 
		new Promise((resolve) => {
			Resizer.imageFileResizer(file, 244, 244, "JPEG", 100, 0, 
				(uri) => {
					resolve(uri);
				}, "blob", 244, 244
			);
		});

	// Process user uploaded image
	const imageHandler = async (e) => {
		try{
			const file = e.target.files[0]
			const image = await resizeFile(file)
			setInputImage(URL.createObjectURL(image))
			console.log(URL.createObjectURL(image))
			setAnimalName('')
		} catch(err){
			console.log(err)
		}
	}

	// Send the image to server to be analyzed
	const analyzeImage = async () => {
		const formData = new FormData()
		formData.append('image', inputImage);
		const res = await fetch(ROOT_URL + '/api/analyze', {
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				"X-CSRFToken": getCookie("csrftoken")
			},
			body: formData
		})

		const data = await res.json()

		if (res.ok){
			console.log(data)
			const animal_name = data.animal_name
			setAnimalName(animal_name)
		}
		else{
			console.log(data)
			console.log("request failed")
		}
	}

	return (
		<div className="input-container">
			<div className="image-container">
				<img src={inputImage} alt="user input" />
			</div>
			<div className="image-detail">
				<div className="image-name">
					{animalName !== ''?
						<p>This is a {animalName}</p> : ''
					}
				</div>
				<label for="input-image">Add an image of an animal:</label>
				<input type="file" id="image-input" name="input-image" accept="image/*" 
					onChange={imageHandler}
				/>
				<button className="analyze-btn" type="submit" onClick={analyzeImage} >
					Analyze
				</button>
			</div>
		</div>
	)
}

export default Input