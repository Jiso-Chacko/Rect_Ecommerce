import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const connect = await mongoose.createConnection(process.env.MONGO_URI).asPromise()
        console.log(`Mongoose connected : ${connect.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error: ${error}`.red.underline);
        process.exit(1)
    }
}

export default connectDB