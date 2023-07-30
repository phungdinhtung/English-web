import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { NextRouter } from 'next/router'

import { ReactElement, ReactNode } from 'react'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

export interface WithRouterProps {
	router: NextRouter
}
