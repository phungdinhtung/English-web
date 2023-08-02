import { animated, to, useSpring } from '@react-spring/web'

import { cn } from '@/lib/utils'
import arrowWhite from '@/public/images/arrow-white.png'
import { useDrag, useGesture } from '@use-gesture/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { useWindowSize } from 'react-use'

export default function Home() {
	const router = useRouter()
	const [open, setOpen] = useState(false)
	const target = useRef<HTMLDivElement>(null)

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
	const [{ x: xArrow, y: yArrow, scale: scaleArrow }, apiArrow] = useSpring(() => ({ x: 0, y: 0, scale: 1 }))

	const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale, width, height, borderRadius }, api] = useSpring(() => ({
		rotateX: 0,
		rotateY: 0,
		rotateZ: 0,
		scale: 1,
		zoom: 0,
		x: 0,
		y: 0,
		config: { mass: 5, tension: 350, friction: 40 },
		width: 280,
		height: 280,
		borderRadius: 999,
	}))

	useGesture(
		{
			onDrag: ({ active, offset: [x, y], tap }) => {
				if (tap) {
					setOpen(true)
					!open &&
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
			target,
			eventOptions: { passive: false },
			drag: {
				bounds,
				rubberband: true,
			},
		}
	)

	const bind = useDrag(({ offset: [x, y], active }) => {
		apiWelcome.start({ x, y, scale: active ? 1.1 : 1, immediate: active })
	})

	const arrow = useDrag(({ offset: [x, y], active }) => {
		apiArrow.start({ x, y, scale: active ? 1.1 : 1, immediate: active })
	})

	return (
		<div className={`flex min-h-screen flex-col items-center justify-center overflow-hidden`}>
			<animated.h1
				{...bind()}
				style={{ x: xWelcome, y: yWelcome, scale: scaleWelcome }}
				className={
					'fixed top-20 md:top-40 rotate-12 select-none cursor-move max-md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-white touch-none'
				}
			>
				Welcome to DTEng
			</animated.h1>
			<animated.div
				{...arrow()}
				style={{ x: xArrow, y: yArrow, scale: scaleArrow }}
				className="select-none cursor-move fixed top-32 md:top-[240px] left-1/2 md:left-[60%] touch-none"
			>
				<Image
					draggable={false}
					src={arrowWhite}
					alt="arrow-white"
					width={100}
					height={100}
					className="rotate-90 max-md:w-14"
				/>
				<p>&#10024; This one (me) can drag, hover and click &#10024;</p>
				<Image draggable={false} src={arrowWhite} alt="arrow-white" width={100} height={100} className="max-md:w-14" />
			</animated.div>
			<animated.div
				ref={target}
				className={cn('bg-[#404040] cursor-move rounded-full flex items-center justify-center touch-none')}
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
				<div className="bg-gradient-to-r from-indigo-500 to-white rounded-full p-1">
					<div className={cn('bg-logo-dark object-cover bg-cover w-[280px] h-[280px] rounded-full')} />
				</div>
			</animated.div>
		</div>
	)
}
