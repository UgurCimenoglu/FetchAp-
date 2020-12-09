const profile = new Profile();
const ui = new UI();


const searchProfile = document.querySelector('#searchProfile');


searchProfile.addEventListener('keyup' , (event) =>{
    let text = event.target.value;
    ui.clear();

    if(text !== ''){
    
        profile.getProfile(text)
        .then(res => {
            if(res.profile.length === 0 ){
                ui.userNotFound(text);
            }else{
                ui.showProfile(res.profile[0]);
                ui.showTodo(res.todo)
            }

        })
        .catch(err => ui.userNotFound(text))
        
    }
}) 