require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4100;

app.use(cors());
app.use(express.json());
console.log(PORT);

app.listen(PORT, () =>
  console.log(`[EXPRESS] Server corriendo en el puerto ${PORT}!`)
);
