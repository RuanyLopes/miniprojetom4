import express from "express";
import { cursos } from "../data/cursos.js";

const router = express.Router();

router.get("/cursos", (req, res) => {
  res.json(cursos);
});

export default router;
