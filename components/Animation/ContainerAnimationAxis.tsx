import { TPropsWithChildren } from "@/types/common"
import { HTMLMotionProps, motion } from "framer-motion"

type TContainerAnimation = TPropsWithChildren &
	HTMLMotionProps<"div"> & {
		axisX?: number
		axisY?: number
		title?: string
	}

const ContainerAnimationAxis = ({ axisX = 0, axisY = 50, title, children, ...props }: TContainerAnimation) => {
	return (
		<motion.div
			layout
			initial={{ x: axisX, y: axisY, opacity: 0 }}
			animate={{ x: 0, y: 0, opacity: 1 }}
			exit={{ x: axisX, y: axisY, opacity: 0 }}
			transition={{
				type: "spring",
				stiffness: 260,
				damping: 20,
			}}
			{...props}
		>
			<h1 className="select-none">{title}</h1>
			{children}
		</motion.div>
	)
}
export default ContainerAnimationAxis
