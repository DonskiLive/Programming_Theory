export default function contactView(contact){
    return `
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
    <p>${contact.description}</p>
    `
}

