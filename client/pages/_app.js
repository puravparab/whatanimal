import Head from 'next/head'
import Script from 'next/script';
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
				<link rel="manifest" href="/manifest.json" />
			</Head>

			{/* Google Analytics */}
			<Script 
				strategy="afterInteractive"
				src="https://www.googletagmanager.com/gtag/js?id=G-NZ9R11FPPL" 
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag("js", new Date());
					gtag("config", 'G-NZ9R11FPPL');
				`}
			</Script>

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp