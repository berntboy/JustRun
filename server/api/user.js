import express from "express";
import { Users, Runs } from "../db/index.js";

const router = express.Router();

router.get("/userId", async (req, res, next) => {
  try {
    const id = await Users.getId(req.cookies.token);
    const runs = await Runs.findAll({
      where: {
        userId: id,
      },
    });
    res.send(runs);
  } catch (err) {
    next(err);
  }
});

router.get("/id", async (req, res, next) => {
  try {
    const id = await Users.getId(req.cookies.token);
    res.json(id);
  } catch (err) {
    next(err);
  }
});

export default router;
