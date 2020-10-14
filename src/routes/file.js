const router = require('express').Router()

router.get('/', (req, res) => {
  res.send(Object.values(req.context.models.files))
})

router.get('/:fileId', (req, res) => {
  res.send(req.context.models.files[req.params.fileId])
})

router.post('/', (req, res) => {
  const file = {
    id: req.body.id,
    name: req.body.name
  }
  req.context.models.files[file.id] = file
  res.send(file)
})

router.put('/:fileId', (req, res) => {
  res.send("to be implemented");
})

router.delete('/:fileId', (req, res) => {
  const {
    [req.params.fileId]: file,
    ...body
  } = req.context.models.files
  req.context.models.files = body
  res.send(file)
})

module.exports = router
