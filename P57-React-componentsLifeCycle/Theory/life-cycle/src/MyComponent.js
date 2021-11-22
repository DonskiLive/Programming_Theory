import React from 'react'

export default class MyComponent extends React.Component {
    state = {
        title: 'Old title',
        loading: true,
        todos: []

    }

    constructor(props) {
        super(props)
        console.log('Constructor')
    }

    componentDidMount() {
        console.log('componentDidMount')
        setTimeout(() => {
            //this.setState({title: 'New title'})
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(data => this.setState({ ...this.state, loading: false, todos: [...data] }))
        }, 2000)

    }

    static getDerivedStateFromProps(nextProps, nextState) {
        console.log('getDerivedStateFromProps', nextProps, nextState);
        return nextState
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate', prevProps, prevState);
        return prevState
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('coponentDidUpdate', prevProps, prevState)
    }

    componentWillUnmount() {
        console.log('component will unmount')
    }

    render() {
        console.log('Render')
        return (
            <>
                {this.state.loading ?
                    <div>loading...</div> :
                    <ul>
                        {this.state.todos.map((todo, i) => <li key={i}>{todo.title}</li>)}
                    </ul>
                }
            </>
        )
    }
}