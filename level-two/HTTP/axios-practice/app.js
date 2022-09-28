// Get All

axios.get("https://api.vschool.io/mollymoosebinx/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++) {
            const h1 = document.createElement('h1');
            h1.textContent = response.data[i].title;
            document.body.appendChild(h1);
            const deleteButton = document.createElement('button');
            deleteButton.textContent = "Completed";
            deleteButton.setAttribute('id',"deleteButton");
            h1.appendChild(deleteButton);
        }
    })
    .catch(error => console.log(error.data))

// // Get One

//     axios.get("https://api.vschool.io/mollymoosebinx/todo/1")
//         .then(response => {
//             for(let i = 0; i < response.data.length; i++) {
//                 const h1 = document.createElement('h1');
//                 h1.textContent = response.data[i].title;
//                 document.body.appendChild(h1);
//             }
//         })
//         .catch(error => console.log(error.data))

//POST

const toDoform = document.toDoform;

toDoform.addEventListener("submit", function(e){
    e.preventDefault()
    const newTodo = {
        title: toDoform.title.value,
        description: toDoform.description.value,
        imgUrl: toDoform.imgUrl.value
    }

    axios.post("https://api.vschool.io/mollymoosebinx/todo", newTodo)
        .then(response => console.log(response.data.title))
        .catch(error => console.log(error.data.title))
});

//DELETE

    // deleteButton.addEventListener("click" , function(e) {
    //     axios.get("https://api.vschool.io/mollymoosebinx/todo/1")
    //         .then(res => console.log(res.data))
    //         .catch(err => console.log(err.data))
    // })

//PUT



    