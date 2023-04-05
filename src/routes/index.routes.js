import { Router } from "express";
import {
  renderTasks,
  renderTaskEdit,
  createTask,
  deleteTask,
  updateTask,
  taskToggleDone,
} from "../controllers/tasks.controllers.js";

const router = Router();

router.get("/", renderTasks);
router.get("/:id/update", renderTaskEdit);
router.post("/add", createTask);
router.post("/:id/update", updateTask);
router.get("/:id/delete", deleteTask);
router.get("/:id/toggleDone", taskToggleDone);

export default router;
