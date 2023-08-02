import Link from 'next/link'
import * as React from 'react'

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { LEVEL1_ROUTE } from '@/constants/route'
import { cn } from '@/lib/utils'
import { Star } from 'lucide-react'
import Logo from './Logo'
import { motion } from 'framer-motion'

const levels: { title: string; href: string; description?: string }[] = [
	{
		title: 'Level 1',
		href: '/level-1',
		description: 'A modal dialog that interrupts the user with important content and expects a response.',
	},
	{
		title: 'Level 2',
		href: '/docs/primitives/hover-card',
		description: 'For sighted users to preview content available behind a link.',
	},
	{
		title: 'Level 3',
		href: '/docs/primitives/progress',
		description:
			'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
	},
	{
		title: 'Level 4',
		href: '/docs/primitives/scroll-area',
		description: 'Visually or semantically separates content.',
	},
	{
		title: 'Level 5',
		href: '/docs/primitives/tabs',
		description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
	},
]

export function NavBar() {
	return (
		<motion.div
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			exit={{ y: -100 }}
			transition={{
				type: 'spring',
				stiffness: 200,
				damping: 50,
			}}
		>
			<div className="container py-8 bg-white/10 rounded-b-full flex items-center justify-between">
				<Logo />
				<NavigationMenu>
					<NavigationMenuList className="gap-1">
						<NavigationMenuItem>
							<NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
									<li className="row-span-3">
										<NavigationMenuLink asChild>
											<Link
												className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
												href="/"
											>
												<div className="mb-2 mt-4 text-lg font-medium">DTEng</div>
												<p className="text-sm leading-tight text-muted-foreground">My English grammar page</p>
											</Link>
										</NavigationMenuLink>
									</li>
									<ListItem href="/home" title="Home">
										My Home Page
									</ListItem>
									<ListItem href="/home" title="Route">
										The path to learn this structure
									</ListItem>
									<ListItem href="/home" title="About My Web">
										How did I build it?
									</ListItem>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Learn with Level</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid w-[400px] gap-3 p-5 md:w-[500px] md:grid-cols-2 lg:w-[680px] ">
									{levels.map((item) => (
										<ListItemLevel key={item.title} title={item.title} href={item.href} />
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/docs" legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>Games ( Coming Soon )</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</motion.div>
	)
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
	({ className, title, children, href, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<Link
						href={href || '/'}
						ref={ref}
						className={cn(
							'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
							className
						)}
						{...props}
					>
						<div className="text-sm font-medium leading-none">{title}</div>
						<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
					</Link>
				</NavigationMenuLink>
			</li>
		)
	}
)

const ListItemLevel = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
	({ className, title, ...props }, ref) => {
		const numberStar = parseInt(title?.slice(-1) || '1')
		return (
			<li>
				<NavigationMenuLink asChild>
					<Link
						href={props.href || '/'}
						ref={ref}
						className={cn(
							'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
							className
						)}
						{...props}
					>
						<div className="text-sm font-medium leading-none flex items-center gap-1">
							{title}{' '}
							{[...Array(numberStar)].map((x, i) => (
								<Star className="w-4" key={i} strokeWidth={3} />
							))}
						</div>
						{LEVEL1_ROUTE.links.map((item) => (
							<p key={item.title} className="line-clamp-2 text-sm leading-snug text-muted-foreground">
								{item.title}
							</p>
						))}
					</Link>
				</NavigationMenuLink>
			</li>
		)
	}
)

ListItem.displayName = 'ListItem'
ListItemLevel.displayName = 'ListItemLevel'
