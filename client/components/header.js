import Link from 'next/link'

import styles from '../styles/header.module.css'

const Header = () => {
	return (
		<div className={styles.headerContainer}>
			<img src="/assets/images/android-chrome-192x192.png"/>
			<Link href="/">
				<h1>Whatanimal</h1>
			</Link>
		</div>
	)
}

export default Header