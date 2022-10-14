// const { default: axios } = require("axios")

// const { default: axios } = require("axios")

           
const deleteRequest = function(e) {
    axios.delete('https://api.vschool.io/mollymoosebinx/todo/${response.data._id}')
        .then(response => console.log(response.data))
        .catch(error => console.log(error.data))
}

const completeRequest = function(e) {
    if (this.checked) {
        axios.put('https://api.vschool.io/mollymoosebinx/todo/${response.data._id}', {completed})
            .then(response => {
                "completed"; true
             title.textContent = strike()
        })
        .catch(error => console.log(error.data))
      } else {
        console.log("Checkbox is not checked..");
      }
    
}

// Get All

function getData() {
    axios.get("https://api.vschool.io/mollymoosebinx/todo")
        .then(response => {
            for(let i = 0; i < response.data.length; i++) {
                const title = document.createElement('h3')
                title.textContent = response.data[i].title
                document.body.appendChild(title)
                const description = document.createElement('h6')
                description.textContent = response.data[i].description
                document.body.appendChild(description)
                const price = document.createElement('h6')
                price.textContent = response.data[i].price
                document.body.appendChild(price)
                const imgUrl = document.createElement('h6')
                imgUrl.textContent = response.data[i].imgUrl
                document.body.appendChild(imgUrl)
                const completeButton = document.createElement('input')
                completeButton.type = "checkbox"
                completeButton.addEventListener("change", completeRequest)
                document.body.appendChild(completeButton)
                const deleteButton = document.createElement('button')
                deleteButton.textContent = "DELETE"
                deleteButton.addEventListener("click" , deleteRequest)
                document.body.appendChild(deleteButton)
            }
        })
        .catch(error => console.log(error.data))
    }

    getData()

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
        price: toDoform.price.value,
        description: toDoform.description.value,
        imgUrl: toDoform.imgUrl.value,
        completed: false
    }
    toDoform.title.value = ""
    toDoform.price.value = ""
    toDoform.description.value = ""
    toDoform.imgUrl.value = ""

    axios.post("https://api.vschool.io/mollymoosebinx/todo", newTodo)
        .then(response => {
            getData()
        })
        .catch(error => console.log(error.data.title))
});



    