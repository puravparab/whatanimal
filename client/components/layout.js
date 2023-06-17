import { useState, useEffect } from 'react'
import styles from '../styles/layout.module.css'

const Layout = ({ children }) => {
	return (
		<>
			<div className={styles.pageContainer}>
				<div className={styles.pageBodyLayout}>
					{ children }
				</div>
			</div>
		</>
	)
}

export default Layout