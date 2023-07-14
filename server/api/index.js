import express from "express.js";
import runners from "./runners.js";
import user from "./user.js";

const router = express.Router();

router.use("/runners", runners);
router.use("/user", user);

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

export default router;
