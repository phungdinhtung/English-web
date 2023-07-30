import { NavBar } from '@/components/NavBar'
import { motion } from 'framer-motion'
import React from 'react'

interface LayoutProps {
	children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
	return (
		<>
			<NavBar />
			<motion.div
				initial={{ x: 300, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				exit={{ x: 300, opacity: 0 }}
				transition={{
					type: 'spring',
					stiffness: 260,
					damping: 20,
				}}
			>
				<main className="container">{children}</main>
			</motion.div>
		</>
	)
}

export default Layout
