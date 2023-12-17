// seed.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  try {
    // Insert default data for category 'umum'
    await prisma.ibadah.create({
      data: {
        category: 'umum',
        temaIbadah: 'Default Umum Theme',
        pemimpin: 'Default Pemimpin',
        linkVideo: 'Default Link Video',
        infoTambahan: 'Default Info Tambahan',
        waktuMulai: new Date(),
        waktuSelesai: new Date(),
      },
    });

    await prisma.ibadah.create({
      data: {
        category: 'remaja',
        temaIbadah: 'Default Remaja Theme',
        pemimpin: 'Default Pemimpin',
        linkVideo: 'Default Link Video',
        infoTambahan: 'Default Info Tambahan',
        waktuMulai: new Date(),
        waktuSelesai: new Date(),
      },
    });

    await prisma.ibadah.create({
      data: {
        category: 'pemuda',
        temaIbadah: 'Default Pemuda Theme',
        pemimpin: 'Default Pemimpin',
        linkVideo: 'Default Link Video',
        infoTambahan: 'Default Info Tambahan',
        waktuMulai: new Date(),
        waktuSelesai: new Date(),
      },
    });

    await prisma.ibadah.create({
      data: {
        category: 'sekolahMinggu',
        temaIbadah: 'Default Sekolah Minggu Theme',
        pemimpin: 'Default Pemimpin',
        linkVideo: 'Default Link Video',
        infoTambahan: 'Default Info Tambahan',
        waktuMulai: new Date(),
        waktuSelesai: new Date(),
      },
    });

    await prisma.renungan.create({
      data: {
        title: 'Default',
        kitab: 'Default',
        ayat: 'Default',
        content: 'Default',
      },
    });

    // Repeat the process for other categories...

    console.log('Seed completed successfully');
  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
