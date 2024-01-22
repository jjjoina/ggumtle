import { MouseEventHandler, ReactNode } from 'react'

export interface IBucketWide {
	title: string
	color: string
	dDay: number
	isLock: boolean
}

export interface BucketInfoProps {
	bucketInfo: IBucketWide
}

// 헤더 아이콘 type
export interface IMenu {
	[key: string]: ReactNode | string | null
}

// 아이콘에 할당할 함수 type
export interface IMenuFunc {
	left_func: MouseEventHandler<HTMLDivElement> | undefined
	right_func: MouseEventHandler<HTMLDivElement> | undefined
}

export interface IHeaderProp {
	menu: IMenu
	func: IMenuFunc
}
