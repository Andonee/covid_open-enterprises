import {
	SearchBarAction,
	SearchBarState,
} from '../interfaces/SearchbarInterfaces'

export const initialStateOfSearchBar: SearchBarState = {
	name: '',
	state: '',
	county: '',
	city: '',
	type: '',
}

export const SearchBarReducer = (
	state: SearchBarState,
	action: SearchBarAction
): SearchBarState => {
	switch (action.type) {
		case 'search': {
			return (state = {
				...state,
				[action.payload!.name]: action.payload!.value,
			})
		}
		case 'clear': {
			return (state = initialStateOfSearchBar)
		}
		default:
			return state
	}
}
