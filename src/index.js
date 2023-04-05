import app from "./app.js";
import "./config/db.js";
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
