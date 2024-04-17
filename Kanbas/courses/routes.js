import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  app.get("/api/courses", async (req, res) => {
    try {
      const courses = await dao.findAllCourses();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch courses" });
    }
  });

  app.post("/api/courses", async (req, res) => {
    const course = req.body;
    try {
      const newCourse = await dao.createCourse(course);
      res.status(201).json(newCourse);
    } catch (error) {
      res.status(500).json({ error: "Failed to create course" });
    }
  });

  app.put("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const course = req.body;
    try {
      const updatedCourse = await dao.updateCourse(id, course);
      if (updatedCourse) {
        res.json(updatedCourse);
      } else {
        res.status(404).json({ error: "Course not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to update course" });
    }
  });

  app.delete("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deletedCourse = await dao.deleteCourse(id);
      if (deletedCourse) {
        res.sendStatus(204);
      } else {
        res.status(404).json({ error: "Course not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete course" });
    }
  });

  app.get("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const course = await dao.findCourseById(id);
      if (course) {
        res.json(course);
      } else {
        res.status(404).json({ error: "Course not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch course" });
    }
  });
}