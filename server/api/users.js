const router = require('express').Router()
const User = require('../db')
module.exports = router

router.param('id', async (req, res, next, id) => {
  try {
    const user = await User.findByPK(id)
    if (!user) res.sendStatus(404)
    req.requestedUser = user
    next()
    return null
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
    try {
      const users = await User.findAll()
      res.send(users)
    } catch (err) {
      next(err)
    }
  })

  router.get('/:id', async (req, res, next) => {
    try {
      const user = await req.requestedUser
      if (user) {
        res.json(user)
      } else {
        res.sendStatus(404)
      }
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