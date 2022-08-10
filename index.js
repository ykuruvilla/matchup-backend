require("dotenv").config();
const User = require("./models/users");
const cors = require("cors");

const { response } = require("express");
const express = require("express");
const userRouter = require("./routes/userRoutes");
const app = express();
const mongoose = require("mongoose");
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const dbURI = `mongodb+srv://${username}:${password}@capstone.fvxt5.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(dbURI)
  .then((response) => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get("/", (_request, response) => {
  response.status(200).send("<h1>Hello there!</h1>");
});

app.use("/users", userRouter);

app.get("/add-user", (req, res) => {
  const newUser = new User({
    firstName: "Jack",
    lastName: "Wills",
    email: "jackwills@test.com",
    postcode: "sw82xs",
    tennis: true,
    squash: true,
    badminton: false,
    tableTennis: false,
    bowling: false,
    golf: true,
  });

  user
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// app.get("/all-users", (req, res) => {
//   User.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
