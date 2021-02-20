import React from 'react'
import Button from '@material-ui/core/Button'

interface inputProps {
	action: (value: React.MouseEvent<HTMLElement>) => void
	text: string
	style?: string
	id?: string
}

const CostumButtom: React.FC<inputProps> = ({ action, style, text, id }) => {
	return (
		<Button onClick={action} className={style} id={id}>
			{text}
		</Button>
	)
}

export default CostumButtom
