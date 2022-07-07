import { Router } from "express";

const router = Router();

router.post("/battle", battle);
router.get("/ranking", ranking);

export default router;
