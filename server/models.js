import mongoose from 'mongoose'; 
import { nanoid } from 'nanoid';

const d = new Date();

const courseSchema = new mongoose.Schema({ 
    courseId : { 
        type: String,
        required: true,
        default: () => nanoid(7),
        index: { unique: true },
    },
    name : { 
        type: String, 
        required: true,
        unique: true
    }, 
    madeBy: {
        type: String, 
        required: true , 
        ref: 'User'
    },
    price : {
        type: String, 
        required: true
    },
    createdAt : {
        type: String,
        required: true,
        default: d.toLocaleDateString()
    },
    deadline : { 
        type: String, 
        required: true
    }
})

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true ,
        unique: true
    }
})

export const Courses = mongoose.model('Course', courseSchema);
export const Users = mongoose.model('User', userSchema);