import mongoose from 'mongoose'

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    media: {
        type: Number,
        required: true
        /*validate(value) {
            if (value < 0 || value > 10) {
                throw new Error('DATABASE ERROR, MEDIA NOT ACCEPTABLE')
            }
        }*/
    }
})

export const Student = mongoose.model('Student', StudentSchema)