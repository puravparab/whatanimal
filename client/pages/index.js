import Head from 'next/head'

import Image from '../components/Image/image.js'
import styles from '../styles/home.module.css'

const Home = () => {
	return (
		<>
			<Head>
				<title>Whatanimal</title>
				<meta 
					name="description" 
					content="Image recognition app for animals"
				/>
				{/* <link rel="canonical" href="/" /> */}
				<meta property="og:title" content="Whatanimal" />
				<meta property="og:url" content="https://Whatanimal.purav.co" />
				<meta 
					property="og:description" 
					content="Image recognition app for animals"
				/>
				<meta name="twitter:site" content="https://Whatanimal.purav.co" />
				<meta name="twitter:description" content="Image recognition app for animals" />
			</Head>

			<div className={styles.homeContainer}>
				<Image />
			</div>
		</>
	)
}

export default Home