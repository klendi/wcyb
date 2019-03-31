import mongoose from 'mongoose'
const Schema = mongoose.Schema

const itemSchema = new Schema({
  name: String,
  price: Number,
  image: String
})

export default mongoose.model('Item', itemSchema)
