import express from "express";
import cors from "cors";
import userroutes from "./routes/userroutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(userroutes);

app.listen(5000, () => console.log("Server running...."));
