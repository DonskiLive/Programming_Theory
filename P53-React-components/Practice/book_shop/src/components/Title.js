export default function Title({title}){
	return (
		<h1 className='main-title'>{title ?? 'Library'}</h1>
	)
}