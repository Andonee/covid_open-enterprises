import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SearchBarTypesList from './SearchBarTypesList'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		width: '60%',
		justifyContent: 'space-between',
		marginLeft: 'auto',
		marginRight: 'auto',
	},

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

const SearchBar: React.FC<inputProps> = ({
	onSearchHandler,
	onSearchClear,
	searchBarState,
}) => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<SearchBarTypesList
				onSearchClear={onSearchClear}
				onSearchHandler={onSearchHandler}
				searchBarState={searchBarState}
			/>
		</div>
	)
}

export default SearchBar
