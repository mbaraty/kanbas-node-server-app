import mongoose from "mongoose";
import coursesSchema from "./schema.js";

const courseModel = mongoose.model("Course", coursesSchema);
export default courseModel;
