import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { PopoverAnchor, PopoverArrow } from "@radix-ui/react-popover"
import { PropsWithChildren } from "react"

export function Summary({ children }: PropsWithChildren) {
	return (
		<div className="flex justify-center my-2">
			<Popover>
				<PopoverTrigger asChild>
					<Button className="font-bold">✨ Summary ✨</Button>
				</PopoverTrigger>
				<PopoverContent className="w-80 border-none">
					<PopoverArrow fill="white" />
					{children}
				</PopoverContent>
			</Popover>
		</div>
	)
}
