import '../css/Button.css'

const Button = ({clickHandler})=>{
	return(
		<button className="buttons" onClick ={clickHandler}>put into cart</button>
	)
}
export default Button