import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "Olá" });
});

app.post("/courses", (req, res) => {
  const { name } = req.body;

  return res.json({ name });
});

app.listen(3000, () => console.log("server is running!"));
