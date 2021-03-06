import React from 'react'
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

	btnStyle: {
		fontSize: '12px',
	},

	btnSelected: {
		background: theme.palette.primary.main,
	},
}))

interface inputProps {
	onTypeChangeHandler: (name: string, value: string) => void
	searchBarState: {
		name?: string
		state?: string
		county?: string
		city?: string
		type?: string
	}
}

const TypesBar: React.FC<inputProps> = ({
	onTypeChangeHandler,
	searchBarState,
}) => {
	const classes = useStyles()

	const onTypeClickHandler = (e: React.MouseEvent<HTMLElement>) => {
		const name = e.currentTarget.getAttribute('name')!
		const value = e.currentTarget.getAttribute('id')!

		onTypeChangeHandler(name, value)
	}

	const type = searchBarState.type

	return (
		<div className={classes.root}>
			<Button
				className={
					type === 'restaurant'
						? `${classes.btnStyle} ${classes.btnSelected}`
						: `${classes.btnStyle}`
				}
				onClick={onTypeClickHandler}
				id='restaurant'
				name='type'>
				Restaurant
			</Button>
			<Button
				className={
					type === 'pub'
						? `${classes.btnStyle} ${classes.btnSelected}`
						: `${classes.btnStyle}`
				}
				onClick={onTypeClickHandler}
				id='pub'
				name='type'>
				Pub
			</Button>
			<Button
				className={
					type === 'gym'
						? `${classes.btnStyle} ${classes.btnSelected}`
						: `${classes.btnStyle}`
				}
				onClick={onTypeClickHandler}
				id='gym'
				name='type'>
				Gym
			</Button>
			<Button
				className={
					type === 'sport'
						? `${classes.btnStyle} ${classes.btnSelected}`
						: `${classes.btnStyle}`
				}
				onClick={onTypeClickHandler}
				id='sport'
				name='type'>
				Sport
			</Button>
			<Button
				className={
					type === 'cinema'
						? `${classes.btnStyle} ${classes.btnSelected}`
						: `${classes.btnStyle}`
				}
				onClick={onTypeClickHandler}
				id='cinema'
				name='type'>
				Cinema
			</Button>
			<Button
				className={
					type === 'theatre'
						? `${classes.btnStyle} ${classes.btnSelected}`
						: `${classes.btnStyle}`
				}
				onClick={onTypeClickHandler}
				id='theatre'
				name='type'>
				Theatre
			</Button>
		</div>
	)
}

export default TypesBar
