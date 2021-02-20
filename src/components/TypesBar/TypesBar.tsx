import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
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
})

interface inputProps {
	onTypeChangeHandler: (name: string, value: string) => void
}

const TypesBar: React.FC<inputProps> = ({ onTypeChangeHandler }) => {
	const classes = useStyles()

	const onTypeClickHandler = (e: React.MouseEvent<HTMLElement>) => {
		const name = e.currentTarget.getAttribute('name')!
		const value = e.currentTarget.getAttribute('id')!

		console.log(name)
		console.log(value)

		onTypeChangeHandler(name, value)
	}
	return (
		<div className={classes.root}>
			<Button
				className={classes.btnStyle}
				onClick={onTypeClickHandler}
				id='restaurant'
				name='type'>
				Restaurant
			</Button>
			<Button
				className={classes.btnStyle}
				onClick={onTypeClickHandler}
				id='pub'
				name='type'>
				Pub
			</Button>
			<Button
				className={classes.btnStyle}
				onClick={onTypeClickHandler}
				id='gym'
				name='type'>
				Gym
			</Button>
			<Button
				className={classes.btnStyle}
				onClick={onTypeClickHandler}
				id='sport'
				name='type'>
				Sport
			</Button>
			<Button
				className={classes.btnStyle}
				onClick={onTypeClickHandler}
				id='cinema'
				name='type'>
				Cinema
			</Button>
			<Button
				className={classes.btnStyle}
				onClick={onTypeClickHandler}
				id='theatre'
				name='type'>
				Theatre
			</Button>
		</div>
	)
}

export default TypesBar
