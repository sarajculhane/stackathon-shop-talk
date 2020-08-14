const router = require('express').Router()
const {User} = require('../db')
module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({where: {username: req.body.username})
    if (!user) {
      console.log('No such user found:', req.body.username)
      res.status(401).send('Wrong username and/or password')
    } else if (user.password !== req.body.password) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
        console.log('success')
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})