const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://www.gkitamancibunut.org",
      "https://gkitamancibunut.org",
    ],
    methods: ["GET", "POST", "PUT", "OPTIONS", "HEAD", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(bodyParser.json());

app.use(morgan("dev"));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// app.get('/api', (req, res) => {
//   res.send('BABI');
// });

// app.get('*', (req, res) => {
//   res.sendFile(
//     path.resolve(__dirname, '../client/.next/server/app', 'index.html')
//   );
// });

const userController = require("./controllers/user.controller");
const jemaatController = require("./controllers/jemaat.controller");
const karyawanController = require("./controllers/karyawan.controller");
const kegiatanController = require("./controllers/kegiatan.controller");
const orangTuaController = require("./controllers/orangTua.controller");
const ibadahController = require("./controllers/ibadah.controller");
const doaController = require("./controllers/doa.controller");
const renunganController = require("./controllers/renungan.controller");
const pendetaController = require("./controllers/pendeta.controller");
const pemahamanController = require("./controllers/pemahaman.controller");

app.use("/auth", userController);
app.use("/jemaats", jemaatController);
app.use("/pendeta", pendetaController);
app.use("/kegiatans", kegiatanController);
app.use("/orangtua", orangTuaController);
app.use("/ibadah", ibadahController);
app.use("/doa", doaController);
app.use("/renungan", renunganController);
app.use("/pemahaman", pemahamanController);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
