import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Successfully connected to MongoDB✅`);
  } catch (error) {
    console.error(`ERROR: ${error.mongoose}`);
    process.exit(1);
  }
};

export default connectDB;
