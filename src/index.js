require('dotenv').config()
const cors = require('cors')
const express = require('express')

const { models, sequelize } = require('./models')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  req.context = {
    models
  }
  next()
})

app.use('/files', routes.file)

sequelize.sync({ force: true }).then(async () => {
  seedDb()
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
  )
})

const seedDb = async () => {
  await models.File.create({
    id: 1,
    name: "history"
  })
  console.log("Seeding complete!")
}
