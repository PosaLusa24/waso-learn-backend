const router = require('express').Router()

router.get('/', async (req, res) => {
  const files = await req.context.models.File.findAll()
  return res.send(files)
})

router.get('/:fileId', async (req, res) => {
  const file = await req.context.models.File.findByPk(req.params.fileId)
  return res.send(file)
})

router.post('/', async (req, res) => {
  const file = await req.context.models.File.create({
    id: req.body.id,
    name: req.body.name
  })
  return res.send(file)
})

router.put('/:fileId', (req, res) => {
  return res.send("to be implemented");
})

router.delete('/:fileId', (req, res) => {
  return res.send("to be implemented");
})

module.exports = router
