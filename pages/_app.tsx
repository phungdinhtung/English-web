import '@/styles/globals.css'
import { AppPropsWithLayout } from '@/types/next'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page)

	return (
		<>
			<Head>
				<title>DTEng - How I learn English Structure</title>
			</Head>
			<AnimatePresence mode="wait">{getLayout(<Component {...pageProps} />)}</AnimatePresence>
		</>
	)
}
