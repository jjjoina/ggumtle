import React from 'react'

import CategorySelect from '../../../../components/CategorySelect'
import { categoryData } from '../../../../utils/category'
import PageDescription from '../../../../components/PageDescription'
import CategoryNextButton from './CategoryNextButton'

const CategoryInfo = () => {
	return (
		<section className="flex flex-col pt-12 grow">
			<section>
				<PageDescription type={'categoryWrite'} />
			</section>
			{/* // Todo : pt-12로 변경 예정 */}
			<section className="pt-20 grow">
				<CategorySelect categoryData={categoryData} />
			</section>
			<CategoryNextButton />
		</section>
	)
}

export default CategoryInfo
