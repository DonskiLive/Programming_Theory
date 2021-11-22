import Types from './ActionTypes';

export const addPost = ({ title, text, author }) => {
    return {
        type: Types.add,
        payload: {
            post: {
                title,
                text,
                author,
                id: Date.now()
            }
        }
    }
}

export const removePost = (id) => {
    return {
        type: Types.remove,
        payload: {
            id
        }
    }
}

export const loadPost = () => {
    return (dispatch) => {
        dispatch({
            type: 'LOAD'
        })
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    if(response.ok){
                        return response.json()
                    }
                    throw new Error('Error')
                    })
                .then(data => {                   
                    dispatch({
                        type:'SET_DATA',
                        payload:
                        {posts:data}
                    })
                })
                .catch((error)=>{
                    dispatch({
                        type: 'ERROR',
                        payload:{error:error.message}
                    })
                })
        }, 2000)
    }
}