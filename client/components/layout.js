import { useState, useEffect } from 'react'

import Header from './header.js'
import Footer from './footer.js'
import { AnalyticsWrapper } from './analytics.js';
import styles from '../styles/layout.module.css'

const Layout = ({ children }) => {
	return (
		<>			
			<div className={styles.pageContainer}>
				<Header />
				<div className={styles.pageBodyLayout}>
					{ children }
				</div>
				<Footer />
			</div>

			<AnalyticsWrapper />
		</>
	)
}

export default Layout