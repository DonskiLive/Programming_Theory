import { useDispatch } from 'react-redux'
import { addTodoAction } from '../todo_store/todoReducer/TodoReducer';
import { useState } from 'react';
import { storage } from '../config/firebase-config';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


const Header = () => {
    const [input, setInput] = useState('')
    const[fileUrl, setFileUrl] = useState(null)
    const dispatch = useDispatch()

    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const fileName = (Date.now()%1000)+'_'+ file.name
        console.log(fileName)
        const imagesRef = ref(storage, fileName);
        const metadata = {
            contentType: 'image/jpeg',
          };
        await uploadBytes(imagesRef, file, metadata)
        const url = await getDownloadURL(imagesRef);
        console.log(url)
        setFileUrl(url);

    }

    return (
        <form className='row mx-0' action='#'
            onSubmit={e => {
                e.preventDefault();
                console.log(fileUrl)
                dispatch(addTodoAction(input, localStorage.getItem('USER_ID'), fileUrl));
                setInput('')
                document.querySelector('#formFile').value = ''
                setFileUrl('')

            }}>
            <input type='text' className='my-5' name='text' placeholder="Type todo"
                value={input}
                onChange={e => setInput(e.target.value)} />            
            <button type='submit' disabled={fileUrl ? false : true}>Add todo</button>
            <h5 className='text-start p-0 m-0 text-secondary'>load image to your todo item</h5>
            <div className="my-3 px-0">
                <input className="form-control" type="file" id="formFile" 
                        onChange = {onFileChange}/>
            </div>
        </form>
    )
}


export default Header

/* const storageRef = fb.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        setFileUrl(await fileRef.getDownloadURL()); */