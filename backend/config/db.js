import mongoose, { connect } from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://azera:123johndoe123@cluster0.0ejyc.mongodb.net/foodieio"
    )
    .then(() => console.log("DB Connected"));
};
