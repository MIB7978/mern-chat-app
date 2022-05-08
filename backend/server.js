const express = require("express");
const chats = require("./data");
const dotenv = require("dotenv");
const db = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8080;

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});
db();
app.use("/api/user", userRoutes);
app.use("/api/chat",chatRoutes)

app.use(errorHandler);
app.use(notFound);
app.listen(PORT, () => console.log(`PORT listen on ${PORT}`));
