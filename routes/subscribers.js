const express = require('express')
const router = express.Router()


//Getting all
router.get('/', (req, res) => {
    res.send('hello world')
})
//Getting one 
router.get('/:id', (req, res) => {
  res.send(req.params.id)
})
//Creating one
router.post('/', (req, res) => {
  
})
//Updating one
router.patch('/', (req, res) => {
  
})
//Deleting one
router.delete('/:id', (req, res) => {
  
})

module.exports = router