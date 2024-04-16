import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  // Get all modules
  app.get("/api/courses/modules", async (req, res) => {
    try {
      const modules = await dao.findAllModules();
      res.json(modules);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch modules" });
    }
  });

  // Get a specific module by ID
  app.get("/api/courses/:id/modules", async (req, res) => {
    const { id } = req.params;
    try {
      const module = await dao.findModuleByCourseId(id);
      if (module) {
        res.json(module);
      } else {
        res.status(404).json({ error: "Module not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch module" });
    }
  });

  // Create a new module for a specific course
  app.post("/api/courses/:id/modules", async (req, res) => {
    const { id } = req.params;
    const module = {
      ...req.body,
      course: id, // Assign the courseId directly to the module object
    };

    delete module._id;
    console.log("Create module moduleobject: ", module);

    try {
      const newModule = await dao.createModule(module);
      res.status(201).json(newModule);
    } catch (error) {
      res.status(500).json({ error: "Failed to create module" });
    }
  });

  // Update a module
  app.put("/api/modules/:id", async (req, res) => {
    const { id } = req.params;
    const module = req.body;
    delete module._id;
    try {
      console.log("updateModule params;; module then id:", module, id);

      const updatedModule = await dao.updateModule(id, module);

      console.log("Update module updatedmodule object: ", updatedModule);

      if (updatedModule.modifiedCount > 0) {
        res.json({ message: "Module updated successfully" });
      } else {
        res.status(404).json({ error: "Module not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to update module" });
    }
  });

  // Delete a module
  app.delete("/api/modules/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deletedModule = await dao.deleteModule(id);
      if (deletedModule.deletedCount > 0) {
        res.json({ message: "Module deleted successfully" });
      } else {
        res.status(404).json({ error: "Module not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete module" });
    }
  });
}
