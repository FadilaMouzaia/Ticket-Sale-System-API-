const {Router}= require("express")
const express = require("express")
const router = express.Router()

const {getTickets, 
    getTicket,
    setTickets,
    updateTicket, 
    deleteTicket 
} = require("../controllers/ticketscontroller.js")

// router.get('/',getTickets)
// router.get('/:id',getTicket)
// router.post('/',setTickets)
// router.put('/:id',updateTicket)
// router.delete('/:id',deleteTicket)

router.route("/")
   .get(getTickets)
   .post(setTickets)

router.route("/:id")
   .get(getTicket)
   .put(updateTicket)
   .delete(deleteTicket)

module.exports = router