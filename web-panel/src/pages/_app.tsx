import "@assets/css/app.scss"

import type { AppProps } from "next/app"
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					type="text/css"
					href="https://fonts.googleapis.com/css?family=Droid+Serif:400,400i,700,700i"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	)
}
export default MyApp
