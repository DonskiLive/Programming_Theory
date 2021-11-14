export default function formValidation(form, showMessage){
    let hasError = false;
    console.log('validation')
     for(let element of form){
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
         showMessage(false, 'All fields schould be fill!!!')
     }
     return hasError;
}



