import mongoose from "mongoose";

const MongoURI = process.env.MONGO_URL;
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
