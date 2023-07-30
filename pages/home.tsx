import Layout from '@/layout/Layout'
import { NextPageWithLayout } from '@/types/next'
import { ReactElement } from 'react'

const Home: NextPageWithLayout = () => {
	return (
		<div>
			<h1>HOME</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, officia! Exercitationem porro omnis nesciunt
				accusamus nemo? Aliquid eaque magni, repudiandae, aspernatur hic nihil ut, dolor in numquam culpa excepturi at.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, officia! Exercitationem porro omnis nesciunt
				accusamus nemo? Aliquid eaque magni, repudiandae, aspernatur hic nihil ut, dolor in numquam culpa excepturi at.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, officia! Exercitationem porro omnis nesciunt
				accusamus nemo? Aliquid eaque magni, repudiandae, aspernatur hic nihil ut, dolor in numquam culpa excepturi at.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, officia! Exercitationem porro omnis nesciunt
				accusamus nemo? Aliquid eaque magni, repudiandae, aspernatur hic nihil ut, dolor in numquam culpa excepturi at.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, officia! Exercitationem porro omnis nesciunt
				accusamus nemo? Aliquid eaque magni, repudiandae, aspernatur hic nihil ut, dolor in numquam culpa excepturi at.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, officia! Exercitationem porro omnis nesciunt
				accusamus nemo? Aliquid eaque magni, repudiandae, aspernatur hic nihil ut, dolor in numquam culpa excepturi at.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, officia! Exercitationem porro omnis nesciunt
				accusamus nemo? Aliquid eaque magni, repudiandae, aspernatur hic nihil ut, dolor in numquam culpa excepturi at.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, officia! Exercitationem porro omnis nesciunt
				accusamus nemo? Aliquid eaque magni, repudiandae, aspernatur hic nihil ut, dolor in numquam culpa excepturi at.
			</p>
		</div>
	)
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}

export default Home
