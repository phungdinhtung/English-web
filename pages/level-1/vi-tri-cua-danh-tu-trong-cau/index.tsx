import ContainerAnimationAxis from '@/components/Animation/ContainerAnimationAxis'
import Layout from '@/layout/Layout'
import { NextPageWithLayout } from '@/types/next'
import { ReactElement } from 'react'

const Page: NextPageWithLayout = () => {
	return (
		<ContainerAnimationAxis>
			<h1>Page</h1>
			<p>Vị Trí Của Danh tu Trong Câu</p>
		</ContainerAnimationAxis>
	)
}

Page.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}

export default Page
