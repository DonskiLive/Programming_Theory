export function renderAddMessageForm(userId){
    return`
    <h4>Write new message</h4>
    <form name = 'message' action = '#'>
    <input 
        id ='title' 
        class = 'form-control'
        type = 'text'
        name = 'title'
        placeholder = 'type title'
     />
     <textarea 
        id ='text' 
        class = 'form-control'
        type = 'text'
        name = 'text'
        placeholder = 'type text'
     ></textarea>
    <button class = 'add-btn' name = 'button' data-user = ${userId}>add message</button>
    </form>
    `
}