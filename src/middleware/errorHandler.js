import Task from "../models/Task.js";
const errorHandler = async (err, req, res, next) => {
  if (err.name === "ValidationError") {
    const tasks = await Task.find().lean();
    return res.render("index", { tasks, error: err.message });
  }
  if (err.statusCode === "TASK_ALREADY_EXISTS") {
    const tasks = await Task.find().lean();
    return res.render("index", { tasks, error: err.message });
  }
  if (err.statusCode === "TASK_ALREADY_EXISTS_UPDATE") {
    const id = req.url.split("/").slice(1, 1);
    const task = await Task.findById(id[1]).lean();
    return res.render("updateTask", { task, error: err.message });
  }
  return res.send(`Error: ${err.message}`);
};

export default errorHandler;
