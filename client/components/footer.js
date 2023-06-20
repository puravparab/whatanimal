import Link from 'next/link'
import styles from '../styles/footer.module.css'

const footer = () => {
	return (
		<div className={styles.footerContainer}>
			<a href="https://github.com/puravparab/whatanimal" target="_blank">
				<img width="35" height="35" src="/assets/images/github.svg" alt="github"/>
			</a>
			<p>built by <a href="https://www.purav.co/" target="_blank">purav</a> /</p>
			<Link href='/about'>
				about
			</Link>
		</div>
	)
}

export default footer