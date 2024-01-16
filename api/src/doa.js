const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function doa() {
  try {
    await prisma.doa.create({
      data: {
        category: "pagi",
        tema: "Tema Default",
        pemimpin: "Pdt. Default",
        infoTambahan: "info Default",
        waktuMulai: "1970-01-01T07:05:00.000Z",
        waktuSelesai: "1969-12-31T19:05:00.000Z",
      },
    });
    await prisma.doa.create({
      data: {
        category: "malam",
        tema: "Tema Default",
        pemimpin: "Pdt. Default",
        infoTambahan: "info Default",
        waktuMulai: "1970-01-01T07:05:00.000Z",
        waktuSelesai: "1969-12-31T19:05:00.000Z",
      },
    });
  } catch (error) {
    console.error(error);
  }
}

doa();
