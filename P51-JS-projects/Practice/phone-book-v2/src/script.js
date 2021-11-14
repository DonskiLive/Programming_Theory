import Contact from './Contact';
import renderAddContact from './contactForm';
import renderContacts from './contactsList';
import renderHome from './home';
import renderLogin from './login';
import navigationView from './navigation';
import Store from './store';
import formValidation from './validation';
import contactView from './viewContact';

function main(){
const root = document.querySelector('#root');

const state = {
    currentUser: null,
    location: null,
    contacts: []
}

setUp();

function setUp(){
    const currentUser = Store.getCurrentUser();
    if(!currentUser){
        navigation('home');
        return
    }
    state.currentUser = currentUser;
    state.contacts = Store.getAllContacts(currentUser);
    navigation('contacts');
}

function navigation(path) {
   if( path !== state.location){
       if(path === 'logout'){
           Store.logout();
           state.currentUser = null;
           state.contacts = [];
           state.location = 'home'
       }else{
           state.location = path
       }
   }
   app(state.location, state.contacts);
}

function app(location, contacts){
    root.innerHTML = '';
    root.append(
        navigationView(state.currentUser, location, navClickHandler )
    );
    root.append(document.createElement('hr'));
    const content = contentRender(location, contacts);
    root.append(content);
}

function navClickHandler(event){
    event.preventDefault();
    if (event.target.tagName === 'A') {
        navigation(event.target.getAttribute('href'))
    }
}

function contentRender(location, contacts){
    const div = document.createElement('div');
    switch(location){
        case 'logout':
        case 'home' :{
            div.className = 'home';
            div.innerHTML = renderHome();
            break
        }
       case 'login':{
           div.className = 'add-contact';
           div.innerHTML = renderLogin();
           div.querySelector('form').onsubmit = loginSubmitHandler;
           break
       }
       case 'contacts':{
           div.className = 'contacts';
           div.innerHTML = renderContacts(contacts);
           div.querySelector('.list').onclick = contactClickHandler;
           break
       }
       case 'add':{
           div.className = 'add-contact';
           div.innerHTML = renderAddContact();
           div.querySelector('form').onsubmit = addContactHandler
           break
       }

    }
    return div;
}


function loginSubmitHandler(e){
    e.preventDefault();
    console.log(e.submitter)
    const form = e.target;
    const email = form.login.value;
    const password = form.password.value;
    let regSuccess = true;
    if(email ==='' || password ===''){
        regSuccess = false;
        showMessage(regSuccess, 'The data is uncomplete')
    }else{
        if(e.submitter.id === 'login-btn'){
            try{
                Store.login(email, password)
            }catch(error){
                regSuccess = false
                showMessage(regSuccess, error.message)
            }finally{
                form.reset()
            }
        }if(e.submitter.id === 'registration-btn'){
            try{
                Store.registration(email, password)
            }catch(error){
                regSuccess = false;
                showMessage(regSuccess, error.message)
            }
            finally{
                form.reset()
            }
        }
    }
    if(regSuccess){
        state.currentUser = email;
        state.location = 'contacts';
        state.contacts = Store.getAllContacts(email);
        app(state.location, state.contacts)
    }

}

function addContactHandler(event){
    event.preventDefault();
    const form = event.target
    console.log(form.elements)
    if(!formValidation(form, showMessage)){
        const result = Store.addContact(state.currentUser, new Contact(
            form.name.value,
            form.phone.value,
            form.email.value,
            form.address.value,
            form.description.value
        ));
        
        if(result){
            showMessage(result, form.name.value);
            state.contacts = Store.getAllContacts(state.currentUser)
        }
    
    }
    form.reset();
}

function contactClickHandler(event) {
    let li = event.target;
    if (li.classList.contains('delete')) {
        Store.deleteContact(state.currentUser, li.dataset.index);
        state.contacts = Store.getAllContacts(state.currentUser);
        if(state.contacts.length === 0){
            localStorage.removeItem(state.currentUser)
        }
        app(state.location, state.contacts)
    } else {
        if (li.tagName !== 'LI') {
            li = event.target.parentNode
        }
        root.querySelectorAll('li').forEach((item) => item.classList.remove('item-active'));
        li.classList.add('item-active');
        const contact  = state.contacts[li.dataset.index]
        document.querySelector('.contact-view').innerHTML = contactView(contact)  
    }
}
console.log('hello!')

}
function showMessage(formIsComplit, text){
    let div = root.querySelector('.alert');
    if(!div){
        div = document.createElement('div');
        root.querySelector('.add-contact').prepend(div)
    }
    div.className = `alert ${formIsComplit ? 'alert-success' : 'alert-danger'}`;
    div.innerHTML = formIsComplit ? `Contact ${text} was added`: text
}



main();