import React from 'react'
import Input from '../UI/Input/Input'
import CostumButton from '../UI/Button/CustomButton'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	clearBtn: {
		background: theme.palette.primary.main,
		letterSpacing: '2px',
	},
}))

interface inputProps {
	onSearchHandler: (value: { target: { name: string; value: string } }) => void
	onSearchClear: () => void
	searchBarState: {
		name?: string
		state?: string
		county?: string
		city?: string
		type?: string
	}
}

const SearchBarTypesList: React.FC<inputProps> = ({
	onSearchClear,
	onSearchHandler,
	searchBarState,
}) => {
	const classes = useStyles()
	return (
		<>
			<Input
				name='name'
				id='nazwaInput'
				placeholder='Name'
				onChange={onSearchHandler}
				defaultValue={searchBarState.name}
			/>
			<Input
				name='state'
				id='stateInput'
				placeholder='State'
				onChange={onSearchHandler}
				defaultValue={searchBarState.state}
			/>
			<Input
				name='county'
				id='countyInput'
				placeholder='County'
				onChange={onSearchHandler}
				defaultValue={searchBarState.county}
			/>
			<Input
				name='city'
				id='cityInput'
				placeholder='City'
				onChange={onSearchHandler}
				defaultValue={searchBarState.city}
			/>
			<CostumButton
				text='reset'
				action={onSearchClear}
				style={classes.clearBtn}
			/>
		</>
	)
}

export default SearchBarTypesList
