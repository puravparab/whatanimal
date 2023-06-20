import styles from '../styles/about.module.css'

const About = () => {
	return (
		<div className={styles.aboutContainer}>
			<h2>About:</h2>
			<p>Whatanimal is a side-project I built to deploy an ML image classification application through a website.</p>
			<p>
				v1 model is a convolutional neural network I trained using a custom built <a href="https://www.kaggle.com/datasets/npurav/animal-classification-dataset" target="_blank">dataset</a> of various animal classes (20,000 animal images in total).
			</p>
			<p>
				You can find the model <a href="https://github.com/puravparab/animal_classifier" target="_blank">here</a> or checkout the <a href="https://github.com/puravparab/whatanimal" target="_blank">github</a> for this website.
			</p>
		</div>
	)
}

export default About