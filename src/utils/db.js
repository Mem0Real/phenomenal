import mongoose from "mongoose";

const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO);
  } catch (err) {
    throw new Error(`Connection Failed: ${err}`);
  }
};

export default connect;
