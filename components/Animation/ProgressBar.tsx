import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion"
import { useState } from "react"

const ProgressBar = () => {
	const { scrollYProgress } = useScroll()
	const left = useTransform(scrollYProgress, (input) => input * 300)
	const [percent, setPercent] = useState<number>(0)

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		setPercent(latest * 100)
	})

	return (
		<div className="fixed bottom-[5%] right-[5%] ">
			{/* <div className="h-3 w-[300px] rounded-full bg-primary overflow-hidden">
				<motion.div
					className="h-3 rounded-full bg-primary-foreground origin-left"
					style={{ scaleX: scrollYProgress }}
				/>
			</div>
			<motion.span className="absolute -top-6 -translate-x-1/2 font-bold" style={{ left }}>
				{Math.round(percent) === 100 ? "Done" : Math.round(percent) === 0 ? "Let's go!" : Math.round(percent) + "%"}
			</motion.span> */}
		</div>
	)
}

export default ProgressBar
