import React from 'react'
import Input from '../UI/Input/Input'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		width: '60%',
		justifyContent: 'space-between',
		marginLeft: 'auto',
		marginRight: 'auto',
	},

	clearBtn: {
		// background: '#d5d5d5',
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
	}
}

const SearchBar: React.FC<inputProps> = ({
	onSearchHandler,
	onSearchClear,
	searchBarState,
}) => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
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
			<Button className={classes.clearBtn} onClick={onSearchClear}>
				RESET
			</Button>
		</div>
	)
}

export default SearchBar
