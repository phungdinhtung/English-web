import { Inter } from 'next/font/google'

import { animated, to, useSpring } from '@react-spring/web'

import { cn } from '@/lib/utils'
import { useRef, useState } from 'react'
import { useWindowSize } from 'react-use'
import { useDrag, useGesture } from 'react-use-gesture'
import { useRouter } from 'next/router'

const inter = Inter({
	subsets: ['latin'],
})

export default function Home() {
	const router = useRouter()
	const [open, setOpen] = useState(false)
	const domTarget = useRef<HTMLDivElement>(null)

	const { width: widthScreen, height: heightScreen } = useWindowSize()

	const calcX = (y: number, ly: number) => -(y - ly - heightScreen / 2) / 5
	const calcY = (x: number, lx: number) => (x - lx - widthScreen / 2) / 5

	const bounds = {
		left: -widthScreen / 2,
		right: widthScreen / 2,
		top: -heightScreen / 2,
		bottom: heightScreen / 2,
	}

	const [{ x: xWelcome, y: yWelcome, scale: scaleWelcome }, apiWelcome] = useSpring(() => ({ x: 0, y: 0, scale: 1 }))
	const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale, width, height, borderRadius }, api] = useSpring(() => ({
		rotateX: 0,
		rotateY: 0,
		rotateZ: 0,
		scale: 1,
		zoom: 0,
		x: 0,
		y: 0,
		config: { mass: 5, tension: 350, friction: 40 },
		width: 300,
		height: 300,
		borderRadius: 999,
	}))

	useGesture(
		{
			onDrag: ({ active, offset: [x, y], tap }) => {
				if (tap) {
					setOpen(!open)
					api.start({
						from: {
							width: 300,
							height: 300,
							borderRadius: 999,
						},
						to: {
							y: 0,
							width: widthScreen + Math.abs(x) * 2,
							height: heightScreen + Math.abs(y) * 2,
							borderRadius: 0,
						},
					})
					setTimeout(() => {
						router.push('/home')
					}, 1200)
				} else if (!open) {
					return api.start({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 })
				}
			},
			onMove: ({ xy: [px, py], dragging }) => {
				if (!open) {
					return (
						!dragging &&
						api.start({
							rotateX: calcX(py, y.get()),
							rotateY: calcY(px, x.get()),
							scale: 1.1,
						})
					)
				}
			},
			onHover: ({ hovering }) => {
				return !hovering && api.start({ rotateX: 0, rotateY: 0, scale: 1 })
			},
		},
		{
			domTarget,
			eventOptions: { passive: false },
			drag: {
				bounds,
				rubberband: true,
			},
		}
	)

	const bind = useDrag(
		({ offset: [x, y], active }) => {
			apiWelcome.start({ x, y, scale: active ? 1.1 : 1, immediate: active })
		},
		{
			bounds: {
				left: -widthScreen / 2,
				right: widthScreen / 2,
				top: -160,
				bottom: heightScreen - 160 - 80,
			},
			rubberband: true,
		}
	)
	return (
		<main className={`flex min-h-screen flex-col items-center justify-center ${inter.className} overflow-hidden`}>
			<animated.h1
				{...bind()}
				style={{ x: xWelcome, y: yWelcome, scale: scaleWelcome }}
				className={'fixed top-40 rotate-12 select-none cursor-move max-md:text-xl'}
			>
				Welcome to DTEng
			</animated.h1>
			<animated.div
				onPointerDown={() => console.log('pointer down')}
				ref={domTarget}
				className={cn('bg-[#404040] cursor-move rounded-full flex items-center justify-center')}
				style={{
					transform: 'perspective(600px)',
					x,
					y,
					scale: to([scale, zoom], (s, z) => s + z),
					rotateX,
					rotateY,
					rotateZ,
					width,
					height,
					borderRadius,
				}}
			>
				<div className={cn('bg-logo-dark object-cover bg-cover w-[280px] h-[280px] rounded-full')} />
			</animated.div>
		</main>
	)
}
