const express = require("express")
const toDosRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const toDos = [
    { 
        name: "finish webgility", 
        description: "import orders from shopify into quickbooks",
        imgUrl: "https://webility.ca/",
        completed: false,
        _id: uuidv4()
    },
    { 
        name: "finish qb", 
        description: "finish updating contacts and processing refunds",
        imgUrl: "https://quickbooks.intuit.com",
        completed: false,
        _id: uuidv4()
    },
    { 
        name: "Run Amazon Numbers", 
        description: "Submit the Amazon Report showing estimated fulfillment needs",
        imgUrl: "https://www.amazon.com/",
        completed: false,
        _id: uuidv4()
    }
]

toDosRouter.route("/")
    .get((req, res) => {
        res.send(toDos)
    })
    .post((req, res) => {
        const newToDos = req.body
        newToDos._id = uuidv4()
        toDos.push(newToDos)
        res.send("New task added")
    })

toDosRouter.put("/:toDosID", (req, res) => {
    const toDosID = req.params.toDosID
    const toDosIndex = toDos.findIndex(toDo => toDo._id === toDosID)
    const updatedToDos = Object.assign(toDos[toDosIndex], req.body)
    res.send(updatedToDos)
})

toDosRouter.delete("/:toDosID", (req, res, next) => {
    const toDosID = req.params.toDosID
    const toDosIndex = toDos.findIndex(toDo => toDo._id === toDosID)
    toDos.splice(toDosIndex, 1)
    res.send("successfully deleted task")
})
    

module.exports = toDosRouter