import mongoose from 'mongoose';
import dotenv from 'dotenv';
const lb = dotenv.config();
const db = process.env.MY_MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log('MogoDB Connected..');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
