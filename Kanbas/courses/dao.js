import courseModel from "./model.js";

export const findAllCourses = () => courseModel.find();
export const findCourseById = (id) => courseModel.findById(id);
export const createCourse = (course) => courseModel.create(course);
export const updateCourse = (id, course) => courseModel.findByIdAndUpdate(id, course, { new: true });
export const deleteCourse = (id) => courseModel.findByIdAndDelete(id);