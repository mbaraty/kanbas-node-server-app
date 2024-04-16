import mongoose from "mongoose";

const coursesSchema = new mongoose.Schema(
  {
    _id: String,
    name: String,
    number: String,
    startDate: String,
    endDate: String,
    image: String,
  },
  { collection: "courses" }
);

export default coursesSchema;
