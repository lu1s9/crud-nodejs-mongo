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
import tryCatch from "../utils/tryCatch.js";

const router = Router();

router.post("/add", validation(taskSchema), tryCatch(createTask));
router.get("/", tryCatch(renderTasks));
router.get("/:id/update", tryCatch(renderTaskEdit));
router.post("/:id/update", validation(taskSchema), tryCatch(updateTask));
router.get("/:id/delete", tryCatch(deleteTask));
router.get("/:id/toggleDone", tryCatch(taskToggleDone));

export default router;
