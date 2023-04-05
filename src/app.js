import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import taskRoutes from "./routes/index.routes.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { engine } from "express-handlebars";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static(path.join(__dirname, "public")));
app.engine("handlebars", engine());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");

app.use("/", taskRoutes);

app.use((req, res, next) => {
  res.status(404).send("Pagina no encontrada");
});

export default app;
