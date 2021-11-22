import { useState, useContext } from 'react'
import { AppContext } from '../App'

const Album = ({ album }) => {
    const { addNewPhoto, currentAlbumPhotos, setCurrentAlbumLocalStorage, deleteAlbum } = useContext(AppContext)
    const [photo, setPhoto] = useState({
        title: '',
        cover: '',
        like: 0,
        dislike: 0
    })

    const changeFieldHandler = event => {
        setPhoto({ ...photo, [event.target.name]: event.target.value })
    }

    return (
        <div className="card col-6 col-sm-4 col-md-3 text-center p-3 m-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-file-earmark-x" viewBox="0 0 16 16" className="bi bi-gear position-absolute" data-id={album.id} onClick = {(e) => { /* setCurrentAlbumLocalStorage(e.target.dataset.id); */ deleteAlbum(e.target.dataset.id)}} style={{top: "5px", right: "5px", cursor: "pointer"}}>
  <path d="M6.854 7.146a.5.5 0 1 0-.708.708L7.293 9l-1.147 1.146a.5.5 0 0 0 .708.708L8 9.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 9l1.147-1.146a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146z"/>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
</svg>
            <img src={album.cover} className="card-img-top" alt="..." />
            <h5 className="card-title">{album.title}</h5>
            <h6>{currentAlbumPhotos(album.id).length ? `contains ${currentAlbumPhotos(album.id).length} photo` : 'is empty'}</h6>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id={album.id}
                onClick={(e) => { setCurrentAlbumLocalStorage(e.target.dataset.id) }
                }>
                add new photo
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Save your new photo in album</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setPhoto({ ...photo, title: '', cover: '' })}></button>
                        </div>
                        <div className="modal-body">
                            <input
                                className="form-control my-3"
                                type="text"
                                name="title"
                                placeholder="Type photo title"
                                value={photo.title}
                                onChange={changeFieldHandler}
                            />
                            <input
                                className="form-control my-3"
                                type="text"
                                name="cover"
                                placeholder="Type photo src"
                                value={photo.cover}
                                onChange={changeFieldHandler}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-id={album.id} data-bs-dismiss="modal"
                                onClick={() => {
                                    addNewPhoto(photo)
                                    setPhoto({ ...photo, title: '', cover: '' })
                                }}>add photo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Album