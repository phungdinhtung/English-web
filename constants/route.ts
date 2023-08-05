import { TSubRoute } from "@/types/route"

export const LEVEL1 = {
	CHUC_NANG_CUA_DANH_TU_TRONG_CAU: "/level-1/chuc-nang-cua-danh-tu-trong-cau",
	DAI_TU_NHAN_XUNG_CHU_NGU_VA_TAN_NGU: "/level-1/dai-tu-nhan-xung-chu-ngu-va-tan-ngu",
	DONG_TU_KHIEM_KHUYET: "/level-1/dong-tu-khiem-khuyet",
	DONG_TU_NOI: "/level-1/dong-tu-noi",
	BA_THI_DON: "/level-1/ba-thi-don",
	VI_TRI_CUA_DANH_TU_TRONG_CAU: "/level-1/vi-tri-cua-danh-tu-trong-cau",
	VI_TRI_CUA_DONG_TU_TRONG_CAU: "/level-1/vi-tri-cua-dong-tu-trong-cau",
	VI_TRI_CUA_TINH_TU_TRONG_CAU: "/level-1/vi-tri-cua-tinh-tu-trong-cau",
}

export const LEVEL1_ROUTE: TSubRoute = {
	title: "Level 1",
	href: "/level-1",
	links: [
		{ title: "Chức năng của Danh từ trong câu", href: LEVEL1.CHUC_NANG_CUA_DANH_TU_TRONG_CAU },
		{ title: "Đại từ Nhân xưng Chủ Ngữ và Tân ngữ", href: LEVEL1.DAI_TU_NHAN_XUNG_CHU_NGU_VA_TAN_NGU },
		{ title: "Động từ Khiếm khuyết (Modal Verbs)", href: LEVEL1.DONG_TU_KHIEM_KHUYET },
		{ title: "Động từ Nối (Linking Verbs)", href: LEVEL1.DONG_TU_NOI },
		{ title: "Ba Thì Đơn (Simple Tenses)", href: LEVEL1.BA_THI_DON },
		{ title: "Vị Trí Của Danh Từ Trong Câu", href: LEVEL1.VI_TRI_CUA_DANH_TU_TRONG_CAU },
		{ title: "Vị trí của Động từ trong câu (Verbs)", href: LEVEL1.VI_TRI_CUA_DONG_TU_TRONG_CAU },
		{ title: "Vị Trí Của Tính Từ Trong Câu (Adjectives)", href: LEVEL1.VI_TRI_CUA_TINH_TU_TRONG_CAU },
	],
}
