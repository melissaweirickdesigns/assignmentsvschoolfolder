const { v4: uuidv4 } = require('uuid');

const bounty = [
    { 
        fName: "joe", 
        lName: "jones",
        living: true,
        bountyAmt: 5000,
        type: "sith",
        _id: uuidv4()
    },
    { 
        fName: "schmoe", 
        lName: "toes",
        living: false,
        bountyAmt: 4000,
        type: "jedi",
        _id: uuidv4()
    },
    { 
        fName: "foe", 
        lName: "clover",
        living: true,
        bountyAmt: 3000,
        type: "sith",
        _id: uuidv4()
    },
    { 
        fName: "hill", 
        lName: "bill",
        living: false,
        bountyAmt: 2000,
        type: "jedi",
        _id: uuidv4()
    },
    { 
        fName: "faith", 
        lName: "great",
        living: true,
        bountyAmt: 1000,
        type: "jedi",
        _id: uuidv4()
    },
]

module.exports = bounty;