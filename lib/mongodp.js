import mongoose from "mongoose";

export const connectMongoDp = async () => {
  try {
    await mongoose.connect(process.env.MONGODP_URL);
    console.log("connected succefully");
  } catch (error) {
    console.log("error occured:", error);
  }
};
