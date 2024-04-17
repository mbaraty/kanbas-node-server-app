import mongoose from "mongoose";
import moduleSchema from "./schema.js";
const modulesModel = mongoose.model("Module", moduleSchema);
export default modulesModel;