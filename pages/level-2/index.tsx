import ContainerAnimationAxis from "@/components/Animation/ContainerAnimationAxis"
import Layout from "@/layout/Layout"
import { NextPageWithLayout } from "@/types/next"
import { ReactElement } from "react"

const Page: NextPageWithLayout = () => {
	return (
		<ContainerAnimationAxis>
			<h1>Level2</h1>
		</ContainerAnimationAxis>
	)
}

Page.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}

export default Page
