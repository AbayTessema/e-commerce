import mongoose from 'mongoose';
const connectDB=async()=>{
    try {
        await mongoose.connect('mongodb+srv://AbayTessema:48Yh1RYV7u46S5uQ@cluster0.uuzy7pb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster07')
    console.log('DB connected successfully!')
        
    } catch (error) {
        console.error('DB connection error')
    }
    
}

export default connectDB;
