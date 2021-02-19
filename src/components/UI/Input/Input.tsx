import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const InputField = withStyles({
	root: {
		width: '20%',
		'& label': {
			color: '#4c4c4c',
		},
		'& label.Mui-focused': {
			color: '#4c4c4c',
			fontSize: '12px',
		},
		'& input': {
			color: '#4c4c4c',
		},

		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: '#d5d5d5',
			},
			'&:hover fieldset': {
				borderColor: '#d5d5d5',
			},
		},
	},
})(TextField)

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
