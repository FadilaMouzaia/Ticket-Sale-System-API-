const asyncHandler = require("express-async-handler")
const Tickets = require("../Models/ticketsModel.js")
const clients = require("../Models/clientsModel.js")

let counter = 0

const getTicketBuy=asyncHandler( async (req,res)=>{
    const ticket = await Tickets.findById(req.params.id)
    if(!ticket){
        res.status(500)
        throw new Error('Tickets Not Exist')
    }

res.status(200).json(ticket)})

    
const setTicketBuy=asyncHandler( async (req,res)=>{
    const ticket = await Tickets.findById(req.params.id)
    if(ticket.currentTickets<ticket.maxTicket)
    {

    counter =ticket.currentTickets +1
    const client = await clients.create({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        ticketId:req.params.id,
        ticketNumber:counter
    })

   const updateTicketsBuy = await Tickets.findByIdAndUpdate({
    "_id":req.params.id
},   {
     $set:{"currentTickets":counter
    }
        
    
})
res.status(201).json(client)
    }else{
        res.json({
            massage: "solde out"
        })
    }
})



    module.exports = {
        getTicketBuy, 
    setTicketBuy
    }
        