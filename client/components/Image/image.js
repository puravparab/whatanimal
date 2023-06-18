import { useState, useEffect } from 'react'

import Resizer from "react-image-file-resizer";
import styles from '../../styles/image.module.css'

const Image = () => {
	const [image, setImage] = useState('')
	const image1 = '/assets/images/android-chrome-512x512.png'
	const image2 = '/assets/images/tiger.jpg'
	const image3 = '/assets/images/panda.jpg'

	useEffect(() => {
		setImage(image1)
	}, [])

	const handleImageSelection = (src) => {
		setImage(src)
	}

	// Resize image to 244px x 244 px
	const resizeFile = (file) => 
		new Promise((resolve) => {
			Resizer.imageFileResizer(file, 244, 244, "JPEG", 100, 0, 
				(uri) => {
					resolve(uri);
				}, "file", 244, 244
			);
		});

	// Process user uploaded image
	const handleImageUpload = async (e) => {
		try{
			const file = e.target.files[0]
			const image = await resizeFile(file)
			setImage(URL.createObjectURL(image))
		} catch(err){
			console.log(err)
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

			<div className={styles.imageUploadContainer}>
				<p>Choose an image from above or upload your image:</p>
				<input 
					type="file" id="image-input" name="input-image" accept="image/*"
					onChange={handleImageUpload}
				/>
			</div>
		</div>
	)
}

export default Image