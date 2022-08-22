import { useState, useEffect } from 'react'
import Resizer from "react-image-file-resizer";
import { getCookie } from '../utilities/getCookie.js'
import classes from '../class_names.json';
import logo from '../assets/images/default_cat.jpg'
import '../styles/components/input.css'

const ROOT_URL = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port

const Input = () => {
	const [inputImage, setInputImage] = useState('')
	const [inputImageURL, setInputImageURL] = useState('')
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
			setInputImageURL(image)
			setInputImage(URL.createObjectURL(image))
			setAnimalName('')
		} catch(err){
			console.log(err)
		}
	}

	// Process prediction
	const processPrediction = async (data) => {
		const scoring = data.details.scoring
		const prediction_index = data.details.prediction_index
		const name = classes.class_names[prediction_index]
		const common_name = Object.values(name)[0]
		const sci_name = Object.keys(name)[0]

		setAnimalName(
			common_name + " (" + sci_name + ") with " + scoring[prediction_index] + "% confidence."
		)

		let score_list = []
		for (let i = 0; i < scoring.length; i++){
			if (scoring[i] > 1){
				let key = Object.keys(classes.class_names[i])[0]
				score_list.push({
					[key] : scoring[i]
				})
			}
		}
	}

	// Send the image to server to be analyzed
	const analyzeImage = async () => {
		const formData = new FormData()
		formData.append('image', inputImageURL)
		const res = await fetch(ROOT_URL + '/api/analyze', {
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				"X-CSRFToken": getCookie("csrftoken")
			},
			body: formData
		})

		const data = await res.json()
		console.log(data)
		if (res.ok){
			processPrediction(data)
		}
		else{
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
						<>
							<p>Prediction:</p>
							<p>{animalName}</p>
						</>
						: ''
					}
				</div>
				<div className="image-input-container">
					<label for="input-image">Add an image of an animal:</label>
					<input type="file" id="image-input" name="input-image" accept="image/*" 
						onChange={imageHandler}
					/>
				</div>
				
				<button className="analyze-btn" type="submit" onClick={analyzeImage} >
					Analyze
				</button>
			</div>
		</div>
	)
}

export default Input