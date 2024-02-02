const express = require('express')
const router = express.Router()
const {getclients, 
    getclient, 
    deleteclient 
} = require("../controllers/clientscontroller.js")

router.get("/",getclients)
router.route('/:id')
      .get(getclient)
      .delete(deleteclient)




module.exports = router