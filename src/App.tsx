import { useReducer } from 'react'
import './App.css'
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import SearchBar from './components/SearchBar/SearchBar'
import TypesBar from './components/TypesBar/TypesBar'

import {
	initialStateOfSearchBar,
	SearchBarReducer,
} from './reducers/SearchBarReducer'

const useStyles = makeStyles({
	root: {
		height: '100%',
		flexGrow: 1,
	},
	header: {
		height: '60px',
		borderRadius: 0,
	},
	section: {
		height: '50px',
		borderRadius: 0,
		boxShadow: 'none',
		display: 'flex',
		alignItems: 'center',
	},
	types: {
		boxShadow: '0px 4px 6px 0px #c0c0c0',
		zIndex: 5,
	},
	mapSection: {
		height: 'calc(100vh - 160px)',
	},
})

function App() {
	const classes = useStyles()

	const [searchBarState, dispatchSearchBar] = useReducer(
		SearchBarReducer,
		initialStateOfSearchBar
	)

	const onSearchHandler = (value: {
		target: { name: string; value: string }
	}) => {
		dispatchSearchBar({ type: 'search', payload: value.target })
	}

	const onTypeChangeHandler = (name: string, value: string) => {
		dispatchSearchBar({ type: 'search', payload: { name, value } })
	}

	const onSearchClear = () => {
		dispatchSearchBar({ type: 'clear' })
	}

	return (
		<div className={classes.root}>
			<Grid container>
				<Grid item xs={12}>
					<div className={classes.header}>header</div>
				</Grid>
				<Grid item xs={12} className={classes.types}>
					<div className={classes.section}>
						<SearchBar
							onSearchHandler={onSearchHandler}
							onSearchClear={onSearchClear}
							searchBarState={searchBarState}
						/>
					</div>
				</Grid>
				<Grid item xs={12}>
					<div className={classes.section}>
						<TypesBar onTypeChangeHandler={onTypeChangeHandler} />
					</div>
				</Grid>
				<Grid container item xs={12} className={classes.mapSection}>
					<Grid item xs={6}>
						<Paper>List</Paper>
					</Grid>
					<Grid item xs={6}>
						Map
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default App
