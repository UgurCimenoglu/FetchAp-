class UI{
    constructor(){
        this.profileContainer = document.querySelector('#profileContainer');
        this.alert = document.querySelector('#alert');
        }

        showProfile(profile){
            this.profileContainer.innerHTML = 
            `
                <div class="card card-body">
                    <div class="row"> 
                        <div class="col-md-3">
                            <a href="https://placeholder.com"><img src="https://via.placeholder.com/350x350" class="img-thumbnail"></a>
                        </div>

                        <div class="col-md-9">
                            <h4>Contact</h4>
                            <ul class="list-group">
                                <li class="list-group-item">Name : ${profile.name}</li>
                                <li class="list-group-item">Username : ${profile.username}</li>
                                <li class="list-group-item">E-mail : ${profile.email}</li>
                                <li class="list-group-item">Address : ${profile.address.street}</li>
                                <li class="list-group-item">Address : ${profile.phone}</li>
                                <li class="list-group-item">Address : ${profile.website}</li>
                                <li class="list-group-item">Address : ${profile.company.name}</li>
                            </ul>

                            <h4 class="mt-4 mb-4">Todo List</h4>
                            <ul id="todo" class="list-group">

                            </ul>
                        </div>
                    </div>
                </div>

            `;
        }


        showTodo(todo){
            let html = "";
            console.log(todo.length)
            for(let i = 0; i < todo.length; i++){

                if(todo[i].completed){

                    html += 
                    `
                        <li class="list-group-item bg-warning">${todo[i].title}</li>    
                    
                    `
                    
                }else{

                    html += 
                    `
                        <li class="list-group-item">${todo[i].title}</li>    
                    
                    `

                }


            }

            document.getElementById('todo').innerHTML = html;

        }



        userNotFound(txt){
            document.getElementById('alert').innerHTML = `${txt} is not found.`;
        }


        clear(){
            document.querySelector('#profileContainer').innerHTML = "";
            document.querySelector('#alert').innerHTML = "";

        }
    }




    