import express from "express";
import morgan from "morgan";
import Login from "./Route/Login.route.js";
import Ofert from "./Route/Ofert.route.js";
import Commet from "./Route/Comment.route.js";
import publicget from "./Route/publicget.route.js";
import { authMiddleware } from "./Route/authMiddleware.js";
import cors from "cors";

const app = express();
app.use(morgan("combined"));
app.use(express.json());
app.use(cors());

app.use("/api", Login);
app.use("/api", publicget);
app.use("/api", Commet);
app.use(authMiddleware);
app.use("/api", Ofert);

app.listen(3000);
console.log(`Server on port ${3000}`);
