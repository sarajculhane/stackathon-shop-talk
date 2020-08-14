const router = require('express').Router()
const User = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
    try {
      const users = await User.findAll()
      res.send(users)
    } catch (err) {
      next(err)
    }
  })


router.post('/', async (req, res, next) => {
    try {
      const user = await User.create(req.body)
      res.status(201).json(user)
    } catch (err) {
      next(err)
    }
  })