import { Route, Switch } from 'react-router-dom';
import React, {useState} from 'react';
import Navigation from './components/Navigation';
import Users from './components/Users';
import Albums from './components/Albums';
import Home from './components/Home';
import {getUsers, getCurrentUserId, setCurrentUserLocalStorage, setUsersToLocalStorage, login, resetCurrentUser} from './data/usersData';
import Registration from './components/Registration';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import { getAlbums, setAlbumsToLocalStorage } from './data/albumsData';
import { getPhotos, setPhotosToLocalStorage } from './data/photosData';
import AlbumPhotos from './components/AlbumPhotos';

export const AppContext = React.createContext()

function App() {
  const [users, setUsers] = useState(getUsers());
  const [currentUser, setCurrentUser] = useState(getCurrentUserId());
  //const [error, setError] = useState (null)

  const addUser = (user)=>{
    const isUserExist = users.some(u => u.email === user.email)
    if(!isUserExist){
    const newUser = {...user, id: Date.now()}
    const newUsersArray = [...users, newUser]
    setUsers(newUsersArray)
    setUsersToLocalStorage(newUsersArray)
    setCurrentUser(newUser.id)
    setCurrentUserLocalStorage(newUser.id)
    return true
    }
    return false
  }

  const changeCurrentUser = (currentUser) =>{
    const idUser = login(currentUser)
    if(idUser){
      setCurrentUser(idUser);
      setCurrentUserLocalStorage(idUser)
      return true
    }
      return false
  }

  const getCurrentUser = ()=>{
    return users.find(user => user.id === currentUser)
  }

  const getUserNameById = (id)=>{
    return users.find(user => +user.id === id).fName
  }

  const logout = ()=>{
    setCurrentUser(null)
    resetCurrentUser()
  }

  const updateUser = user =>{
    const newUsers = [...users]
    const index = users.indexOf(getCurrentUser()) // users.findIndex(u => u.id === user.id)
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
    return albums.filter(album => album.userId === currentUser)
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

  const addEvalution = (id, key)=>{  //(123, 'like')  // (123, 'dislike')
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
      users,
      addUser,
      changeCurrentUser,
      currentUser,
      getUserNameById,
      logout,
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
      <Switch>
        <Route exact path = "/album/:id/:author" component = {AlbumPhotos} />
        <Route exact path = "/user/:id" component = {UserProfile}/>     
        <Route path ="/users" component ={Users} /> 
        <Route path ="/albums/user/:id" component = {Albums} />
        <Route path ="/albums" component ={Albums} />
        <Route path ="/login" component = {Login} />
        <Route path = "/registration" component = {Registration} />
        <Route path ="/" component ={Home} />
      </Switch>
    </AppContext.Provider>
  );
}

export default App;
