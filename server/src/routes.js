module.exports = app => {
  app.post('/register', (req, res) => {
    res.send({
      mensaje: `Hello ${req.body.email} Your user was registered`
    })
  })
}
