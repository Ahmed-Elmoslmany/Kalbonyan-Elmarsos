import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt  from 'bcryptjs'
import jwt  from 'jsonwebtoken'

const NoteSchema = new mongoose.Schema(
{
    note: {
        type: String,
        required: [true, 'Please provide note'],
        maxlength: 50,
      },
     
      status: {
        type: Boolean,
        default: false,
      },
      createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user'],
      },
    },
    { timestamps: true }
)

export default mongoose.model('Note', NoteSchema)