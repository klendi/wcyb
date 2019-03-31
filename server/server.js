import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
const dotenv = require('dotenv').config()

import ItemModel from './models/Item'
const uri = process.env.MONGO_URI
const PORT = process.env.PORT || 8000

const app = express()
app.use(bodyParser.json())
app.use(cors('*'))

mongoose.connect(uri, { useNewUrlParser: true }, err => {
  if (err) throw new Error(err)

  console.log('Connected to the database')
})

app.get('/price/:price', (req, res) => {
  const _price = req.params.price

  ItemModel.find({ price: { $lte: _price } }, (err, list) => {
    if (err) throw new Error(err)
    res.send(list)
  })
})

app.post('/create/item', (req, res) => {
  console.log('this ran')
  const { name, image, price } = req.body
  if (!name || !image || !price) {
    res.status(442).send({ error: 'None of the fields should be null' })
  }

  ItemModel.findOne({ name: name }, (err, doc) => {
    if (err) {
      throw new Error(err)
    }
    if (doc) {
      return res.status(422).send({ error: 'Name is in use' })
    }

    const Item = new ItemModel({
      name,
      image,
      price
    })

    Item.save((err, doc) => {
      if (err) throw new Error(err)

      res.status(200).send({ doc })
    })
  })
})

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)
})
