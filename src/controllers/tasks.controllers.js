import Task from "../models/Task.js";
import AppError from "../utils/appError.js";

export const renderTasks = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("index", { tasks });
};

export const createTask = async (req, res) => {
  const check = await Task.findOne({ title: req.body.title });
  if (check)
    throw new AppError(
      "Can't create. Task already exists",
      "TASK_ALREADY_EXISTS"
    );
  const task = new Task(req.body);
  await task.save();
  res.redirect("/");
};

export const renderTaskEdit = async (req, res) => {
  const task = await Task.findById(req.params.id).lean();
  console.log(req.params.id);
  res.render("updateTask", { task });
};

export const updateTask = async (req, res) => {
  const check = await Task.findOne({ title: req.body.title });
  if (check)
    throw new AppError(
      "Can't update. Task already exists",
      "TASK_ALREADY_EXISTS_UPDATE"
    );
  await Task.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
};

export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect("/");
};

export const taskToggleDone = async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
};
