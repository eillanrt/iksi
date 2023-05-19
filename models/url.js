import mongoose, { Schema } from 'mongoose'

const URLSchema = new Schema(
  {
    original_url: {
      required: true,
      type: String,
    },
    short_url: {
      required: true,
      type: String,
    },
    number_of_visits: {
      required: true,
      type: Number,
    },
  },
  { timestamps: true }
)

export default mongoose.model('URLSchema', URLSchema, 'URLS')
