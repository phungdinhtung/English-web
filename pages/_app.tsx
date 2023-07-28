import '@/styles/globals.css'
import { animated, useSpring } from '@react-spring/web'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()
	const [transition, api] = useSpring(() => ({
		from: { opacity: 0, scale: 0 },
		to: { opacity: 1, scale: 1 },
	}))

	useEffect(() => {
		if (router) {
			const handleRouteChange = (url: any, { shallow }: any) => {
				api.start({
					from: { opacity: 0, scale: 0 },
					to: { opacity: 1, scale: 1 },
				})
			}
			router.events.on('routeChangeStart', handleRouteChange)
			return () => {
				router.events.off('routeChangeStart', handleRouteChange)
			}
		}
	}, [])

	return (
		<>
			<Head>
				<title>DTEng - How I learn English Structure</title>
			</Head>
			<animated.div style={transition}>
				<Component {...pageProps} />
			</animated.div>
		</>
	)
}
