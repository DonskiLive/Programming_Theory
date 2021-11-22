import React, {useState} from 'react';
import Navigation from './components/Navigation';
import {getUsers, getCurrentUser, setUsersToLocalStorage} from './data/usersData';
import { getAlbums, setAlbumsToLocalStorage } from './data/albumsData';
import { getPhotos, setPhotosToLocalStorage } from './data/photosData';
import Page from './components/Page';
import { connect } from 'react-redux'

export const AppContext = React.createContext()

function App({currentUser, allUsers}) {
  const [users, setUsers] = useState(getUsers());

  const getUserNameById = (id)=>{
    return allUsers.find(user => +user.id === id).fName
  }

  const updateUser = user =>{
    const newUsers = [...users]
    const index = users.indexOf(getCurrentUser())
    newUsers[index] = user
    setUsers(newUsers)
    setUsersToLocalStorage(newUsers)
  }

  const [albums, setAlbums] = useState(getAlbums());

  const addNewAlbum = album =>{
    const newAlbums = [...albums, {...album, id:Date.now()}]
    setAlbums(newAlbums)
    setAlbumsToLocalStorage(newAlbums)
  }

  const currentUserAlbums = ()=>{
    return albums.filter(album => album.userId === currentUser.id)
  }

  const getAlbumTitleById =(id) =>{
    return albums.find(album => album.id === +id).title
  }

  const [photos, setPhotos] = useState(getPhotos())

  const addNewPhoto = photo =>{
    const newPhotos = [...photos, {...photo, id:Date.now(), like:0, dislike:0}]
    setPhotos(newPhotos)
    setPhotosToLocalStorage(newPhotos)
  }

  const addEvalution = (id, key)=>{ 
      const newPhotos = [...photos]
      const index = photos.findIndex(photo => photo.id === id)
      newPhotos[index][key]++
      setPhotos(newPhotos)
      setPhotosToLocalStorage(newPhotos)
  }

  const getCountPhotoByAlbumId = (id)=>{
    return photos.filter(photo => photo.albumId === id).length
  }

  return (
    <AppContext.Provider value = {{
      getUserNameById,
      getCurrentUser,
      updateUser,
      addNewAlbum,
      currentUserAlbums,
      addNewPhoto,
      photos,
      albums,
      getAlbumTitleById,
      addEvalution, 
      getCountPhotoByAlbumId
    }} >
      <Navigation />
      <Page/>
    </AppContext.Provider>
  );
}

const mapStateToProps = ({ usersReducer }) => {
  return {
      currentUser: usersReducer.currentUser,
      allUsers: usersReducer.users
  }
}

export default connect(mapStateToProps)(App)
