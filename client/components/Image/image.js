import { useState, useEffect } from 'react'
import getConfig from 'next/config';

import Resizer from "react-image-file-resizer"
import Result from './result.js'
import styles from '../../styles/image.module.css'

const { publicRuntimeConfig } = getConfig();

const Image = () => {
	// IMAGE
	const [image, setImage] = useState('')
	const [imageURL, setImageURL] = useState('')
	const image1 = '/assets/images/android-chrome-512x512.png'
	const image2 = '/assets/images/tiger.jpg'
	const image3 = '/assets/images/panda.jpg'

	// MODEL
	const [model, setModel] = useState('cnn_v1')

	useEffect(() => {
		handleImageSelection(image1)
	}, [])


	const handleImageSelection = async (src) => {
		setImage(src)
		let file = await convertImageURLtoFile(src)
		setImageURL(file)
		setShowResult(false)
	}
	const convertImageURLtoFile = async (src) => {
		try{
			const res = await fetch(src)
			const blob = await res.blob()
			let file = new File([blob], 'image.jpg', {type: blob.type})
			file = await resizeFile(file)
			return file
		} catch (err){
			console.log(err)
			return null
		}
	}

	// Resize image to 244px x 244 px
	const resizeFile = (file) => 
		new Promise((resolve) => {
			Resizer.imageFileResizer(file, 224, 244, "JPEG", 100, 0, 
				(uri) => {
					resolve(uri);
				}, "file", 224, 224
			);
		});

	// Process user uploaded image
	const handleImageUpload = async (e) => {
		setShowResult(false)
		try{
			const file = e.target.files[0]
			const image = await resizeFile(file)
			setImage(URL.createObjectURL(image))
			setImageURL(file)
		} catch(err){
			console.log(err)
		}
	}

	// PREDICTIONS
	const [data, setData] = useState('')
	const [showResult, setShowResult] = useState(false)
	const [resultMessage, setResultMessage] = useState("Running inference ...")

	const handleSubmit = async () => {
		let file = imageURL
		const formData = new FormData()
		formData.append('image', file)

		setShowResult(true)
		setData('')
		setResultMessage("Running inference ...")
		const url = publicRuntimeConfig.SERVER_URL + "/api/predict?model=" + model
		const res = await fetch(url, {
			method: 'POST',
			body: formData
		})

		if (res.ok){
			const data = await res.json()
			setData(data)
		} else{
			setResultMessage("Inference failed! (Try again)")
		}
	}

	return (
		<div className={styles.imageContainer}>
			<div className={styles.imageDisplay}>
				<div className={styles.imageOption}>
				</div>
				<div className={styles.imageMain}>
					<img src={image} />
				</div>
				<div className={styles.imageOption}>
					<img src={image1} onClick={() => handleImageSelection(image1)} />
					<img src={image2} onClick={() => handleImageSelection(image2)} />
					<img src={image3} onClick={() => handleImageSelection(image3)} />
				</div>
			</div>

			{showResult &&
				<Result data={data} msg={resultMessage}/>
			}

			<div className={styles.imageUploadContainer}>
				<p>Choose an image from above or upload your image:</p>
				<input 
					type="file" id="image-input" name="input-image" accept="image/*"
					onChange={handleImageUpload}
				/>
			</div>

			<div className={styles.modelOptions}>
				<p>Choose your model:</p>
				<div className={styles.modelOptionsItemContainer}>
					<span>cnn v1</span>
				</div>
			</div>

			<div className={styles.submitBtn}>
				<button onClick={handleSubmit}><span>Predict</span></button>
			</div>
		</div>
	)
}

export default Image