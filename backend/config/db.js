import mongoose from 'mongoose';
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.mongoDB_string)
    console.log('DB connected successfully!')
        
    } catch (error) {
        console.error('DB connection error')
    }
    
}

export default connectDB;