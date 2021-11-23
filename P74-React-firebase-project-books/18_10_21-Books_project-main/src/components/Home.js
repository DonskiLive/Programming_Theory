import { useDispatch } from 'react-redux'
import { clearError } from '../store/app/authReducer'
import { resetError } from '../store/books/booksReducer'

const Home = ()=>{
    const dispatch = useDispatch()
    dispatch(resetError())
    dispatch(clearError())
    return(
        <div className = 'container-fluid' style = {{backgroundImage: 'url(https://oir.mobi/uploads/posts/2021-01/1611955250_44-p-krasivii-fon-s-knigami-dlya-prezentatsii-47.jpg)', minHeight: '500px', height: 'calc(100vh - 57px)', backgroundRepeat:'none', backgroundSize: 'cover', paddingTop:"100px"}}>
            <div className="container" >
            <h2 className = 'text-dark w-50 p-2' style ={{fontSize: '45px', fontFamily: "'Lobster', cursive", textAlign: 'center'}}>Take a break...</h2>
            <h1 className = 'my-2 text-dark w-50 p-2' style ={{fontSize: '60px', fontFamily: "'Lobster', cursive", textAlign: 'center'}}>Our library will help you do this! <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-emoji-wink" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm1.757-.437a.5.5 0 0 1 .68.194.934.934 0 0 0 .813.493c.339 0 .645-.19.813-.493a.5.5 0 1 1 .874.486A1.934 1.934 0 0 1 10.25 7.75c-.73 0-1.356-.412-1.687-1.007a.5.5 0 0 1 .194-.68z"/>
</svg></h1> 
            <h2 className = 'text-dark w-50 p-2' style ={{fontSize: '45px', fontFamily: "'Lobster', cursive", textAlign: 'center'}}>allow yourself to expand your knowledge</h2>
        </div>
        </div>
    )
}

export default Home;