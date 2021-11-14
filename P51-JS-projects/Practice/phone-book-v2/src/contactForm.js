export default function renderAddContact(){
    return `
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
    </form>`

}