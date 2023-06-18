import styles from '../styles/header.module.css'
const Header = () => {
	return (
		<div className={styles.headerContainer}>
			<img src="/assets/images/android-chrome-192x192.png"/>
			<h1>Whatanimal</h1>
		</div>
	)
}

export default Header