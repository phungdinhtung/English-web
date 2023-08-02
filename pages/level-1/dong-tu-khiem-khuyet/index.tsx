import ContainerAnimationAxis from '@/components/Animation/ContainerAnimationAxis'
import Layout from '@/layout/Layout'
import { NextPageWithLayout } from '@/types/next'
import { ReactElement } from 'react'

const Page: NextPageWithLayout = () => {
	return (
		<ContainerAnimationAxis>
			<h1>Page</h1>
			<p>dong-tu-khiem-khuyet</p>
		</ContainerAnimationAxis>
	)
}

Page.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}

export default Page
