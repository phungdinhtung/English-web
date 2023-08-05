import ContainerAnimationAxis from "@/components/Animation/ContainerAnimationAxis"
import { LEVEL1_ROUTE } from "@/constants/route"
import { VariantsShowItems } from "@/constants/variants-motion"
import Layout from "@/layout/Layout"
import { NextPageWithLayout } from "@/types/next"
import { motion } from "framer-motion"
import { MousePointerClick } from "lucide-react"
import Link from "next/link"
import { ReactElement } from "react"

const Page: NextPageWithLayout = () => {
	return (
		<ContainerAnimationAxis className="space-y-10 mt-10">
			<h1 className="select-none">{LEVEL1_ROUTE.title}</h1>
			<motion.div
				variants={VariantsShowItems.container}
				initial="hidden"
				animate="show"
				className="flex flex-wrap gap-10"
			>
				{LEVEL1_ROUTE.links.map((link) => (
					<Link href={link.href} key={link.href}>
						<motion.div
							className="bg-gradient-to-r from-white/10 p-10 rounded-3xl font-medium flex items-center gap-4 relative"
							variants={VariantsShowItems.itemFromRight}
							whileHover={{
								scale: 1.3,
								transition: { duration: 0.2 },
								background: [""],
							}}
							whileTap={{ scale: 0.9 }}
						>
							{link.title}
							<MousePointerClick />
						</motion.div>
					</Link>
				))}
			</motion.div>
		</ContainerAnimationAxis>
	)
}

Page.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}

export default Page
