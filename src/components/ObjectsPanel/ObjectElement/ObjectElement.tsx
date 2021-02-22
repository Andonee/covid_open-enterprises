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
				marginLeft: '5px',

				'& > a': {
					textDecoration: 'none',
					color: 'inherit',
					transition: 'all .3s',
				},
				'& > a:hover': {
					color: theme.palette.secondary.main,
				},
			},
		},
	},
}))

interface inputProps {
	data: {
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
		address: string
		www: string
		info: string
	}
}

const ObjectElement: React.FC<inputProps> = ({ data }) => {
	const classes = useStyles()

	return (
		<Accordion className={classes.accordion}>
			<AccordionSummary
				aria-controls='panel1c-content'
				id='panel1c-header'
				className={classes.accordion}>
				<div className={classes.category}>
					<Typography variant='h5'>{data.type}</Typography>
				</div>
				<div className={classes.name}>
					<Typography variant='h5'>{data.name}</Typography>
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
							Monday
							<span>
								{data.hours.mon.open} - {data.hours.mon.close}
							</span>
						</Typography>
						<Typography component='li' variant='h6'>
							Tuesday
							<span>
								{data.hours.tue.open} - {data.hours.tue.close}
							</span>
						</Typography>
						<Typography component='li' variant='h6'>
							Wednesday
							<span>
								{data.hours.wed.open} - {data.hours.wed.close}
							</span>
						</Typography>
						<Typography component='li' variant='h6'>
							Thursday
							<span>
								{data.hours.thu.open} - {data.hours.thu.close}
							</span>
						</Typography>
						<Typography component='li' variant='h6'>
							Friday
							<span>
								{data.hours.fri.open} - {data.hours.fri.close}
							</span>
						</Typography>
						<Typography component='li' variant='h6'>
							Saturday
							<span>
								{data.hours.sat.open} - {data.hours.sat.close}
							</span>
						</Typography>
						<Typography component='li' variant='h6'>
							Sunday
							{data.hours.sun.open ? (
								<span>
									{data.hours.sun.open} - {data.hours.sun.close}
								</span>
							) : (
								<span>closed</span>
							)}
						</Typography>
					</ul>
				</div>
				<div className={classes.workingHours}>
					<Typography variant='h5'>Contact:</Typography>
					<ul>
						<Typography component='li' variant='h6'>
							Adress: <span>{data.address}</span>
						</Typography>
						<Typography component='li' variant='h6'>
							www:{' '}
							<span>
								<a href={data.www} target='_blank' rel='noopener noreferrer'>
									{data.www}
								</a>
							</span>
						</Typography>
					</ul>
					<Typography variant='h5'>Info:</Typography>
					<Typography variant='h6'>{data.info}</Typography>
				</div>
			</AccordionDetails>
		</Accordion>
	)
}

export default ObjectElement
