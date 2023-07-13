import express from "express";
import runners from "./runners";
import user from "./user";

const router = express.Router();

router.use("/runners", runners);
router.use("/user", user);

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

export default router;
