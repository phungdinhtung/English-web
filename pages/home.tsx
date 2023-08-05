import ContainerAnimationAxis from "@/components/Animation/ContainerAnimationAxis"
import { VariantsShowText } from "@/constants/variants-motion"
import Layout from "@/layout/Layout"
import arrowWhite from "@/public/images/arrow-white.png"
import { NextPageWithLayout } from "@/types/next"
import { motion } from "framer-motion"
import { ReactElement } from "react"

const dataHome = `Chào mừng đến với blog của tôi, một không gian học tập và chia sẻ
kiến thức đặc biệt dành riêng cho các lập trình viên IT muốn nâng cao kỹ năng tiếng Anh của mình! <br/> 

Xin chào các bạn, tôi là Tùng, một lập trình viên đam mê công nghệ và đồng thời là một người yêu thích ngôn
ngữ và văn hóa. Blog này được tạo ra với mục tiêu chia sẻ những kinh nghiệm, phương pháp học tập hiệu quả và
những bài học bổ ích giúp các bạn tiến bộ trong việc sử dụng tiếng Anh trong lĩnh vực công nghệ thông tin. <br/> 

Trong thế giới ngày càng kết nối và phát triển của IT, tiếng Anh đã trở thành một yếu tố quan trọng không thể
thiếu trong công việc, học tập và giao tiếp hàng ngày. Tuy nhiên, việc học tiếng Anh không phải lúc nào cũng
dễ dàng đối với các lập trình viên, đặc biệt khi phải đối mặt với cấu trúc ngữ pháp phức tạp và từ vựng chuyên
ngành. <br/> 

Qua blog này, tôi muốn giúp bạn vượt qua những khó khăn đó bằng cách cung cấp các hướng dẫn, bài học, và tài
liệu hữu ích giúp bạn hiểu rõ hơn về cấu trúc tiếng Anh. Từ những khái niệm cơ bản đến những kỹ thuật nâng
cao, chúng ta sẽ cùng nhau khám phá và ứng dụng tiếng Anh một cách linh hoạt và tự tin trong công việc và cuộc
sống hàng ngày. <br/> 

Rất mong rằng blog này sẽ trở thành nguồn cảm hứng và động lực để các bạn chinh phục tiếng Anh một cách hiệu
quả, nhanh chóng và vui vẻ. Hãy cùng nhau xây dựng một cộng đồng học tập tích cực và hỗ trợ lẫn nhau trên hành
trình chinh phục ngôn ngữ mới này. <br/> 

Cảm ơn các bạn đã đến với blog của tôi! Hãy đồng hành cùng Tùng và cùng nhau khám phá thế giới tiếng Anh trong
lĩnh vực công nghệ thông tin! <br/> 

Let's code and learn English together! <br/> 

Best regards, <br/> 

Tùng
`

const icon = {
	hidden: {
		pathLength: 0,
		fill: "rgba(255, 255, 255, 0)",
	},
	visible: {
		pathLength: 1,
		fill: "rgba(255, 255, 255, 1)",
	},
}

const Home: NextPageWithLayout = () => {
	return (
		<ContainerAnimationAxis>
			<h1>HOME</h1>
			<motion.div
				variants={VariantsShowText.container}
				initial="hidden"
				animate="show"
				className="flex flex-wrap gap-1 max-w-3xl leading-8 text-lg relative select-none"
			>
				&#9995;
				{dataHome.split(" ").map((item, index) => (
					<>
						{item === "<br/>" ? (
							<div className="basis-full" />
						) : (
							<motion.span key={index} variants={VariantsShowText.itemFromRight}>
								{item}{" "}
							</motion.span>
						)}
					</>
				))}
				<motion.div
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					transition={{ ease: "anticipate", duration: 4 }}
					className="absolute -right-2/3 flex"
				>
					<motion.img
						src={arrowWhite.src}
						className="select-none cursor-move w-32"
						drag
						whileDrag={{ scale: 1.5 }}
						dragSnapToOrigin
					/>
					<motion.span
						className="select-none cursor-move text-2xl font-bold"
						drag
						whileDrag={{ scale: 1.5 }}
						dragSnapToOrigin
					>
						&#128008; Don't read it <br /> I'm talking nonsense &#128008;
					</motion.span>
				</motion.div>
			</motion.div>
		</ContainerAnimationAxis>
	)
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}

export default Home
