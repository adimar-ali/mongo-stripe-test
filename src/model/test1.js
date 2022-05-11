import { Schema, model, models } from "mongoose";

const testSchema = new Schema({
    title: {
        type: String,
        required: [true, 'the title is required'],
        unique: true,
        trim: true,
        maxlength: [40, 'title cannot be more than 40 characters']
    },
    description: {
        type: String,
        required: [true, 'the discription is required'],
        unique: true,
        trim: true,
        maxlength: [200, 'discription cannot be more than 40 characters']
    }
}, {
    timestamps: true,
    versionKey: false,
})

export default models.Test1 || model('Test1',testSchema)