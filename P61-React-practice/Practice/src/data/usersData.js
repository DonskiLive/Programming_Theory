export const getUsers =()=>{
    const users = JSON.parse(localStorage.getItem('users'))
    return users ? users : []
}

export const setUsersToLocalStorage = (users) => localStorage.setItem('users', JSON.stringify(users))

export const setCurrentUserLocalStorage = (id) =>{
    localStorage.setItem('currentUserId', JSON.stringify(id))
}

export const getCurrentUserId = ()=>{
   return JSON.parse(localStorage.getItem('currentUserId'))
}

export const resetCurrentUser = ()=>{
    localStorage.removeItem('currentUserId')
}

export const login = (currentUser) =>{
    const user = getUsers().find(u => u.email === currentUser.email)
    return user ? (user.password === currentUser.password ? user.id : null) : null
}