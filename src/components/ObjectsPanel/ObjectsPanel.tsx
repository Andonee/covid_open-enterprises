import React from 'react'
import ObjectElement from './ObjectElement/ObjectElement'

import { objects } from '../../data/objects'

const ObjectsPanel = () => {
	console.log(objects)
	let objectList

	return (
		<div>
			{objects.map(el => {
				return <ObjectElement key={el.id} data={el} />
			})}
		</div>
	)
}
export default ObjectsPanel
