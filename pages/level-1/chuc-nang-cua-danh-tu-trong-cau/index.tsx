import ContainerAnimationAxis from "@/components/Animation/ContainerAnimationAxis"
import { Summary } from "@/components/Summary"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Layout from "@/layout/Layout"
import { NextPageWithLayout } from "@/types/next"
import { ReactElement } from "react"

const Page: NextPageWithLayout = () => {
	return (
		<ContainerAnimationAxis title="Chức năng của Danh từ trong câu">
			<Summary>
				<div>
					<h6 className="text-[#DF2E38]">(Cụm) Danh từ có các chức năng như sau:</h6>
					<p>👉 Làm chủ ngữ trong câu</p>
					<p>👉 Làm tân ngữ của động từ</p>
					<p>👉 Làm tân ngữ của giới từ </p>
					<p>👉 Làm bổ ngữ của động từ</p>
				</div>
			</Summary>
			<Accordion type="multiple">
				<AccordionItem value="item-1">
					<AccordionTrigger className="text-base">1. (Cụm) Danh từ làm chủ ngữ trong câu</AccordionTrigger>
					<AccordionContent className="[&>div]:space-y-2">
						<h6>Vị trí: Thường sẽ đứng đầu câu, trước động từ được chia ở thì.</h6>
						<p>
							Để biết chủ ngữ ở đâu, chúng ta chỉ cần biết động từ chia thì nằm ở đâu trong câu, thì chủ ngữ sẽ nằm ở
							trước đó.
						</p>
						<h5>Ví dụ:</h5>
						<p className="annotate">
							<b>Cats</b> love to sit in boxes. = Mèo rất thích ngồi ở bên trong những chiếc hộp. <br /> → Động từ chia
							thì là love → <strong>Cats</strong> là danh từ đóng vai trò chủ ngữ của câu.
						</p>
						<p className="annotate">
							<strong>The exhibition of Roman paintings</strong> has attracted many art students. = Buổi triễn lãm tranh
							La Mã thu hút rất nhiều sinh viên mỹ thuật. <br /> → Động từ chia thì là has attracted → Cụm{" "}
							<strong>the exhibition of Roman paintings</strong> là một cụm danh từ và là chủ ngữ của câu; trong đó,
							danh từ chính của cụm là chữ exhibition.
						</p>
						<p className="annotate">
							From Monday to Friday, <strong>new episodes</strong> will be aired on the channel. = Từ thứ hai đến thứ
							sáu, các tập phim mới sẽ được chiếu trên kênh này. <br /> → Động từ chia thì là will be aired → Cụm{" "}
							<strong>new episodes</strong> là một cụm danh từ và là chủ ngữ của câu; trong đó, danh từ chính của cụm là
							chữ episodes. <br /> Lưu ý là: from Monday to Friday chỉ là thời gian của hành động, bổ sung ý nghĩa cho
							cả câu nên chúng ta không xem nó là một phần của chủ ngữ.
						</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger className=" text-base">2. (Cụm) Danh từ làm tân ngữ của động từ</AccordionTrigger>
					<AccordionContent className="[&>div]:space-y-2">
						<h6>Vị trí: Thường sẽ đứng sau động từ của câu.</h6>
						<p>
							Để biết chủ ngữ ở đâu, chúng ta chỉ cần biết động từ chia thì nằm ở đâu trong câu, thì chủ ngữ sẽ nằm ở
							trước đó.
						</p>
						<p>
							Lưu ý là có một số động từ thì bắt buộc có tân ngữ, còn có một số động từ thì không được có tân ngữ. Đây
							là một chủ đề khó hơn, nếu bạn muốn tìm hiểu thêm thì bạn có thể học ở bài Nội động từ & Ngoại động từ
							nhé!
						</p>
						<h5>Ví dụ:</h5>
						<p className="annotate">
							I want to choose <strong>the suitable makeup products</strong> for my skin. = Tôi muốn chọn những sản phẩm
							trang điểm đúng phù hợp cho da của tôi. <br /> → Cụm <strong>the suitable makeup products</strong> là một
							cụm danh từ và là tân ngữ của động từ choose.
						</p>
						<p className="annotate">
							All students must sign up to get <strong>permission</strong> to attend the workshop. = Tất cả sinh viên
							phải đăng ký để được phép tham dự buổi hội thảo. <br /> → Cụm <strong>permission</strong> là một cụm danh
							từ và là tân ngữ của động từ get.
						</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger className=" text-base">3. (Cụm) Danh từ làm tân ngữ của giới từ</AccordionTrigger>
					<AccordionContent className="[&>div]:space-y-2">
						<h6>Vị trí: Đứng sau giới từ.</h6>
						<h5>Ví dụ:</h5>
						<p className="annotate">
							My mother has just received a wedding invitation from <strong>my uncle</strong>. = Mẹ tôi mới nhận được
							thiệp mời đám cưới từ chú tôi. <br /> → Cụm <strong>my uncle</strong> là một cụm danh từ và là tân ngữ của
							giới từ <strong>from</strong>.
						</p>
						<p className="annotate">
							The famous writer wrote about <strong>his unusual childhood</strong> in his new book. = Nhà văn nổi tiếng
							viết về tuổi thơ bất thường của ông ấy trong quyển sách mới. <br /> → Cụm{" "}
							<strong>his unusual childhood</strong> là một cụm danh từ và là tân ngữ của giới từ <strong>about</strong>
							.
						</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4">
					<AccordionTrigger className="text-base">4. (Cụm) Danh từ làm bổ ngữ</AccordionTrigger>
					<AccordionContent className="[&>div]:space-y-2">
						<h6>
							Bổ nghĩa đứng sau <b>to be</b> và <b>các động từ nối</b>
						</h6>
						<p>
							(Cụm) danh từ làm <strong>bổ ngữ chủ ngữ</strong> khi đứng sau động từ <strong>to be</strong> hoặc động từ
							nối (linking verbs) như <strong>become, feel, ...</strong>
						</p>
						<p>
							Trong trường hợp này, <strong>danh từ</strong> và <strong>chủ ngữ</strong> cùng chỉ một người hay một vật
							nên ta gọi tên bổ ngữ này là bổ ngữ chủ ngữ.
						</p>
						<p className="annotate">
							<strong>He</strong> is <strong className="underline">a teacher</strong>. → Anh ấy là giáo viên. (
							<strong>teacher</strong> và <strong>he</strong> là cùng một người.)
						</p>
						<p className="annotate">
							<strong>My house</strong> became <strong className="underline">a mess</strong> after the party. → Nhà của
							tôi trở thành một đống lộn xộn sau bữa tiệc. (<strong>my house</strong> và <strong>a mess</strong> cùng
							chỉ một vật)
						</p>
						<h6>
							Bổ nghĩa đứng sau một số <b>động từ</b> khác
						</h6>
						<p>
							(Cụm) danh từ làm <b>bổ ngữ tân ngữ</b> trong cấu trúc <b>Động Từ + Tân Ngữ + Bổ Ngữ.</b>
						</p>
						<p>
							Trong trường hợp này, <b>danh từ và tân ngữ</b> cùng chỉ một người hay một vật nên ta gọi là bổ ngữ tân
							ngữ.
						</p>
						<p>
							Một số động từ thường dùng trong trường hợp này là <b>make, call, appoint, elect, ...</b>
						</p>
						<p className="annotate">
							They elected{" "}
							<b>
								him <u>President</u>
							</b>
							. <br />→ Họ bầu ông ấy làm Tổng Thống. (<b>him</b> và <b>President</b> cùng chỉ một người)
						</p>
						<p className="annotate">
							People call{" "}
							<b>
								it <u>a great invention</u>
							</b>
							. <br />→ Mọi người gọi nó là một phát mình vĩ đại. (<b>it</b> và <b>a great invention</b> cùng chỉ một
							vật)
						</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-5">
					<AccordionTrigger className="text-base">5. Phân loại danh từ trong tiếng Anh</AccordionTrigger>
					<AccordionContent className="[&>div]:space-y-2">
						<h6>Danh từ trong tiếng Anh có thể được phân loại thành các loại là:</h6>
						<p className="annotate">
							<ul></ul>
							👉 Danh từ số ít & Danh từ số nhiều <br /> 👉 Danh từ đếm được & Danh từ không đếm được
						</p>
						<p>
							Bạn có thể tiếp tục học chi tiết về các loại danh từ này trong bài học tiếp theo:{" "}
							<a className="link_highlight box-decoration-clone" href="">
								Tổng Quan Về Danh Từ Trong Tiếng Anh
							</a>
						</p>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</ContainerAnimationAxis>
	)
}

Page.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}

export default Page
