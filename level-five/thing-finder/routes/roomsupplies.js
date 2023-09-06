const express = require("express")
const roomsuppliesRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const roomSupplies = [
    { 
        item: "Photo Album",
        genre: "book",
        _id: uuidv4()
    },
    { 
        item: "Phone",
        genre: "electronics",
        _id: uuidv4()
    },
    { 
        item: "Pencil",
        genre: "writing",
        _id: uuidv4()
    },
    { 
        item: "Teddies",
        genre: "toys",
        _id: uuidv4()
    },
    { 
        item: "Ipod",
        genre: "electronics",
        _id: uuidv4()
    },
    { 
        item: "Eyeliner",
        genre: "makeup",
        _id: uuidv4()
    },

]

    roomsuppliesRouter.get('/',(req, res) => {
        res.send(roomSupplies)
    })

    
    roomsuppliesRouter.get("/:item", (req, res) => {
        const item = req.params.item
        const foundItem = roomSupplies.find(roomSupply => roomSupply.item === item)
        res.send(foundItem)
    })

    roomsuppliesRouter.get("/search/genre",(req, res) => {
        const genre = req.query.genre
        const filteredRoomSupplies = roomSupplies.filter(roomSupply => roomSupply.genre === genre)
        res.send(filteredRoomSupplies)
    })

    roomsuppliesRouter.post('/',(req, res) => {
        const newRoomSupplies = req.body
        newRoomSupplies._id = uuidv4()
        bounty.push(newRoomSupplies)
        res.send("Room Supply added to list")
    })

    // roomSuppliesRouter.put((req, res) => {

    // })
    // roomSuppliesRouter.delete((req, res) => {

    // })}
    

module.exports = roomsuppliesRouter