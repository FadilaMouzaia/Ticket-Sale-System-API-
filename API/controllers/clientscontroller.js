const asyncHandler = require("express-async-handler")
const clients = require('../Models/clientsModel')


const getclients = asyncHandler ( async (req,res)=>{
    const client = await clients.find()
    if(!client){
        res.status(500)
        throw new Error('client Not Exist')
      }
   res.status(200).json(client)
})


const getclient =asyncHandler ( async (req,res)=>{
    const client = await clients.findById(req.params.id)
    if(!client){
        res.status(500)
        throw new Error('client Not Exist')
      }
   res.status(200).json(client)
 })

const deleteclient = asyncHandler( async (req,res)=>{
    const client = await clients.findById(req.params.id)
    if(!client){
        res.status(500)
        throw new Error('client Not Exist')
      }
   await client.deleteOne()
   res.status(200).json({
    "_id":req.params.id,
    message:`Remove client id ${req.params.id}`
   })
 })

module.exports = {
    getclients,
    getclient,
    deleteclient
}
    