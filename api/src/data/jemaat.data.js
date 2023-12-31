const prisma = require("../db");

const findJemaats = async () => {
  const jemaats = await prisma.jemaat.findMany();

  return jemaats;
};

const findJemaatById = async (id) => {
  const jemaat = await prisma.jemaat.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  return jemaat;
};

const findJemaatByNoAnggota = async (noAnggota) => {
  const jemaat = await prisma.jemaat.findUnique({
    where: {
      noAnggota: parseInt(noAnggota),
    },
  });

  return jemaat;
};
// const insertAJemaat = async (newJemaatData) => {
//   const { ayah, ibu, ...jemaatData } = newJemaatData;

//   // Helper function to connect or create an 'OrangTua'
//   const connectOrCreateOrangTua = async (orangTuaData) => {
//     if (orangTuaData && orangTuaData.noAnggota) {
//       // Check if 'OrangTua' with noAnggota exists
//       const existingOrangTua = await prisma.orangTua.findUnique({
//         where: { noAnggota: orangTuaData.noAnggota },
//       });

//       if (existingOrangTua) {
//         // Connect to existing 'OrangTua'
//         return { connect: { noAnggota: orangTuaData.noAnggota } };
//       } else {
//         // Create new 'OrangTua' and fill details from 'Jemaat'
//         const correspondingJemaat = await prisma.jemaat.findUnique({
//           where: { noAnggota: orangTuaData.noAnggota },
//         });

//         if (correspondingJemaat) {
//           return {
//             create: {
//               ...orangTuaData,
//               namaDepan: correspondingJemaat.namaDepan,
//               // Add other fields as needed
//             },
//           };
//         } else {
//           // Handle the case where corresponding 'Jemaat' doesn't exist
//           throw new Error(
//             `Corresponding Jemaat not found for noAnggota ${orangTuaData.noAnggota}`
//           );
//         }
//       }
//     }

//     // If no 'noAnggota' is provided, just create a new 'OrangTua'
//     return { create: orangTuaData };
//   };

//   const jemaat = await prisma.jemaat.create({
//     data: {
//       ...jemaatData,
//       ayah: await connectOrCreateOrangTua(ayah),
//       ibu: await connectOrCreateOrangTua(ibu),
//     },
//   });

//   return jemaat;
// };

const insertJemaat = async (newJemaatData) => {
  const { ayah, ibu, ...jemaatData } = newJemaatData;

  const connectOrCreateOrangTua = async (orangTuaData) => {
    if (orangTuaData && orangTuaData.noAnggota) {
      const existingOrangtua = await prisma.orangTua.findUnique({
        where: { noAnggota: orangTuaData.noAnggota },
      });

      if (existingOrangtua) {
        return { connect: { noAnggota: orangTuaData.noAnggota } };
      } else {
        const correspondingJemaat = await prisma.jemaat.findUnique({
          where: { noAnggota: orangTuaData.noAnggota },
        });

        if (correspondingJemaat) {
          return {
            create: {
              ...orangTuaData,
              namaDepan: correspondingJemaat.namaDepan,
              namaTengah: correspondingJemaat.namaTengah,
              namaKeluarga: correspondingJemaat.namaKeluarga,
            },
          };
        } else {
          throw new Error(
            `Corresponding Jemaat not found for ${orangTuaData.noAnggota}`
          );
        }
      }
    }

    return { create: orangTuaData };
  };

  try {
    const jemaat = await prisma.jemaat.create({
      data: {
        ...jemaatData,
        ayah: await connectOrCreateOrangTua(ayah),
        ibu: await connectOrCreateOrangTua(ibu),
      },
    });

    return jemaat;
  } catch (error) {
    if (
      error.code === "P2002" &&
      error.meta &&
      error.meta.target.includes("noAnggota")
    ) {
      throw new Error(
        `Jemaat with noAnggota ${jemaatData.noAnggota} already exists`
      );
    }

    throw error;
  }
};

const editJemaat = async (id, jemaatData) => {
  const jemaat = prisma.jemaat.update({
    where: {
      id: parseInt(id),
    },

    data: {
      namaDepan: jemaatData.namaDepan,
      namaTengah: jemaatData.namaTengah,
      namaKeluarga: jemaatData.namaKeluarga,
      noWA: jemaatData.noWA,
      noTelpRumah: jemaatData.noTelpRumah,
      tempatLahir: jemaatData.tempatLahir,
      ayahId: jemaatData.ayahId,
      ibuId: jemaatData.ibuId,
      golonganDarah: jemaatData.golonganDarah,
      tanggalLahir: jemaatData.tanggalLahir,
      alamatRumah: jemaatData.alamatRumah,
      pekerjaan: jemaatData.pekerjaan,
      jabatan: jemaatData.jabatan,
      perusahaan: jemaatData.perusahaan,
      wilayah: jemaatData.wilayah,
    },
  });

  return jemaat;
};

const deleteJemaat = async (id) => {
  await prisma.jemaat.delete({
    where: {
      id: parseInt(id),
    },
  });
};

module.exports = {
  findJemaats,
  findJemaatById,
  findJemaatByNoAnggota,
  insertJemaat,
  deleteJemaat,
  editJemaat,
};
