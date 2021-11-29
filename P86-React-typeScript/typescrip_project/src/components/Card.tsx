import React, { FC, useState } from 'react';

export enum CardVariant {
	outlined = 'outlined',
	primary = 'primary',
}

interface CardProps { // interface - to describe which props will wait component Card
	width?: string; // if you want to make parameters not required then after key write ?: width?: string
	height?: string;
	variant: CardVariant;
	onClick: (num: number) => void; // if function must return number, than onClick: ()=> number, if string onClick: ()=> string
}

const Card: FC<CardProps> = ({ width, height, variant, children, onClick }) => {
	const [state, setState] = useState<number>(0)
	return (
		<div style={{
			width, height,
			border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
			background: variant === CardVariant.primary ? 'lightgray' : ''
		}}
			onClick={() => { onClick(state); setState(state + 1) }}
		>
			{children}
			<button onClick={(e) => { e.stopPropagation(); setState(0); console.log('count = 0') }}>Reset</button>
		</div>
	)
}

/* interface CardProps{ 
	width?: string; 
	height?: string;
	children?: React.ReactChild | React.ReactNode
}

const Card = ({width, height, children}: CardProps) =>{
  return (
	<div style={{width, height, border: '1px solid gray'}}>
	  {children}
	</div>
  )
} */

export default Card;