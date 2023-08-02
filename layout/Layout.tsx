import { NavBar } from '@/components/NavBar'
import React from 'react'

interface LayoutProps {
	children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
	return (
		<div>
			<NavBar />
			<main className="container">{children}</main>
		</div>
	)
}

export default Layout
