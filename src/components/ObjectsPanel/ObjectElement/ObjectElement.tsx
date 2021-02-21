import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionActions from '@material-ui/core/AccordionActions'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) => ({
	category: {
		color: theme.palette.secondary.main,
		marginRight: '20px',
		border: '1px solid gray',
		padding: '5px',
		borderRadius: '3px',
	},

	name: {
		color: theme.palette.secondary.main,
		display: 'flex',
		alignItems: 'center',
	},

	showMore: {
		marginLeft: 'auto',
		color: theme.palette.secondary.main,
		display: 'flex',
		alignItems: 'center',
	},

	accordion: {
		marginBottom: '10px',
		'&:hover': {
			background: theme.palette.info.main,
		},
	},

	workingHours: {
		width: '50%',

		'& > ul': {
			listStyle: 'none',
			lineHeight: '15px',
			paddingLeft: 0,

			'& > li > span': {
				fontWeight: 'bold',
			},
		},
	},
}))

const ObjectElement = () => {
	const classes = useStyles()

	return (
		<Accordion className={classes.accordion}>
			<AccordionSummary
				aria-controls='panel1c-content'
				id='panel1c-header'
				className={classes.accordion}>
				<div className={classes.category}>
					<Typography variant='h5'>Restaurant</Typography>
				</div>
				<div className={classes.name}>
					<Typography variant='h5'>Name of a restaurant</Typography>
				</div>
				<div className={classes.showMore}>
					<Typography variant='h5'>Show more</Typography>
				</div>
			</AccordionSummary>
			<AccordionDetails>
				<div className={classes.workingHours}>
					<Typography variant='h5'>Open:</Typography>
					<ul>
						<Typography component='li' variant='h6'>
							Monday <span>8:00 - 16:00</span>
						</Typography>
						<Typography component='li' variant='h6'>
							Tuesday <span>8:00 - 16:00</span>
						</Typography>
						<Typography component='li' variant='h6'>
							Wednesday <span>8:00 - 16:00</span>
						</Typography>
						<Typography component='li' variant='h6'>
							Thursday <span>8:00 - 16:00</span>
						</Typography>
						<Typography component='li' variant='h6'>
							Friday <span>8:00 - 16:00</span>
						</Typography>
						<Typography component='li' variant='h6'>
							Saturday <span>8:00 - 16:00</span>
						</Typography>
						<Typography component='li' variant='h6'>
							Sunday <span>closed</span>
						</Typography>
					</ul>
				</div>
				<div className={classes.workingHours}>
					<Typography variant='h5'>Contact:</Typography>
					<ul>
						<Typography component='li' variant='h6'>
							Adress: <span>ul. Konopacka 9/30 41-904 Katowice</span>
						</Typography>
						<Typography component='li' variant='h6'>
							www: <span>www.onet.pl</span>
						</Typography>
					</ul>
					<Typography variant='h5'>Info:</Typography>
					<Typography variant='h6'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
						consequatur reiciendis optio consectetur iure ipsum voluptates
						dolore vel quos, repudiandae architecto quaerat distinctio animi
						accusantium aspernatur omnis vitae corrupti ipsam.
					</Typography>
				</div>
			</AccordionDetails>
		</Accordion>
	)
}

export default ObjectElement
