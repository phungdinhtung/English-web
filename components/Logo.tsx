import Image from 'next/image'
import logo from '@/public/images/logo.png'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface ILogo {
	className?: string
}

const Logo = ({ className }: ILogo) => {
	return (
		<Link href="/">
			<Image className={cn(' rounded-full mx-4', className)} src={logo} alt="logo" width={60} height={60} />
		</Link>
	)
}

export default Logo
