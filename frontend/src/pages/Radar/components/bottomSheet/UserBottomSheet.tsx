import PreviewUser from './UserPreview'
import { MAX_BOTTOM_SHEET_HEIGHT } from '../../../../hooks/useUserBottomSheet'
import Header from '../../../../components/Header'
import { IMenu, IMenuFunc } from '../../../../interfaces'
import { icons } from '../../../../constants/header-icons'
import UserPage from '../../../UserPage'

interface UserBottomSheetProp {
	userId: number | null
	togglePreview: () => void
	isMaxup: boolean
	sheet: React.RefObject<HTMLDivElement>
	content: React.RefObject<HTMLDivElement>
}

const UserBottomSheet = (props: UserBottomSheetProp) => {
	const { userId, togglePreview, isMaxup, sheet, content } = props
	const menu: IMenu = {
		left: icons.BACK,
		center: 'juno', // @TODO: 사용자 닉네임 넣기
		right: icons.HAMBERGER,
	}

	const func: IMenuFunc = {
		left_func: () => {
			togglePreview()
		},
		right_func: undefined,
	}
	return (
		<div
			ref={sheet}
			style={{ height: `${MAX_BOTTOM_SHEET_HEIGHT}px` }}
			className={`flex flex-col fixed top-[calc(100%-50px)] left-0 right-0 z-5 rounded-t-2xl shadow-2xl
		bg-white transition-transform duration-500 ease-out overflow-scroll pb-20`}
		>
			{isMaxup ? (
				<Header menu={menu} func={func} />
			) : (
				<div onClick={togglePreview} className="h-10 rounded-t-lg relative pt-5 pb-2">
					<div className="w-14 h-[5px] rounded-full bg-unActive m-auto" />
				</div>
			)}
			{isMaxup ? (
				<div ref={content}>
					<UserPage isForRadar={true} />
				</div>
			) : userId ? (
				<div className="px-5 py-2">
					<PreviewUser userId={userId} />
				</div>
			) : (
				<div className="px-5 py-2 text-point1">
					{/* @TODO: userId가 없을 경우 (유저를 클릭하지 않았을 경우 보여줄 컴포넌트 만들기) */}
					다른 사용자를 눌러보세요 <br />
					유저를 클릭하지 않았을 경우 뭐라고 표시하면 좋을까요
				</div>
			)}
		</div>
	)
}

export default UserBottomSheet
