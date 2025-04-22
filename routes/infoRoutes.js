import express from "express";
import { cursos } from "../data/cursos.js";
import { locaisDeDoacao } from "../data/doacoes.js";

const router = express.Router();

router.get("/info/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const curso = cursos.find((c) => c.id === id);
  const local = locaisDeDoacao.find((l) => l.id === id);

  if (curso) {
    res.json(curso);
  } else if (local) {
    res.json(local);
  } else {
    res.status(404).json({ mensagem: "ID não encontrado" });
  }
});

export default router;
