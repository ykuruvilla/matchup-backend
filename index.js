require("dotenv").config();
const User = require("./models/users");
const cors = require("cors");
const http = require("http");
const { response } = require("express");
const { Server } = require("socket.io");
const express = require("express");
const userRouter = require("./routes/userRoutes");
const app = express();
const mongoose = require("mongoose");
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

app.use(express.urlencoded({ extended: true }));

app.use(cors());

const server = http.createServer(app);
const PORT = process.env.PORT || 8080;

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);

  socket.on("joinRoom", (roomId) => {
    socket.join(roomId);
    console.log(`User with ID ${socket.id} joined room ${roomId}`);
  });

  socket.on("sendMessage", (messageData) => {
    socket.to(messageData.room).emit("receiveMessage", messageData);
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected ${socket.id}`);
  });
});

const dbURI = `mongodb+srv://${username}:${password}@capstone.fvxt5.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(dbURI)
  .then((response) => {
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.get("/", (_request, response) => {
  response.status(200).send("<h1>Hello there!</h1>");
});

app.use("/users", userRouter);
