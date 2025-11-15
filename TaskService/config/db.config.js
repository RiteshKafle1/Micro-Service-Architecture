import mongoose from "mongoose";

const connectDb = async (dbUri) => {
  try {
    await mongoose.connect(dbUri);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error in connecting to a db",error);
  }
};
export default connectDb;
