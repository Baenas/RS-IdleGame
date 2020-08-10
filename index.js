const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
// IMPORT MODELS
const itemRouter = require("./routes/idle-items");
const playerRouter = require("./routes/idle-player");
const enemyRouter = require("./routes/idle-enemy");

const sqlite3 = require('sqlite3')


const app = express();
app.use("/", itemRouter);
app.use("/", playerRouter);
app.use("/", enemyRouter);


require('dotenv').config();

// mongoose.Promise = global.Promise;
// const dbPath = process.env.MONGODB_URI;
// mongoose
//   .connect(dbPath, { useFindAndModify: false })
//   .then(() => console.log("MongoDB Connected..."))
//   .catch(err => console.log(err));
// app.use(bodyParser.json());

app.use(
  cors({
    origin: process.env.front
  })
);
//IMPORT ROUTES
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })

}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});

module.exports = app;