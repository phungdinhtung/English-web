import { Variants } from "framer-motion"

type TVariantsMotion = {
	[key: string]: Variants
}

export const VariantsShowItems: TVariantsMotion = {
	container: {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 0.5,
				staggerChildren: 0.2,
			},
		},
	},
	item: {
		hidden: { opacity: 0, x: -10 },
		show: { opacity: 1, x: 0 },
	},
	itemFromRight: {
		hidden: { opacity: 0, x: 10 },
		show: { opacity: 1, x: 0 },
	},
}

export const VariantsShowText: TVariantsMotion = {
	container: {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.03,
			},
		},
	},
	itemFromRight: {
		hidden: {
			opacity: 0,
			x: 20,
		},
		show: {
			opacity: 1,
			x: 0,
		},
	},
}
