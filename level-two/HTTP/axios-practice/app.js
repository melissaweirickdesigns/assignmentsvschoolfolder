// / GET REQUEST

function getData() {
    axios.get("https://api.vschool.io/mollymoosebinx/todo")
        .then(response => {
            for(let i = 0; i < response.data.length; i++) {
                const title = document.createElement('h3')
                title.textContent = response.data[i].title
                document.body.appendChild(title)
                const id = document.createElement('h6')
                id.textContent = response.data[i]._id
                document.body.appendChild(id)
                const description = document.createElement('h5')
                description.textContent = response.data[i].description
                document.body.appendChild(description)
                const price = document.createElement('h5')
                price.textContent = response.data[i].price
                document.body.appendChild(price)
                const imgUrl = document.createElement('h5')
                imgUrl.textContent = response.data[i].imgUrl
                document.body.appendChild(imgUrl)
                const completedValue = document.createElement('h5')
                completedValue.textContent = `Completed: ${response.data[i].completed}`
                document.body.appendChild(completedValue)
                const completedActionTrue = {
                    completed: true
                }
                const completeButton = document.createElement('input')
                completeButton.setAttribute("id", `completeButton${response.data[i]._id}`)
                completeButton.type = "checkbox"
                //PUT REQUEST
                const completeRequest = function(id) {
                    if (`completeButton${response.data[i]._id}.checked`) {
                        console.log(response.data[i].completed)
                        console.log(id)
                        axios.put(`https://api.vschool.io/mollymoosebinx/todo/${id}`,completedActionTrue)
                            .then(response => {
                                console.log(response.data)
                                getData()
                                window.location.reload()  
                            })
                            .catch(error => console.log(error.data))
                      } else {
                        console.log("Checkbox is not checked..");
                      }
                    }
                completeButton.addEventListener("change", () => completeRequest(response.data[i]._id))
                document.body.appendChild(completeButton)
                const deleteButton = document.createElement('button')
                deleteButton.textContent = "DELETE"
                deleteButton.setAttribute = ("id", `deleteButton${response.data[i]._id}`)
                const deleteRequest = function(id) {
                    //DELETE REQUEST
                    axios.delete(`https://api.vschool.io/mollymoosebinx/todo/${id}`)
                        .then(response => {
                            getData()
                            window.location.reload()
                        })
                        .catch(error => console.log(error.data))
                }
                deleteButton.addEventListener("click", ()=> deleteRequest(response.data[i]._id))
                document.body.appendChild(deleteButton)
            }
        })
        .catch(error => console.log(error.data))
}

    getData()

//POST REQUEST

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
            window.location.reload()
        })
        .catch(error => console.log(error.data.title))
});






