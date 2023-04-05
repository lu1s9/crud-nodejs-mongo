import Task from "../models/Task.js";

export const renderTasks = async (req, res) => {
  try {
    const tasks = await Task.find().lean();
    const { error } = req.query;
    if (error) {
      return res.render("index", { tasks, error });
    }
    res.render("index", { tasks });
  } catch (error) {
    res.sendStatus(404);
  }
};

export const renderTaskEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("updateTask", { task });
  } catch (error) {
    console.log(error);
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const check = await Task.findOne({ title });
    if (check) {
      return res.redirect("/?error=" + "Task already exist");
    }

    const task = new Task({ title, description });
    await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const task = await Task.findById(id);
    task.title = title;
    task.description = description;
    await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const taskToggleDone = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(errro);
  }
};
