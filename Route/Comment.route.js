import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.post("/addComment", async (req, res) => {
  try {
    const newComent = await prisma.coment.create({
      data: req.body,
    });
    res.json(newComent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/getComment", async (req, res) => {
  try {
    const getComment = await prisma.coment.findMany();
    res.json(getComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.delete("/deleteComment/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteComent = await prisma.coment.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({
      deleteComent,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
