import {connect} from 'react-redux'
import * as Actions from './../store/actionsType'

function Counter(props){
    console.log(props, 'props from component')
    return(
        <>
        <h2>Count: {props.count}</h2>
        <button onClick = {props.subCount}>-</button>
        <button onClick = {props.addCount}>+</button>
        <br/>
        <button onClick = {()=>props.addNum(15)}>Add 15</button>
        <button onClick = {()=>props.subNum(20)}>Sub 20</button>
        </>
    )
}

function mapStateToProps(state){
    console.log(state, 'state from store')
    return{
        count: state.count
    }
}

function mapDispatchToProps(dispatch){
    return{
        addCount: ()=>dispatch({type: Actions.INC}),
        subCount: ()=>dispatch({type:Actions.DEC}),
        addNum: (num) =>dispatch({type:Actions.ADD_NUM, payload:{num}}),
        subNum: (num) =>dispatch({type:Actions.SUB_NUM, payload:{num}})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)