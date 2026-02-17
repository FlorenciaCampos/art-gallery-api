import express from "express";
import routes from "./routes/index.js";
import pool from "./database/db.js";


const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", routes);

pool.query("SELECT NOW()")
  .then(res => {
    console.log("DB connected at:", res.rows[0].now);
  })
  .catch(err => {
    console.error("DB connection error:", err);
  });

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
