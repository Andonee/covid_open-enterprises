import React from 'react'
import ObjectElement from './ObjectElement/ObjectElement'
import { filteredObjectsList } from '../../utils/filteredObjectsList'

import { objects } from '../../data/objects'

interface inputProps {
	searchBarState: {
		name?: string
		state?: string
		county?: string
		city?: string
		type?: string
	}
}

const ObjectsPanel: React.FC<inputProps> = ({ searchBarState }) => {
	let objectsList: {
		id: string
		type: string
		name: string
		hours: {
			mon: { open: string; close: string }
			tue: { open: string; close: string }
			wed: { open: string; close: string }
			thu: { open: string; close: string }
			fri: { open: string; close: string }
			sat: { open: string; close: string }
			sun: { open: string; close: string }
		}
		address: {
			state: string
			county: string
			city: string
			zipCode: string
			street: string
		}
		www: string
		info: string
	}[] = []

	if (searchBarState) {
		objectsList = filteredObjectsList(
			objects,
			searchBarState.name!,
			searchBarState.state!,
			searchBarState.county!,
			searchBarState.city!,
			searchBarState.type!
		)
	} else {
		objectsList = []
	}

	return (
		<div>
			{objectsList.map(el => {
				return <ObjectElement key={el.id} data={el} />
			})}
		</div>
	)
}
export default ObjectsPanel
