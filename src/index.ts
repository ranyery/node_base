import cors from "cors";
import express from "express";
import router from "./router";

const PORT = 3333;

const app = express();

app.use(cors());
app.use(express.json());

app.disable("x-powered-by");

app.get("/", (request, response) => {
  response.send({ message: "Hello, World!" });
});

app.use("/api/v1", router());

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
