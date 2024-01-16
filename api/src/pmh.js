const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function pmh() {
  try {
    await prisma.pemahamanAlkitab.create({
      data: {
        tema: "MENGHIDUPI IMAN YANG DILEMATIS",
        pendeta: "Pdt. Samuel Adi Perdana",
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

pmh();
