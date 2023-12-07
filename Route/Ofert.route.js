import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.post("/addOfert", async (req, res) => {
  try {
    const newOfert = await prisma.empleo.create({
      data: req.body,
    });
    res.json(newOfert);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/updateOfert/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updateOfert = await prisma.empleo.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    res.json(updateOfert);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



router.delete("/deleteOfert/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteOfert = await prisma.empleo.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({
      deleteOfert,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
