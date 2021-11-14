function main(){

const contacts = [
    { name: 'John Doe', phone: '123456789', email: 'john@mail.com', address: 'Tel Aviv', desc: 'Best friend' },
    { name: 'Jack Sparrow', phone: '0987654321', email: 'jack@mail.com', address: 'Carribian Sea', desc: 'Pirate' },
    { name: 'Tony Stark', phone: '4566778', email: 'tony@stark.com', address: 'New York', desc: 'IronMen' }
];

const root = document.querySelector('#root'),
    nav = document.querySelector('.nav'),
    searchInput = nav.querySelector('.search input'),
    searchBtn = nav.querySelector('#search-btn');

let currentPageLink = document.querySelector('a[href= "contacts"]'),
    currentContactRow;

renderContacts(contacts);

nav.onclick = function (event) {
    event.preventDefault();
    if (event.target.tagName === 'A') {
        currentPageLink.classList.remove('active');
        currentPageLink = event.target;
        currentPageLink.classList.add('active');
        navigation(currentPageLink.getAttribute('href'))
    }
}

searchInput.oninput = function () {
    const filterContact = contacts.filter((item) =>
        item.name.toLowerCase().startsWith(searchInput.value.toLowerCase()));
    renderContacts(filterContact);
}

/* searchInput.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
    const name = searchInput.value.toLowerCase();
    const filterContact = contacts.filter((item) =>
    item.name.toLowerCase().startsWith(name));
    renderContacts(filterContact);
    }
}) */


searchBtn.onclick = function () {
    const city = searchInput.value.toLowerCase();
    const contactsByCity = contacts.filter(item => item.address.toLowerCase() === city);
    searchInput.value = '';
    renderContacts(contactsByCity);
}

document.body.onkeydown = function (e) {
    if (e.key === 'Enter') {
        const city = searchInput.value.toLowerCase();
        const contactsByCity = contacts.filter(item => item.address.toLowerCase() === city);
        searchInput.value = '';
        renderContacts(contactsByCity);
    }

}

function navigation(path) {
    switch (path) {
        case 'contacts':
            renderContacts(contacts);
            break;
        case 'addContact':
            renderAddContact();
            break;
        case 'registration':
            renderRegistartionForm();
            break;
    }
}

function renderContacts(array) {
    root.className = 'contacts';
    root.innerHTML = `
        <ul class = 'list'>
         ${array.map(mapToContactRow).join('')}
         </ul>
         <div class = 'contact-view'>No selected contact</div>
    `;
    root.querySelector('.list').onclick = (event)=>{
        contactClickHandler(event, array);
    }
    
}

function renderAddContact() {
    root.className = 'add-contact';
    root.innerHTML = `
    <form name = "addContactForm" action="#">  
     <input
      id="inputName"
      class="form-control"
      type="text"
      name="name"
      placeholder="Type name"
     />
     <input
      id="inputPhone"
      class="form-control"
      type="text"
      name="phone"
      placeholder="Type phone"
     />
     <input
      id="inputEmail"
      class="form-control"
      type="text"
      name="email"
      placeholder="Type email"
     />
     <input
      id="inputAddress"
      class="form-control"
      type="text"
      name="address"
      placeholder="Type address"
     />
     <textarea
     id="inputDesc"
      class="form-control"
      type="text"
      name="description"
      placeholder="Type description"
     ></textarea>
     <div class="buttons"><button class="add-btn">Add</button></div>
    </form>`;

    const form = document.forms.addContactForm;
    //console.log(form)

    form.onsubmit = formSubmitHandler;

}

function renderRegistartionForm() {
    root.innerHTML = 'registration'
}

function mapToContactRow(contact, index) {
    return `
    <li class = 'list-item' data-index = ${index}>
        <h2 class = 'title'>${contact.name}</h2>
        <h3 class = 'sub-title'>${contact.phone}</h3>
        <div class = 'delete'></div>
    </li>
    `
}

/* function contactClickHandler(event) {
    let li = event.target;
    console.log(event.target)
    if (li.classList.contains('delete')) {
        contacts.splice(li.parentNode.dataset.index, 1);
        renderContacts(contacts);
    } else {
        if (li.tagName !== 'LI') {
            li = event.target.parentNode;
        }
        if (currentContactRow) {
            currentContactRow.classList.remove('item-active')
        }
        showContact(li.dataset.index);
        currentContactRow = li;
        currentContactRow.classList.add('item-active')
    }
} */

function contactClickHandler(event, array) {
    let li = event.target;
    if (li.classList.contains('delete')) {
        array.splice(li.parentNode.dataset.index, 1)
        renderContacts(contacts)
    } else {
        if (li.tagName !== 'LI') {
            li = event.target.parentNode
        }
        if (currentContactRow) {
            currentContactRow.classList.remove('item-active')
        }
        showContact(li.dataset.index, array)
        currentContactRow = li
        currentContactRow.classList.add('item-active')
    }
}

/* function showContact(index) {
    const contact = contacts[+index];
    const contactView = root.querySelector('.contact-view');
    contactView.innerHTML = `
    <h2>${contact.name}</h2>
    <div class="contact-view-row">
      <img src="./img/technology.png" alt="" />
      <h3>${contact.phone}</h3>
     </div>
     <div class="contact-view-row">
      <img src="./img/multimedia.png" alt="" />
      <h3>${contact.email}</h3>
     </div>
     <div class="contact-view-row">
      <img src="./img/buildings.png" alt="" />
      <h3 ">${contact.address}</h3>
     </div>
     <p>${contact.desc}</p>
    `;
} */

function showContact(index, array) {
    const contact = array[+index];
    const contactView = root.querySelector('.contact-view')
    contactView.innerHTML = `
    <h2>${contact.name}</h2>
    <div class="contact-view-row">
    <img src="./img/technology.png" alt="" />
    <h3>${contact.phone}</h3>
    </div>
    <div class="contact-view-row">
    <img src="./img/multimedia.png" alt="" />
    <h3>${contact.email}</h3>
    </div>
    <div class="contact-view-row">
    <img src="./img/buildings.png" alt="" />
    <h3 ">${contact.address}</h3>
    </div>
    <p>${contact.desc}</p>
    `
}

function formSubmitHandler(event) {
    event.preventDefault();
    const form = event.target
    console.log(form.elements)
    if(!formValidation(form)){
    contacts.push({
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        address: form.address.value,
        desc: form.description.value
    });
    showSuccess(form.name.value)
    clearForm(form);
}
   

   /* currentPageLink.classList.remove('active')
    currentPageLink = document.querySelector('a[href= "contacts"]')
    currentPageLink.classList.add('active');
    navigation('contacts'); */

}

function formValidation(form){
    let hasError = false;
     for( element of form){
         if(element.localName !== 'button'){           
             if(element.value.trim() === ''){
                 element.classList.add('is-invalid');
                 hasError = true;
             }else{
                element.classList.remove('is-invalid');
             }
         }
     }
     if(hasError){
         showError('All fields schould be fill!!!')
     }
     return hasError;
}

function showError(error){
    let div = root.querySelector('.alert');
    if(!div){
        div = document.createElement('div');
        root.prepend(div)
    }
    div.className = 'alert alert-danger';
    div.innerHTML = error
}

function showSuccess(name){
    let div = root.querySelector('.alert');
    if(!div){
        div = document.createElement('div');
        root.prepend(div)
    }
    div.className = 'alert alert-success';
    div.innerHTML = `Contact ${name} was added`
}


function clearForm(form) {
    for (element of form) {
        if (element.localName !== 'button') {
            element.value = ''
        }
    }
}
}

main();