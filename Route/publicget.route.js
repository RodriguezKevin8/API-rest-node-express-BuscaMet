import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/getOfert", async (req, res) => {
  try {
    const getOfert = await prisma.empleo.findMany();
    res.json(getOfert);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
