import { Router } from "express";
import {
  renderTasks,
  renderTaskEdit,
  createTask,
  deleteTask,
  updateTask,
  taskToggleDone,
} from "../controllers/tasks.controllers.js";

import validation from "../middleware/validationMiddleware.js";
import taskSchema from "../validators/taskValidator.js";

const router = Router();

router.get("/", renderTasks);
router.get("/:id/update", renderTaskEdit);
router.post("/add", validation(taskSchema), createTask);
router.post("/:id/update", validation(taskSchema), updateTask);
router.get("/:id/delete", deleteTask);
router.get("/:id/toggleDone", taskToggleDone);

export default router;
