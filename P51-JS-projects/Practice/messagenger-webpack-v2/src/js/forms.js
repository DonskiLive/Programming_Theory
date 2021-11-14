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

export function renderAddCommentForm(messageId){
    return `
    <h4>To write new comment enter you name</h4>
               <form name = "userName" action = "#">
                    <input
                    id="userName"
                    class="form-control"
                    type="text"
                    name="uname"
                    placeholder="Type name"
                />
                <button class="add-btn" name = "button">send</button>
                </form>
                <form name = "comment" action = "#" class = "hide">
                    <input
                    id="message_${messageId}"
                    class="form-control"
                    type="text"
                    name="ucomment"
                    placeholder="Type comment"
                />
                <button class="add-btn" name = "button">add coment</button>
                </form>
                <h4 id="not-found-user" class = "hide">no such user!</h4>
    `
}