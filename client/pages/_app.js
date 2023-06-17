import Head from 'next/head'
import Layout from '../components/layout.js'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="author" content="Purav Parab" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:image" content="" />
				<meta name="twitter:creator" content="" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="" />
			</Head>

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp