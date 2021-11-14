export default function renderLogin(){
    return`
    <form name = "loginForm" action="#">
       <input
         id="login"
         class="form-control"
         type="text"
         name="login"
         placeholder="Type login"
       />
       <input
         id="password"
         class="form-control"
         type="text" 
         name="password"
         placeholder="Type password"
       />
       <div class="buttons">
       <button id ="login-btn" class="add-btn">login</button>
       <button id = "registration-btn"class="add-btn">registration</button>
       </div>
     </form>
    `
}