import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const InputField = withStyles(theme => ({
	root: {
		width: '20%',
		'& label': {
			color: theme.palette.secondary.main,
		},
		'& label.Mui-focused': {
			color: theme.palette.secondary.main,
			fontSize: '12px',
		},
		'& input': {
			color: theme.palette.secondary.main,
		},

		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: theme.palette.primary.main,
			},
			'&:hover fieldset': {
				borderColor: theme.palette.primary.main,
			},
		},
	},
}))(TextField)

interface inputProps {
	name: string
	type?: string
	id: string
	defaultValue?: string
	placeholder?: string
	onChange?: (value: { target: { name: string; value: string } }) => void
}

const Input: React.FC<inputProps> = ({
	name,
	type = 'text',
	id,
	defaultValue,
	placeholder,
	onChange,
}) => {
	return (
		<InputField
			variant='outlined'
			id={id}
			type={type}
			name={name}
			value={defaultValue}
			label={placeholder}
			size='small'
			onChange={onChange}
		/>
	)
}

export default Input
