import { getAllContactsAction, contactsSelector, deleteContactAction } from '../store/contacts'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Delete from './../images/trash.png'


const ContactList = () => {
    const contacts = useSelector(contactsSelector);
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(getAllContactsAction())
    }, [dispatch])

    return (
        <Wrapper>
            {contacts.length === 0 && <h3>Contacts list is empty</h3>}
            <List>
                {contacts.map(contact =>
                <NavLink key={contact.id} to = {`/contacts/${contact.id}`} activeClassName = 'contactActive'>
                    <Li >
                            {contact.firstName} {contact.lastName}
                        <Image src = {Delete}
                                onClick = {(e)=>{
                                 e.preventDefault()   
                                dispatch(deleteContactAction(contact.id))
                                history.push(`/contacts`)}

                                }/>
                    </Li>
                </NavLink>    )}
            </List>
        </Wrapper>
    )
}

export default ContactList

export const Wrapper = styled.div`
    width:46%;
`
const List = styled.ul`
    list-style: none;
    padding-left:0px;
    & a{
        text-decoration: none;
        color: black;
         }
`

const Li = styled.li`
    display:flex;
    padding: 0 10px;
    justify-content: space-between;
    align-items:center;
    height: 80px;
    margin-bottom:10px;
    border-bottom: 1px solid black;
     
     &:hover{
         background-color:rgba(32,161,142,0.2);
     }
    
`

const Image = styled.img`
     width: 24px;
`
