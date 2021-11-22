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
import { setCurrentAlbumLocalStorage, getCurrentAlbumId, getAlbums, setAlbumsToLocalStorage } from './data/albumsData';
import { getPhotos, setPhotosToLocalStorage } from './data/photosData';

export const AppContext = React.createContext()

function App() {
  const [users, setUsers] = useState(getUsers());
  const [currentUser, setCurrentUser] = useState(getCurrentUserId());


  function save(key, data) {
    let str = localStorage.getItem(key)
		const allData = (str) ? JSON.parse(str) : []
		allData.push(data)
    localStorage.setItem(key, JSON.stringify(allData))
  }


  save('users', {avatar: "", email: "222", fName: "Tel", id: 1632320617661, lName: "Ran", password: "333"})
  save('albums', {albumId: 1632320744484,
    dislike: 0,
    id: 1632393839927,
    like: 2,
    src: "data:image/jpeg;base64,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",
    title: "brain"})
  
    save('photos', {cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJiCflOG6G1SJgWci31u3Syp2Xrsya-7uMhA&usqp=CAU",
    id: 1632320744484,
    title: "First Album",
    userId: 1632320617661,})



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
    return albums.filter(album => album.userId === currentUser)
  }

  const [photos, setPhotos] = useState(getPhotos());

  const addNewPhoto = photo =>{
    const newPhotos = [...photos, {...photo, id:Date.now(), albumId: getCurrentAlbumId()}]
    setPhotos(newPhotos)
    setPhotosToLocalStorage(newPhotos)
  }

  const currentAlbumPhotos = (albumId)=>{
    return photos.filter(photo => +photo.albumId === +albumId)
  }

  const deleteAlbum =(id)=>{
    const newAlbums = [...albums]
    const index = albums.indexOf(albums.find(album => +album.id === +id))
    newAlbums.splice(index,1)
    setAlbums(newAlbums)
    setAlbumsToLocalStorage(newAlbums)
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
      currentAlbumPhotos,
      setCurrentAlbumLocalStorage,
      deleteAlbum
    }} >
      <Navigation />
      <Switch>
        <Route path = "/user/:id" component = {UserProfile}/>     
        <Route path ="/users" component ={Users} /> 
        <Route path ="/albums" component ={Albums} />
        <Route path ="/login" component = {Login} />
        <Route path = "/registration" component = {Registration} />
        <Route path ="/" component ={Home} />
      </Switch>
    </AppContext.Provider>
  );
}

export default App;