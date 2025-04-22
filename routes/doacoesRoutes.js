import express from "express";
import { locaisDeDoacao } from "../data/doacoes.js";

const router = express.Router();

router.get("/doacoes", (req, res) => {
  res.json(locaisDeDoacao);
});

export default router;
