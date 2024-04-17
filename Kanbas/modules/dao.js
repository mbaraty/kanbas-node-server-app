import moduleModel from "./model.js";

// CRUD operations for modules
export const findAllModules = () => moduleModel.find();
export const findModuleById = (id) => moduleModel.findById({ id: id });
export const findModuleByCourseId = (courseId) =>
  moduleModel.find({ course: courseId });

export const createModule = (module) => moduleModel.create(module);
export const updateModule = (id, module) =>
  moduleModel.findByIdAndUpdate(id, module, { new: true });
export const deleteModule = (id) => moduleModel.deleteOne({ _id: id });
