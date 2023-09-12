const express = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid')

app.use(express.json())

const raceEntrys = [
  {
      fName: "John",
      lName: "Smith",
      lapTime: "15:15",
      _id: uuidv4()
  },
  {
      fName: "Melissa",
      lName: "Weirick",
      lapTime: "10:20",
      _id: uuidv4()
  }
]

app.use("/raceEntrys", (req, res, next) => {
  console.log("These are the entries")
  next()
})

app.get('/raceEntrys', (req, res, next) => {
    console.log("Melissa Pulled into 1st place")
    res.send("The Winner is Melissa")
})


// raceEntryRouter.get("/:{parameter of object above}", requireJsonContent, (req, res, next) => {

// })

// raceEntryRouter.get("/search/{parameter of object above}", requireJsonContent, (req, res, next) => {

// })

// app.get('/', requireJsonContent, (req, res, next) => {
//     console.log("Melissa's new time is 9:00 Miles")
//     res.send("She is the winner")
// })

// app.put('/:raceEntryID', requireJsonContent, (req, res, next) => {
//     const raceEntryID = req.params.raceEntryID
//     const raceEntryIndex = raceEntrys.findIndex(raceEntry => raceEntry._id === raceEntryID)
//     const updatedRaceEntry = Object.assign(raceEntrys[raceEntryIndex], req.body)
//     res.send(updatedRaceEntry)
// })
// app.delete('/:raceEntryID', requireJsonContent, (req, res, next) => {
//     const raceEntryID = req.params.raceEntryID
//     const raceEntryIndex = raceEntrys.findIndex(raceEntry => raceEntry._id === raceEntryID)
//     raceEntrys.splice(raceEntryIndex, 1)
//     res.send("successfully deleted race entry")
// })
  

app.listen(8997, () => {
    console.log("The Server is running in Port 8997")
})