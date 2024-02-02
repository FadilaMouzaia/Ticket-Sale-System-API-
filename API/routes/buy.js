const express = require('express')
const router = express.Router()
const {getTicketBuy, 
    setTicketBuy
} = require("../controllers/buycontroller.js")


router.route('/:id')
      .get(getTicketBuy)
      .post(setTicketBuy)


module.exports = router