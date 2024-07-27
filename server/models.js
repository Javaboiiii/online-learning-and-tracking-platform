import mongoose from 'mongoose'; 

const d = new Date();

const courseSchema = new mongoose.Schema({ 
    name : { 
        type: String, 
        required: true,
        unique: true
    }, 
    price : {
        type: String, 
        required: true
    },
    createdBy : {
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

const Courses = mongoose.model('Course', courseSchema);

export default Courses 