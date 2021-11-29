import React, { FC, useRef, useState } from 'react';

const EventsExample: FC = () => {
	const [value, setValue] = useState<string>('') // type of initial state: useState<string>('')
	const [isDrag, setIsDrag] = useState<boolean>(false)

	const inputRef = useRef<HTMLInputElement>(null)

	const changeHandler =(e: React.ChangeEvent<HTMLInputElement>)=>{ // in React instead of usual event used synthetic event. To see list of available fields possible to specify exact type of event: React.ChangeEvent.
		setValue(e.target.value)
	}

	const clickHandler =(e: React.MouseEvent<HTMLButtonElement>)=>{
		console.log(value)
		console.log(inputRef.current?.value) // operator optional chaining '?' (опциональная цепочка операторов)
	}

	const dragHandler =(e: React.DragEvent<HTMLDivElement>)=>{
		/* e.dataTransfer.dropEffect */
		console.log('DRAG')
	}

	const dragWithPreventHandler =(e: React.DragEvent<HTMLDivElement>)=>{
		e.preventDefault()
		setIsDrag(true)
	}

	const leaveHandler =(e: React.DragEvent<HTMLDivElement>)=>{
		e.preventDefault()
		setIsDrag(false)
	}

	const dropHandler =(e: React.DragEvent<HTMLDivElement>)=>{
		e.preventDefault()
		setIsDrag(false)
		console.log('DROP')
	}


	return (
		<div>
			<input value={value} onChange={changeHandler} type='text' placeholder="Controlled"/>
			<input ref={inputRef} type='text' placeholder="Uncontrolled"/>
			<button onClick={clickHandler}>Event example btn</button>
			<div onDrag={dragHandler} draggable style={{width: '200px', height: 200, background: 'red'}}></div>
			<div onDrop={dropHandler} 
			onDragLeave={leaveHandler} 
			onDragOver={dragWithPreventHandler}
			style={{width: '200px', height: 200, background: isDrag ? 'blue' : 'red', marginTop: '15px'}}></div>
		</div>
	)
}

export default EventsExample