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
				<meta name="google-site-verification" content="-bbeXHZvZm4OaCASz8xD2sFDEQNKh-l0uE7M7mLR-v8" />
			</Head>

			{/* Google Analytics */}
			<Script 
				strategy="afterInteractive"
				src="https://www.googletagmanager.com/gtag/js?id=G-J0ZGVS8CQK" 
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag("js", new Date());
					gtag("config", 'G-J0ZGVS8CQK');
				`}
			</Script>

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp