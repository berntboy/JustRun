import path from "path";
import express from "express";
import volleyball from "volleyball";
import cors from "cors";
import cookieParser from "cookie-parser";
import api from "./api/index.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(cors());
app.use(volleyball);

app.use("/api", api);

app.use("*", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

export default app;
