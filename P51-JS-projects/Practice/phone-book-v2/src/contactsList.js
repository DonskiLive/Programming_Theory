export default function renderContacts(array) {
    return `
        <ul class = 'list'>
         ${array.map(mapToContactRow).join('')}
         </ul>
         <div class = 'contact-view'>No selected contact</div>
    `
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
