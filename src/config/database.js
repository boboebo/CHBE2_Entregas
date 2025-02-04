import mongoose from "mongoose";

export default async function connect(uri) {
    try {
        await mongoose.connect(uri);
        console.log('Database connected');
    }
    catch (error) {
        console.log('Error connecting to the database', error);
    }
}