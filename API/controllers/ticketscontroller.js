const Tickets = require('../Models/ticketsModel')
const asyncHandler = require("express-async-handler")


const getTickets = asyncHandler (async (req,res)=>{
const ticket = await Tickets.find()
res.status(200).json(ticket)})



const getTicket = asyncHandler (async (req,res)=>{
    const ticket = await Tickets.findById(req.params.id)
    if(!ticket){
      res.status(500)
      throw new Error('Tickets Not Exist')
    }

res.status(200).json(ticket)})



const setTickets = asyncHandler (async(req,res)=>{
  const ticket = await Tickets.create({
    header:req.body.header,
    date:req.body.date,
    getsOpen:req.body.getsOpen,
    stadium:req.body.stadium,
    team1:req.body.team1,
    team2:req.body.team2,
    price:req.body.price,
    color:req.body.color,
    round:req.body.round,
    maxTicket:req.body.maxTicket,
    currentTicket:req.body.currentTicket,

  })
 res.status(201).json(ticket)
})

        
const updateTicket = asyncHandler (async(req,res)=>{
  const ticket = await Tickets.findById(req.params.id)
  if(!ticket){
    res.status(500)
    throw new Error('Tickets Not Exist')
  }
  const updateTicket = await Tickets.findByIdAndUpdate(req.params.id,
     req.body, {
      new: true})
      res.status(200).json(updateTicket)
  })

const deleteTicket = asyncHandler (async(req,res)=>{
  const ticket = await Tickets.findById(req.params.id)
  if(!ticket){
    res.status(500)
    throw new Error('Tickets Not Exist')
  }

   await Tickets.deleteOne()

res.status(200).json({ id:req.params.id,
        message:`Ticket id:${req.params.id} has been removed`}) 

})
    module.exports ={ 
        getTickets,
        getTicket,
        setTickets,
        updateTicket, 
        deleteTicket 
    }