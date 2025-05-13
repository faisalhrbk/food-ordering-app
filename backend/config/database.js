import mongoose from "mongoose";
const mongoConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
        console.log("mongo db connected successfully");
    } catch (error) {
        console.error(error);
    }
};
export default mongoConnect;